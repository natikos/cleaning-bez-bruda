import { defineConfig } from 'astro/config'

export default defineConfig({
  // Production URL: used for canonical links, hreflang, Open Graph, sitemap and robots.txt.
  // TODO: replace with the real domain before deploying.
  site: 'https://bezbruda.com.ua',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'uk',
    locales: ['uk', 'en'],
    routing: { prefixDefaultLocale: false }
  }
})
