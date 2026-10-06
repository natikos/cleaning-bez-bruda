# Bez bruda

Website for Bez bruda, a cleaning company, built with [Nuxt 4](https://nuxt.com) and Vue 3.

> Status: early setup. The app currently shows a favicon/app-icon preview page; the actual site is not built yet.

## Requirements

- [Bun](https://bun.sh) (the repo ships a `bun.lock`)

## Getting started

```bash
bun install
bun run dev
```

The dev server runs on `http://localhost:3000`.

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `bun run dev`       | Start the development server         |
| `bun run build`     | Build for production                 |
| `bun run generate`  | Generate a static site               |
| `bun run preview`   | Preview the production build locally |
| `bun run lint`      | Lint with ESLint                     |
| `bun run lint:fix`  | Lint and auto-fix                    |
| `bun run typecheck` | Type-check with vue-tsc              |

## Project structure

```
app/       Nuxt application source (app.vue)
content/   Brand and source material (logo, price list)
public/    Static assets: favicons and app icons
```

## Code style

ESLint with `@nuxt/eslint` stylistic rules: no semicolons, single quotes, 2-space indent, no trailing commas.

## Deployment

See the [Nuxt deployment docs](https://nuxt.com/docs/getting-started/deployment).
