const fs = require('fs');
import axios from 'axios';
import { SecretsManager } from 'aws-sdk';
let secretsManager: SecretsManager;

export interface IAuthConfig {
  AUTH_REQUEST: {
    client_id: string;
    response_type: string;
    scope: string;
    redirect_uri: string;
    nonce?: string;
    state?: string;
  };
  TOKEN_REQUEST: {
    client_id: string;
    redirect_uri: string;
    grant_type: string;
    client_secret: string;
  };
  PRIVATE_KEY: string;
  PUBLIC_KEY: string;
  DISCOVERY_DOCUMENT: string;
  SESSION_DURATION: number;
  CALLBACK_PATH: string;
  SIGN_OUT_PATH: string;
  PUBLIC_PATHS: string[];
  FORWARD_INDEX_ENABLED: boolean;
}

export interface IConfig {
  authConfig: IAuthConfig;
  discoveryDocument: any;
  jwks: any;
}

export async function getConfig(): Promise<IConfig> {
  const environment = process.env.NODE_ENV;
  const secretArn: string | undefined = process.env.AUTH_SECRET_ARN;
  const authConfig: IAuthConfig = environment === 'development'
    // Fetch config values from disk
    ? JSON.parse(fs.readFileSync('config.json', 'utf8'))
    : await getAwsSecret(secretArn);

  // Fetch discovery document from discovery endpoint
  const discoveryResponse = await axios.get(authConfig.DISCOVERY_DOCUMENT);
  const discoveryDocument = discoveryResponse.data;

  let jwks: string;

  // Fetch jwks from jwks URI within discovery document
  if (discoveryDocument.hasOwnProperty('jwks_uri')) {
    try {
      // Fetch public key for verifying the JWT later
      const jwksResponse = await axios.get(discoveryDocument.jwks_uri);
      jwks = jwksResponse.data;
    } catch (error: any) {
      throw new Error(`An error occurred while attempting to fetch JWK: ${error.message}`);
    }
  } else {
    throw new Error('Invalid JWKS URI in discovery document.');
  }

  return { authConfig, discoveryDocument, jwks };
}

async function getAwsSecret(secretArn: string | undefined): Promise<any | undefined> {
  if (!secretArn) {
    throw new Error('AWS Secret requested, but no secretArn provided.')
  }
  const secretRegion = secretArn.split(':')[3];
  if (!secretsManager) {
    secretsManager = new SecretsManager({ region: `${secretRegion}` });
  }
  const response = await secretsManager.getSecretValue({ SecretId: `${secretArn}` }).promise();

  if (response.SecretString) {
    const jsonValue = response.SecretString;

    try {
      return JSON.parse(jsonValue);
    } catch (error) {
      return jsonValue;
    }
  } else {
    throw new Error(`No secret response provide for secretArn: ${secretArn}`)
  }
}