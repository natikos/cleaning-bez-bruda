# Bez bruda

Website for Bez bruda, a cleaning company in Lviv: a succinct one-page site (hero, services, clients, prices, contacts), built with [Astro](https://astro.build).

## Requirements

- [Bun](https://bun.sh) (the repo ships a `bun.lock`)

## Getting started

```bash
bun install
bun run dev
```

The dev server runs on `http://localhost:4321`.

## Scripts

| Command                | Description                                  |
| ---------------------- | -------------------------------------------- |
| `bun run dev`          | Start the development server                 |
| `bun run build`        | Build the static site to `dist/`             |
| `bun run preview`      | Preview the production build                 |
| `bun run typecheck`    | Type-check with `astro check`                |
| `bun run format`       | Format the code with Prettier                |
| `bun run format:check` | Check formatting without writing             |
| `bun run lint`         | Lint with ESLint                             |
| `bun run lint:fix`     | Lint and auto-fix with ESLint                |
| `bun run deploy`       | Build and deploy to Cloudflare with Wrangler |

## Project structure

```
src/pages/       Routes: / (Ukrainian), /en/ (English), robots.txt
src/layouts/     BaseLayout.astro: shared <head>; HomePage.astro: SEO meta, hreflang, JSON-LD and section order
src/components/  One component per section (header, hero, services, FAQ, ...)
src/i18n/        All copy: uk.ts (source of truth) and en.ts, plus locale helpers
src/data/        Contacts, prices and structured data (schema.org) builder
src/assets/      Photos and logo, optimized to responsive WebP at build time
src/styles/      Global CSS
public/          Favicons, app icons, OG images, messenger icons
```

## Languages and SEO

- Ukrainian is the default language at `/`, English lives at `/en/`. Both pages link to each other with `hreflang`.
- To change any text, edit `src/i18n/uk.ts` and `src/i18n/en.ts`; prices are in `src/data/prices.ts`.
- The production URL is `site` in `astro.config.mjs`: it feeds canonical links, Open Graph, sitemap and robots.txt.
- `public/og-uk.jpg` and `public/og-en.jpg` are the 1200×630 social previews.

## Deployment

Hosted on Cloudflare as static assets (`wrangler.jsonc`; unknown URLs get `404.html`). `bun run deploy` builds and publishes; `public/_headers` sets caching and security headers.

For staging/demo deploys set `SITE_URL=https://your-demo.example` and `NOINDEX=1` at build time: canonical URLs follow `SITE_URL`, and the build gets `noindex` meta, a disallow-all `robots.txt` and no sitemap.

Deploys are manual: run the Deploy workflow from the GitHub Actions tab (`.github/workflows/deploy.yml`). It first runs the CI checks and deploys only if they pass. Add the repository secrets `CLOUDFLARE_API_TOKEN` (token with the "Edit Cloudflare Workers" template) and `CLOUDFLARE_ACCOUNT_ID`.

CI (`.github/workflows/ci.yml`) runs format check, lint, typecheck, and build.
