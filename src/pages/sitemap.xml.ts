import type { APIRoute } from 'astro';
import { defaultLocale, homePath, locales } from '../i18n';

// One entry per language version, each listing all alternates (hreflang) as Google recommends.
export const GET: APIRoute = ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const lastmod = new Date().toISOString().slice(0, 10);
  const link = (hreflang: string, path: string) =>
    `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${abs(path)}"/>`;
  const alternates = [...locales.map(l => link(l, homePath(l))), link('x-default', homePath(defaultLocale))];
  const urls = locales.flatMap(l => [
    '  <url>',
    `    <loc>${abs(homePath(l))}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    ...alternates,
    '  </url>'
  ]);

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    ''
  ].join('\n');
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
