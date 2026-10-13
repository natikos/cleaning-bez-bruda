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

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `bun run dev`          | Start the development server     |
| `bun run build`        | Build the static site to `dist/` |
| `bun run preview`      | Preview the production build     |
| `bun run typecheck`    | Type-check with `astro check`    |
| `bun run format`       | Format the code with Prettier    |
| `bun run format:check` | Check formatting without writing |
| `bun run lint`         | Lint with ESLint                 |
| `bun run lint:fix`     | Lint and auto-fix with ESLint    |

## Project structure

```
src/pages/       Routes: / (Ukrainian), /en/ (English), robots.txt
src/layouts/     HomePage.astro: <head> (SEO meta, hreflang, JSON-LD) and section order
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

The build output is a static site in `dist/`; see the [Astro deployment docs](https://docs.astro.build/en/guides/deploy/).
