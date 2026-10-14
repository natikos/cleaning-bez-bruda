import type { APIRoute } from 'astro';
import { noindex } from '../data/site';

export const GET: APIRoute = ({ site }) => {
  const body = noindex
    ? 'User-agent: *\nDisallow: /\n'
    : ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('/sitemap-index.xml', site).href}`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
