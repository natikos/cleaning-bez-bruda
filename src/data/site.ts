// Staging/demo deploys set NOINDEX=1 to keep crawlers out (meta robots, robots.txt, no sitemap).
export const noindex = Boolean(process.env.NOINDEX);

// GA4 Measurement ID (public). Off in dev and on NOINDEX staging builds so test visits don't pollute stats.
export const gaId = import.meta.env.PROD && !noindex ? 'G-VLDBEPC81H' : undefined;
