import crypto from 'crypto';

/**
 * Creates a new nonce with its hash and returns the two as tuple.
 */
export function generateNonce(): [string, string] {
  const nonce = crypto.randomBytes(32).toString('hex');
  const hash = getNonceHash(nonce);
  return [nonce, hash];
}

/**
 * Returns a hash of the provided nonce value.
 * @param nonce The nonce value.
 * @returns A hash of the nonce value.
 */
export function getNonceHash(nonce: string): string {
  return crypto.createHmac('sha256', nonce).digest('hex');
}

/**
 * Determines if the provided hashed nonce matches its original hashed value.
 * @param nonce The nonce.
 * @param hash The nonce hash.
 */
export function validateNonce(nonce: string, hash: string | undefined): boolean {
  const other = getNonceHash(nonce);
  return other === hash;
}