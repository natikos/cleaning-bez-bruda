// Staging/demo deploys set NOINDEX=1 to keep crawlers out (meta robots, robots.txt, no sitemap).
export const noindex = Boolean(process.env.NOINDEX);
