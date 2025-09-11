import levenshtein from 'js-levenshtein-esm';

/** Determines if the provided URL is absolute or not. */
export function isAbsoluteUrl(url: string): boolean {
  if (typeof url !== 'string') {
    throw new TypeError(`Expected a "string", received \`${typeof url}\``);
  }
  if (/^[a-zA-Z]:\\/.test(url)) {
    return false;
  }
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(url);
}

export function debounce(func: Function, delay = 200): () => void {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

export function computeStringSimilarity(str1: string, str2: string): number {
  const maxLength = Math.max(str1.length, str2.length);
  if (maxLength === 0) {
    return 1;
  }
  return 1 - (levenshtein(str1, str2) / maxLength);
}
