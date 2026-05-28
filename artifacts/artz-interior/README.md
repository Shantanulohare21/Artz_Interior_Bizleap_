# Art Interiorz — Nagpur Interior Design Studio

A production-ready React + Vite website for Art Interiorz, a full-service interior design studio in Nagpur, India.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 6 |
| Routing | Wouter |
| Animations | Framer Motion |
| Styling | Tailwind CSS v4 (oklch design tokens) |
| Fonts | Cormorant Garamond (display) + Inter (body) |
| Icons | Lucide React |
| Language | TypeScript 5 |

---

## Project Structure

```
artifacts/artz-interior/
├── public/
│   └── assets/          # Static images (logo, hero, founders, portfolio)
├── src/
│   ├── components/
│   │   ├── site/        # Page sections (Hero, About, Services, Portfolio…)
│   │   ├── FloatingChatbot.tsx
│   │   └── WhatsAppButton.tsx
│   ├── data/            # All content as TypeScript data files
│   ├── pages/           # Route-level page components
│   ├── App.tsx          # Router + providers
│   ├── main.tsx         # Entry point
│   └── index.css        # Tailwind v4 + design tokens
├── index.html           # SEO meta, fonts, structured data
├── vite.config.ts       # Vite configuration
└── vercel.json          # Vercel deployment config (SPA rewrites + headers)
```

---

## Running Locally

### Prerequisites

- Node.js 20+
- pnpm 9+

### Install

```bash
# From repo root
pnpm install
```

### Start Dev Server

```bash
# From repo root (recommended)
pnpm --filter @workspace/artz-interior run dev

# OR set required env vars and run directly from the artifact folder
cd artifacts/artz-interior
PORT=3000 BASE_PATH=/ pnpm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
# From artifact folder
cd artifacts/artz-interior
PORT=3000 BASE_PATH=/ pnpm run build
```

Output is written to `artifacts/artz-interior/dist/`.

### Preview Production Build

```bash
cd artifacts/artz-interior
PORT=3000 BASE_PATH=/ pnpm run serve
```

---

## Deploying to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project**.
3. Import the repository and set **Root Directory** to `artifacts/artz-interior`.
4. Vercel auto-detects Vite — leave Framework Preset as **Vite**.
5. No environment variables are needed for the frontend.
6. Click **Deploy**.

> `vercel.json` already handles SPA routing (all paths → `index.html`), cache headers, and security headers.

### Option B — Vercel CLI

```bash
npm i -g vercel
cd artifacts/artz-interior
vercel --prod
```

---

## Deploying to Netlify

1. Push to GitHub.
2. In Netlify → **New Site from Git** → select repo.
3. Set **Base directory**: `artifacts/artz-interior`
4. Set **Build command**: `pnpm run build` (Netlify auto-installs pnpm)
5. Set **Publish directory**: `dist`
6. Add a `_redirects` file in `public/`:

```
/*  /index.html  200
```

---

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | Replit only | `3000` | Dev server port |
| `BASE_PATH` | Replit only | `/` | Vite `base` path prefix |

No environment variables are needed for Vercel or Netlify deployments — the build works with defaults.

---

## Customising Content

All site content lives in TypeScript data files under `src/data/`. Edit these to update text, images, stats, and services — no component changes needed.

| File | Controls |
|------|---------|
| `heroData.ts` | Hero headline, subtitle, CTAs |
| `aboutData.ts` | About section text, stats, badge |
| `servicesData.ts` | 6 service cards on homepage |
| `portfolioData.ts` | Portfolio grid images + filters |
| `testimonialsData.ts` | Quote testimonials carousel |
| `contactData.ts` | Address, phone, email, map |
| `footerData.ts` | Footer links, social links |
| `aboutPageData.ts` | About page — intro, services, founders bio |
| `blogData.ts` | Blog posts |
| `faqData.ts` | FAQ accordion questions |

---

## Key Business Details

| Info | Value |
|------|-------|
| WhatsApp | [+91 95450 02017](https://wa.me/919545002017) |
| Email | artinteriorz17@gmail.com |
| Address | Plot No 13, Suprabhat Apartments, Shilpa Nagar, Somalwada, Nagpur 440015 |
| YouTube | [@Art_Interiorz](https://www.youtube.com/@Art_Interiorz) |

---

## Notes

- All portfolio images are served from the artinteriorz.com CDN — no local copies are needed.
- Local images in `public/assets/` (logo, hero, about, founders, portfolio previews) are committed to the repo and served statically.
- YouTube video IDs embedded in `HappyClients.tsx` and `HowItWorks.tsx` are pulled directly from the studio's YouTube channel.
- Google Fonts (`@import url(...)`) must remain the **first line** in `index.css` before `@import "tailwindcss"` due to a PostCSS ordering requirement.
