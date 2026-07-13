# Portfolio — Sidik Adriansyah

Personal portfolio site: branding, social media design, and frontend
development services. Built with Next.js (App Router, static export),
TypeScript, and Tailwind CSS.

## Why this project exists

This rebuilds an earlier v0 prototype that crashed on every request with:

```
Export Instagram doesn't exist in target module
Export Dribbble doesn't exist in target module
```

Newer versions of `lucide-react` removed brand/social icons (Instagram,
Dribbble, Twitter, etc.) due to trademark concerns. The fix: brand icons now
live as small inline SVG components in `components/icons.tsx` instead of
being imported from `lucide-react`. They will never break again on a
`lucide-react` upgrade. `__tests__/` contains regression tests that render
every component using those icons, so a future crash like this fails CI
instead of shipping broken.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the dev server                 |
| `npm run build`   | Build a static export into `out/`    |
| `npm run start`   | Serve the production build           |
| `npm run lint`    | Run ESLint                           |
| `npm test`        | Run the Vitest test suite            |
| `npm run test:watch` | Run tests in watch mode           |

## Project structure

```
app/                 Next.js App Router pages, layout, global styles
components/          UI components (Hero, Services, CTA, Footer, Header)
components/icons.tsx Inline SVG replacements for lucide-react brand icons
__tests__/           Vitest + Testing Library component tests
.github/workflows/   CI (lint + test + build) and GitHub Pages deploy
```

## Deployment

Pushes to `main` are built as a static export (`next build` with
`output: 'export'`) and deployed automatically to GitHub Pages by
`.github/workflows/deploy.yml`. The live site is served from:

https://adrnsyhsdq-debug.github.io/portofolio3/

GitHub Pages must be enabled once, with source set to **GitHub Actions**
(Settings → Pages → Build and deployment → Source: GitHub Actions).

## License

All rights reserved.
