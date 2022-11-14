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
