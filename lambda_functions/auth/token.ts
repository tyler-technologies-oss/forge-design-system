import { verify, decode, sign as signJwt, SignOptions } from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';

export interface IVerifyTokenResult {
  decoded: any;
  error?: string;
}

/**
 * Verifies the JWT, the payload email, and that the email ends with configured hosted domain.
 * @param token The JWT.
 * @param publicKey The public key to decode the token.
 */
export function verifyToken(token: string, publicKey: string): Promise<IVerifyTokenResult> {
  return new Promise<IVerifyTokenResult>(resolve => {
    verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
      resolve({
        decoded,
        error: err ? err.name : undefined
      });
    });
  });
}

/**
 * Decodes a token.
 * @param tokenStr The raw token.
 */
export function decodeToken(tokenStr: string): null | { [key: string]: any } | string {
  return decode(tokenStr, { complete: true });
}

/**
 * Finds a matching JWK from a list of keys given the key id claim.
 * @param jwkKeys The keys to search.
 * @param keyId The key id claim.
 */
export function createPemFromJwk(jwkKeys: any[], keyId: string): string {
  let pem = '';
  for (let i = 0; i < jwkKeys.length; i++) {
    if (keyId === jwkKeys[i].kid) {
      pem = jwkToPem(jwkKeys[i]);
      break;
    }
  }
  return pem
}

export function asSignedJwt(key: string, audience: string, subject: string, expiresIn: number): string {
  const options: SignOptions = {
    audience,
    subject,
    expiresIn,
    algorithm: 'RS256'
  };
  return signJwt({}, key, options);
}
