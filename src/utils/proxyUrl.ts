/**
 * Wraps external image URLs (Wikipedia, etc.) through our server-side proxy
 * which sends proper browser headers and caches the result.
 * This avoids 429 rate-limiting from Wikimedia CDN.
 */
export function proxyUrl(url: string): string {
  if (!url) return url;
  // Only proxy Wikipedia/Wikimedia URLs — other CDNs (flagcdn, thesportsdb) work fine directly
  if (url.includes('wikimedia.org') || url.includes('wikipedia.org')) {
    return `/api/img?url=${encodeURIComponent(url)}`;
  }
  return url;
}
