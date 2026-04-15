# Lumina & Lore — portfolio prototype

High-fidelity **Next.js 15** prototype for a fictional boutique lighting brand: landing, filterable catalog, slide-out cart, multi-step checkout, restoration inquiry, and a **written case study** for recruiters.

## Live demo

- **Deployed on Netlify**
- **Production URL:** `https://lumino-webpage.netlify.app/`

## Why this project stands out

- Combines **product design thinking** and **frontend engineering** in one polished, deployable artifact.
- Demonstrates a complete user journey: discovery (`/`) → exploration (`/catalog`) → intent (`cart sheet`) → conversion (`/checkout`) → service support (`/restoration`).
- Includes a recruiter-friendly **case study** route (`/case-study`) documenting decisions, tradeoffs, accessibility, and quality methodology.

## Stack

- **Next.js** (App Router) · **TypeScript** · **Tailwind CSS**
- **Radix UI** (Dialog-based cart sheet) · **Lucide** icons
- **`next/font`** (Cormorant Garamond + DM Sans) · **`next/image`** with graceful fallbacks

## Core experience

- **Landing page:** editorial hero, services overview, and featured desk/nightstand collection.
- **Catalog:** filterable grid across pendant, grand/floor, and petite categories with illuminated hover treatment.
- **Cart:** slide-out minimalist sheet with thumbnails, quantity controls, and restoration insurance add-on.
- **Checkout:** single-column multi-step flow with progress states and sticky order summary.
- **Restoration inquiry:** detailed contact form for lamp age/origin, issue description, and photo uploads.

## Design direction

- **Aesthetic:** Antique Minimalism — historical warmth with generous white space.
- **Palette:** parchment surfaces, charcoal typography, and brass accents.
- **Typography:** high-contrast serif for hierarchy + airy sans-serif for readability.
- **Imagery:** texture-forward lighting compositions (silk, weathered bronze, blown glass).

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Case study: [http://localhost:3000/case-study](http://localhost:3000/case-study).

```bash
npm run build     # production build
npm run lint      # ESLint (flat config; no deprecated `next lint`)
npm run typecheck # TypeScript only
```

## Evidence you can cite

- **Case study** (`/case-study`): IA, visual system, wireframe → hi-fi narrative, engineering table, accessibility checklist, performance methodology, honest out-of-scope notes.
- **Accessibility**: skip link to `#main-content`, labeled checkout steps (`aria-current="step"`), `prefers-reduced-motion` for scroll + decorative hover motion, form labels wired to controls.
- **Resilience**: `SafeImage` client wrapper shows a fallback if a remote product URL fails.
- **SEO / sharing**: `app/opengraph-image.tsx` (1200×630), `sitemap.ts`, `robots.ts`, expanded root metadata.

After `npm run build && npm start`, run **Lighthouse** (Chrome DevTools → Lighthouse) on mobile and desktop; paste scores or PDF exports into your portfolio deck or Notion case study.

## Project structure (high level)

| Path | Role |
|------|------|
| `app/` | Routes: `/`, `/catalog`, `/checkout`, `/restoration`, `/case-study` |
| `components/ui/` | Button, input, sheet, checkbox (shadcn-style, owned code) |
| `components/case-study/` | Long-form case study content + in-page nav |
| `config/portfolio.ts` | **Your** name, links, tagline |
| `lib/products.ts` | Demo catalog data |
| `lib/site-url.ts` | Canonical URL for metadata |

## License

Private portfolio work — fictional brand; imagery from Unsplash (see URLs in `lib/products.ts`). Update or replace assets for commercial use.
