import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defaultLocale, locales } from './src/i18n/config.ts';

export default defineConfig({
  // Production URL: used for canonical links, hreflang, Open Graph, sitemap and robots.txt.
  // Override with SITE_URL for staging/demo deploys.
  site: process.env.SITE_URL || 'https://bezbruda.com.ua',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: false }
  },
  // No sitemap for NOINDEX staging deploys
  integrations: process.env.NOINDEX ? [] : [sitemap({ i18n: { defaultLocale, locales: { uk: 'uk', en: 'en' } } })]
});
