import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { defaultLocale, locales } from './src/i18n/config.ts';

export default defineConfig({
  // Production URL: used for canonical links, hreflang, Open Graph, sitemap and robots.txt.
  // TODO: replace with the real domain before deploying.
  site: 'https://bezbruda.com.ua',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [sitemap({ i18n: { defaultLocale, locales: { uk: 'uk', en: 'en' } } })]
});
