import {
  CloudFrontRequestHandler,
  CloudFrontRequestEvent,
  CloudFrontRequestResult,
  CloudFrontRequest,
  CloudFrontResponseResult,
  CloudFrontHeaders
} from 'aws-lambda';
import {
  parse as parseCookie,
  serialize as serializeCookie
} from 'cookie';
import axios from 'axios';

import { getConfig, IConfig } from './config';
import { verifyToken, decodeToken, createPemFromJwk, asSignedJwt } from './token';
import { generateNonce, getNonceHash, validateNonce } from './nonce';

// We cache the config.json from disk | AWS Secret here
let config: IConfig;

const TOKEN_COOKIE_NAME = 'TOKEN';
const NONCE_COOKIE_PREFIX = 'NONCE.';

/**
 * This is the main entry point for the lambda function.
 * @param event The CloudFront request event.
 */
export const handler: CloudFrontRequestHandler = async event => {
  const request = event.Records[0].cf.request;

  console.log(`[forge] Handling request URI: ${request.uri}`);

  try {
    // First we check if we have already retrieved our config
    if (!config) {
      console.log('[forge] Retrieving config');
      config = await getConfig();
    }

    // Validate config
    if (!config.authConfig || !config.discoveryDocument || !config.jwks) {
      throw new Error('Invalid config. Exiting.');
    }

    // Check if we need to forward the request to an index.html file
    if (config.authConfig.FORWARD_INDEX_ENABLED !== false) {
      console.log('Enabling forward index');
      const forwardUri = await reformatURIToForwardIndex(request.uri);
      if (forwardUri !== request.uri) {
        request.uri = forwardUri;
        console.log(`Forwarded URI: ${request.uri}`);
      }
    }

    // Check if this URI is listed as public, if so, we just allow the request to pass through without auth
    if (isPublicPath(request.uri)) {
      console.log('[forge] Public path. No authorization required.');
      return request;
    }

    // Process this request through our authorization flow
    return processRequest(event, request);
  } catch (e: any) {
    // All exceptions display our custom error page
    // Remove or redact sensitive error details from logs
    const errorId = Math.random().toString(36).substring(2, 15); // Generate a unique error ID
    console.log(`[forge] Internal server error. Error ID: ${errorId}`);
    return internalServerError(request.headers);
  }
};

/**
 * Rewrites the URI to append on "index.html" if the request is to a directory.
 */
function reformatURIToForwardIndex(uri: string): string {
  // Plus symbols are interpreted as spaces in S3 so lets encode it.
  uri = uri.replace(/\+/g, '%2B');

  if (uri.endsWith('/')) {
    return uri + 'index.html';
  }

  const looksLikeAFile = uri.split('/').pop()?.includes('.');

  // If the URI looks like a directory, then we need to forward to index.html
  if (!looksLikeAFile) {
    uri = uri.replace(/\/?$/, '/') + 'index.html';
  }

  return uri;
}

/**
 * Determines if the provided URI is a valid public path
 * @param uri The URI to check.
 */
function isPublicPath(uri: string): boolean {
  if (Array.isArray(config.authConfig.PUBLIC_PATHS)) {
    return config.authConfig.PUBLIC_PATHS.some(path => uri.startsWith(path))
  }
  return false;
}

/**
 * This is where we route the current request to the proper location and coordinate the authorization flow.
 * @param event The CloudFront event.
 * @param request The CloudFront request.
 */
async function processRequest(event: CloudFrontRequestEvent, request: CloudFrontRequest): Promise<CloudFrontResponseResult | CloudFrontRequest> {
  const headers = request.headers;
  const queryDict = parseQueryString(request.querystring);
  const requestConfig = event.Records[0].cf.config;

  // If this is a test invocation, then update our config accordingly
  if (requestConfig.hasOwnProperty('test')) {
    config.authConfig.AUTH_REQUEST.redirect_uri = (<any>requestConfig).test + config.authConfig.CALLBACK_PATH;
    config.authConfig.TOKEN_REQUEST.redirect_uri = (<any>requestConfig).test + config.authConfig.CALLBACK_PATH;
  }

  // This is where we process the request based on the request URI
  if (hasTokenCookie(headers)) {
    // This request has a token, so lets validate it
    console.log('[forge] Token exists, validating...');
    const token = parseCookie(headers["cookie"][0].value).TOKEN!;
    const result = await verifyToken(token, config.authConfig.PUBLIC_KEY.trim());
    if (result.error) {
      // The token validation failed
      console.log('[forge] Token validation error');
      return handleTokenError(request, result.error);
    }
    // This is a valid request, allow access to the resource
    return request;
  } else if (request.uri.startsWith(config.authConfig.CALLBACK_PATH)) {
    // This is the callback from the IDP, lets start our auth flow to retrieve a token...
    console.log('[forge] Handling auth callback...');
    return await handleAuthCallback(event, request, headers, queryDict);
  } else if (request.uri.startsWith(config.authConfig.SIGN_OUT_PATH)) {
    // We need to sign out from the IDP
    console.log('[forge] Signing out...');
    if (!hasTokenCookie(headers)) {
      return redirectToIdp(request);
    }
    const idToken = (parseCookie(headers['cookie'][0].value).TOKEN!);
    return handleSignOut(idToken, headers);
  } else {
    console.log('[forge] Redirecting to IDP.')
    return redirectToIdp(request);
  }
}

/**
 * Determines if the provided request has a token header.
 * @param headers The request headers.
 */
function hasTokenCookie(headers: CloudFrontHeaders): boolean {
  return 'cookie' in headers && TOKEN_COOKIE_NAME in parseCookie(headers['cookie'][0].value);
}

/**
 * Handles redirecting to the proper location based on the provided token validation error type.
 * @param request The CloudFront request.
 * @param type The token error type.
 */
function handleTokenError(request: CloudFrontRequest, type: string): CloudFrontResponseResult {
  switch (type) {
    case 'TokenExpiredError':
      console.log('[forge] Token expired');
      return redirectToIdp(request);
    case 'JsonWebTokenError':
      console.log('[forge] JWT error');
      return unauthorized('Json Web Token Error', request.headers);
    default:
      console.log('[forge] Unknown JWT error. User is not permitted.');
      return unauthorized('Unauthorized.', request.headers);
  }
}

/**
 * Converts an error key to a specific request description.
 * @param reqErrorKey The error key to search for.
 */
function parseCallbackError(reqErrorKey: string): string {
  const errors: { [key: string]: string } = {
    'invalid_request': 'Invalid Request',
    'unauthorized_client': 'Unauthorized Client',
    'access_denied': 'Access Denied',
    'unsupported_response_type': 'Unsupported Response Type',
    'invalid_scope': 'Invalid Scope',
    'server_error': 'Server Error',
    'temporarily_unavailable': 'Temporarily Unavailable'
  }
  if (errors[reqErrorKey]) {
    return errors[reqErrorKey];
  } else {
    return reqErrorKey;
  }
}

/**
 * Creates expired Set-Cookie values for each NONCE.* cookie to remove them from subsequent requests.
 * @param headers The request headers.
 * @returns An array of Set-Cookie objects to be passed directly as request headers.
 */
function expireNonceCookies(headers: CloudFrontHeaders) {
  const cookieHeader = parseCookie(headers['cookie'][0].value);
  return Object.keys(cookieHeader)
    .filter(key => key.startsWith(NONCE_COOKIE_PREFIX))
    .map(key => {
      const expiredNonceCookie = serializeCookie(key, '', { path: '/', expires: new Date(1970, 1, 1, 0, 0, 0, 0) });
      return { 'key': 'Set-Cookie', 'value': expiredNonceCookie };
    });
}

/**
 * Handles authorization callback requests from the IDP. 
 * 
 * This is where we use the provided authorization code to request an access token
 * and redirect to the originally requested resource.
 * 
 * @param event The CloudFront request event.
 * @param request The CloudFront request.
 * @param headers The request headers.
 * @param queryDict The request querystring as an object.
 */

interface ParsedUrlQuery {
  [key: string]: string | string[] | undefined;
}

async function handleAuthCallback(event: CloudFrontRequestEvent, request: CloudFrontRequest, headers: CloudFrontHeaders, queryDict: ParsedUrlQuery): Promise<CloudFrontRequestResult> {
  try {
    // Check for error response (https://tools.ietf.org/html/rfc6749#section-4.2.2.1)
    if (queryDict.error) {
      const message = parseCallbackError(queryDict.error as string);
      console.log('[forge] unauthorized: error param exists in response from IDP.', message)
      return unauthorized(message, headers);
    }

    // Make sure we have an auth code in the query string
    if (!queryDict.code) {
      console.log('[forge] unauthorized: no auth code found in response from IDP.')
      return unauthorized('No code found.', headers);
    }

    // Exchange code for authorization token
    const postData = stringifyQueryString({ ...config.authConfig.TOKEN_REQUEST, code: queryDict.code });
    const tokenResponse = await axios.post(config.discoveryDocument.token_endpoint, postData);
    const decodedData = decodeToken(tokenResponse.data.id_token) as { [key: string]: any };

    const pem = createPemFromJwk(config.jwks.keys, decodedData.header.kid);
    const result = await verifyToken(tokenResponse.data.id_token, pem);

    if (result.error) {
      console.log('[forge] token verification error', result.error);
      return handleTokenError(request, result.error);
    } else {
      if ('cookie' in headers === false) {
        console.log('[forge] no cookie header exists');
        return unauthorized('Unable to verify nonce. No nonce cookie set.', headers);
      }

      console.log('[forge] validating nonce...');

      // Validate nonce
      const cookies = parseCookie(headers['cookie'][0].value);
      const idpNonceHash = getNonceHash(result.decoded.nonce);
      const nonceCookieName = NONCE_COOKIE_PREFIX + idpNonceHash;
      const requestNonceHash = cookies[nonceCookieName];

      if (!requestNonceHash) {
        console.log('[forge] nonce cookie (' + nonceCookieName + ') not found in cookies: ', JSON.stringify(cookies));
      }

      const hasNonceCookie = Object.keys(cookies).some(key => key.startsWith(NONCE_COOKIE_PREFIX));
      const isNonceValid = hasNonceCookie && validateNonce(result.decoded.nonce, requestNonceHash);

      if (isNonceValid) {
        console.log('[forge] Nonce valid');
        // Sign the JWT with our private key so that it cannot be used directly (because it will live in a cookie)
        const audience = headers.host[0].value;
        const subject = decodedData.payload.email;
        const expiration = config.authConfig.SESSION_DURATION;
        const signedJwt = asSignedJwt(config.authConfig.PRIVATE_KEY.trim(), audience, subject, expiration);
        const tokenCookie = serializeCookie(TOKEN_COOKIE_NAME, signedJwt, { path: '/', maxAge: config.authConfig.SESSION_DURATION });
        const redirectLocation = event.Records[0].cf.config.hasOwnProperty('test') ? (config.authConfig.AUTH_REQUEST.redirect_uri + queryDict.state) : queryDict.state as string;

        // Once verified, create new JWT for this server
        return {
          'status': '302',
          'statusDescription': 'Found',
          'body': 'ID token retrieved.',
          'headers': {
            'location': [
              { 'key': 'Location', 'value': redirectLocation }
            ],
            'set-cookie': [
              { 'key': 'Set-Cookie', 'value': tokenCookie },
              ...expireNonceCookies(headers)
            ],
          },
        };
      } else {
        console.log('[forge] Nonce invalid');
        if (hasNonceCookie) {
          console.log('[forge] nonce cookie mismatch');
        } else {
          console.log('[forge] missing nonce cookie');
        }
        return unauthorized('Nonce Verification Failed', headers);
      }
    }
  } catch (error: any) {
    console.log(`[forge] Internal server error: ${error.message}`);
    return internalServerError(headers);
  }
}

/**
 * Handles sign out requests.
 * @param request The current CloudFront request.
 */
function handleSignOut(idToken: string, headers: CloudFrontHeaders): CloudFrontResponseResult {
  const expiredToken = serializeCookie(TOKEN_COOKIE_NAME, '', { path: '/', expires: new Date(1970, 1, 1, 0, 0, 0, 0) });
  const querystring = stringifyQueryString({
    id_token_hint: idToken,
    client_id: config.authConfig.AUTH_REQUEST.client_id
  });
  const redirectLocation = `${config.discoveryDocument.issuer}/oauth2/v1/logout?${querystring}`;
  return {
    'status': '307',
    'statusDescription': 'Temporary Redirect',
    'headers': {
      'location': [{ key: 'location', value: redirectLocation, }],
      'set-cookie': [
        { 'key': 'Set-Cookie', 'value': expiredToken },
        ...expireNonceCookies(headers)
      ]
    }
  };
}

/**
 * Redirects this request to the configured IDP for sign in.
 * @param request The current request.
 */
function redirectToIdp(request: CloudFrontRequest): CloudFrontResponseResult {
  const [nonce, nonceHash] = generateNonce();
  config.authConfig.AUTH_REQUEST.nonce = nonce;
  config.authConfig.AUTH_REQUEST.state = request.uri;

  const querystring = stringifyQueryString(config.authConfig.AUTH_REQUEST);
  const redirectLocation = config.discoveryDocument.authorization_endpoint + '?' + querystring;
  const expiredTokenCookie = serializeCookie(TOKEN_COOKIE_NAME, '', { path: '/', expires: new Date(1970, 1, 1, 0, 0, 0, 0) });
  const nonceCookie = serializeCookie(NONCE_COOKIE_PREFIX + nonceHash, nonceHash, { path: '/', httpOnly: true });

  return {
    'status': '302',
    'statusDescription': 'Found',
    'body': 'Redirecting to sign in page...',
    'headers': {
      'location': [{ 'key': 'Location', 'value': redirectLocation }],
      'set-cookie': [
        { 'key': 'Set-Cookie', 'value': expiredTokenCookie },
        { 'key': 'Set-Cookie', 'value': nonceCookie }
      ],
    },
  };
}

/**
 * Renders an error page.
 * @param callback The CloudFront request callback.
 */
function internalServerError(headers: CloudFrontHeaders): CloudFrontRequestResult {
  let page = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tyler Forge | 500 - Internal Server Error</title>
    <style type="text/css">/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}/*! Simple HttpErrorPages | MIT X11 License | https://github.com/AndiDittrich/HttpErrorPages */body,html{width:100%;height:100%;background-color:#21232a}body{color:#fff;text-align:center;text-shadow:0 2px 4px rgba(0,0,0,.5);padding:0;min-height:100%;-webkit-box-shadow:inset 0 0 100px rgba(0,0,0,.8);box-shadow:inset 0 0 100px rgba(0,0,0,.8);display:table;font-family:"Open Sans",Arial,sans-serif}h1{font-family:inherit;font-weight:500;line-height:1.1;color:inherit;font-size:36px}h1 small{font-size:68%;font-weight:400;line-height:1;color:#777}a{text-decoration:none;color:#fff;font-size:inherit;border-bottom:dotted 1px #707070}.lead{color:silver;font-size:21px;line-height:1.4}.cover{display:table-cell;vertical-align:middle;padding:0 20px}footer{position:fixed;width:100%;height:40px;left:0;bottom:0;color:#a0a0a0;font-size:14px}</style>
</head>
<body>
    <div class="cover">
      <h1>Internal Server Error <small>Error 500</small></h1>
    </div>
</body>
</html>
  `;

  const expiredToken = serializeCookie(TOKEN_COOKIE_NAME, '', { path: '/', expires: new Date(1970, 1, 1, 0, 0, 0, 0) });

  return {
    'status': '500',
    'statusDescription': 'Internal Server Error',
    'body': page,
    'headers': {
      'set-cookie': [
        { 'key': 'Set-Cookie', 'value': expiredToken },
        ...expireNonceCookies(headers)
      ],
    },
  } as CloudFrontRequestResult;
}

/**
 * Creates a response result containing an HTML page with basic details about unauthorized requests.
 * @param error The error message.
 * @param errorDescription The error description.
 * @param errorUri The error URI.
 */
function unauthorized(error: string, headers: CloudFrontHeaders): CloudFrontResponseResult {
  let page = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Tyler Forge | 401 - Unauthorized</title>
    <style type="text/css">/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}/*! Simple HttpErrorPages | MIT X11 License | https://github.com/AndiDittrich/HttpErrorPages */body,html{width:100%;height:100%;background-color:#21232a}body{color:#fff;text-align:center;text-shadow:0 2px 4px rgba(0,0,0,.5);padding:0;min-height:100%;-webkit-box-shadow:inset 0 0 100px rgba(0,0,0,.8);box-shadow:inset 0 0 100px rgba(0,0,0,.8);display:table;font-family:"Open Sans",Arial,sans-serif}h1{font-family:inherit;font-weight:500;line-height:1.1;color:inherit;font-size:36px}h1 small{font-size:68%;font-weight:400;line-height:1;color:#777}a{text-decoration:none;color:#fff;font-size:inherit;border-bottom:dotted 1px #707070}.lead{color:silver;font-size:21px;line-height:1.4}.cover{display:table-cell;vertical-align:middle;padding:0 20px}footer{position:fixed;width:100%;height:40px;left:0;bottom:0;color:#a0a0a0;font-size:14px}</style>
</head>
<body>
    <div class="cover">
      <h1>${error} <small>Error 401</small></h1>
    </div>
</body>
</html>
  `;

  const expiredToken = serializeCookie(TOKEN_COOKIE_NAME, '', { path: '/', expires: new Date(1970, 1, 1, 0, 0, 0, 0) });

  return {
    'status': '401',
    'statusDescription': 'Unauthorized',
    'body': page,
    'headers': {
      'set-cookie': [
        { 'key': 'Set-Cookie', 'value': expiredToken },
        ...expireNonceCookies(headers)
      ],
    },
  };
}

function parseQueryString(query: string): Record<string, string> {
  const params = new URLSearchParams(query);
  const result: Record<string, string> = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;
}

function stringifyQueryString(obj: Record<string, any>): string {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      params.append(key, String(value));
    }
  });
  return params.toString();
}