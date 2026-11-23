# Portfolio - 0z4c4

## Project Overview
Client-facing portfolio for **0z4c4** (Ozaca). The goal is to attract clients,
not to look for a job: copy uses "entrego / construyo / resuelvo", the main CTA
is always WhatsApp, and there is no CV or "open to work" language.

- **URL**: https://0z4c4.github.io/portfolio/
- **Repo**: https://github.com/0z4c4/portfolio.git
- **Stack**: React 19.3.1 + TypeScript 7.0.2 + Vite 8.3.8 + React Router 7
- **Package manager**: pnpm (v12.22.0, pinned in `package.json`)
- **Deploy**: `gh-pages` to GitHub Pages (branch: `gh-pages`)

## Commands
```bash
pnpm run dev        # Development server (http://localhost:5173/portfolio/)
pnpm run build      # TypeScript + Vite build (output: dist/)
pnpm run typecheck  # TypeScript only
pnpm run deploy     # Build + deploy to gh-pages
```

## Project Structure
```
src/
├── components/
│   ├── Navbar.tsx          # Glass pill nav: 3 routes + Contacto + theme toggle
│   ├── Navbar.css
│   ├── Footer.tsx          # Minimal footer: brand, routes, socials, WhatsApp
│   ├── Footer.css
│   ├── LandingHero.tsx     # Client-focused hero + static cyan glow
│   ├── LandingHero.css
│   ├── Areas.tsx           # 6 benefit-oriented work areas
│   ├── Areas.css
│   ├── Reveal.tsx          # IntersectionObserver opacity-only fade wrapper
│   ├── Reveal.css
│   ├── Projects.tsx        # 9-project mosaic/photo grid + MediaModal
│   ├── Projects.css
│   ├── MediaModal.tsx      # Image/video modal with keyboard nav + thumbnails
│   ├── MediaModal.css
│   ├── LogoMarquee.tsx     # 7-brand marquee (used on /proyectos)
│   ├── LogoMarquee.css
│   ├── Icons.tsx           # SVG icon components (incl. Sun/Moon)
│   └── ScrollToTop.tsx     # Scroll to top on route change
├── pages/
│   ├── Home.tsx            # Hero + Áreas (01) only
│   ├── Proyectos.tsx       # LogoMarquee + Projects (lazy-loaded)
│   └── Certificados.tsx    # Certificate grid + modal (lazy-loaded)
├── data/
│   ├── certificates.ts     # 16 certificate entries (WebP paths)
│   ├── projects.ts         # 9 projects (images, videos, captions)
│   ├── logos.ts            # 7 marquee logos
│   └── contact.ts          # WhatsApp URL
├── index.css               # Tokens, 60/30/10 palette, motion keyframes
├── App.tsx                 # Routes + FadeRoute + Suspense
└── main.tsx                # BrowserRouter with basename="/portfolio"
```

Removed in the redesign: the old `Hero` (rotating words + tech banner), `About`
("Sobre mí"), `HomePreview`, `/servicios` and `/sobre-mi` routes, the Services
component and `data/services.ts`. The Home also dropped the extra sections
`FeaturedWork` (02), `Proof` (03) and `ContactCTA`; only Hero + Áreas remain.

## Routes
| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero + Áreas (01) |
| `/proyectos` | Proyectos | Header + marquee + 9-project mosaic |
| `/certificados` | Certificados | 16 certificates with image modal |

`App.tsx` uses `React.lazy` for Proyectos and Certificados; the initial chunk is
React + Router + Home only. Unknown paths fall back to Home.

## Design System (60 / 30 / 10)
- **60% background**: `--bg` (`#0e1114` dark / `#f3f6f7` light), `--bg-soft`
- **30% surfaces**: `--surface`, `--glass`, `--glass-strong`, `--border`
- **10% accent**: `--accent` (`#22d3ee` dark / `#0891b2` light), `--accent-hover`,
  `--accent-soft`, `--accent-contrast` for text on accent
- Text: `--text`, `--muted`; outline: `--border`; overlay: `--overlay`
- Radius: `--radius` 14px, `--radius-lg` 20px, `--radius-pill`
- Fonts: `--font-sans` (Inter), `--font-display` (Space Grotesk),
  `--font-mono` (JetBrains Mono) for eyebrows/numbers only
- Glass is restrained: blur(16px) saturate(140%) on navbar, hero chip, hero panel
  and subtle cards; hairline borders instead of heavy shadows.
- The navbar pill keeps the normal theme colors with a near-opaque translucent
  fill (`rgba(21,26,30,0.85)` dark / `rgba(255,255,255,0.85)` light) so the
  background behind barely affects contrast. No inverted tokens, no outer shadow.
- Cyan is never a large background: only CTAs, hairlines, focus rings and a glow.

## Motion
- One entrance animation only: `@keyframes fade-in` (opacity, `ease`) in `index.css`.
- `Reveal.tsx` fades content in on scroll via IntersectionObserver, opacity only,
  `transition: opacity 420ms ease`. No stagger, no translate.
- Removed earlier motion-gfx effects: pulsing dot, floating/aurora movement,
  cursor-following glow, CTA sheen, drawn line and staggered card delays.
- `logos-scroll` (40s linear, infinite) remains as the only ambient animation.
- Hover feedback (small translate/border/color transitions) is intentional UI state.
- All motion is disabled by the global `prefers-reduced-motion` override.

## Theme
- `data-theme="dark" | "light"` on `<html>`. Dark is the default.
- `index.html` has an inline script that reads `localStorage["portfolio-theme"]`
  before React renders (avoids flash of wrong theme).
- Navbar sun/moon button toggles `data-theme` and persists the choice.
- Never style theme-dependent colors with `@media (prefers-color-scheme)`;
  use `:root[data-theme="light"]` / `[data-theme="dark"]` overrides.

## Key Features
- **Single CTA**: WhatsApp in the hero and in the navbar contact link.
- **6 work areas**: benefit-first copy, no résumé-style stack dump.
- **Projects**: all 9 live on `/proyectos`; the Home stays intentionally short.
- **Project modal**: images/videos with arrow-key nav, Esc and a thumbnail strip
  to jump directly to any piece (active thumb auto-centers). The stage has no
  border or background; the `<img>`/`<video>` keeps its own ratio via
  `max-width`/`max-height` (plain CSS, no JS measuring).
- **Logo marquee**: 7 brands, label-free, slower and smaller; it never pauses.
- **Certificate modal**: image zoom with backdrop blur.
- **Reduced motion**: global `prefers-reduced-motion` override in `index.css`.

## Certificate Images
- Location: `public/certificados/` (16 WebP files, organized by provider)
- Originals: `_originals/certificados-src/` (PDF/PNG/JPG, ignored by Git)
- CSS: Cards use `aspect-ratio: 4/3` with `object-fit: cover`
- Modal: `object-fit: contain` to show full image
- Source: Google Drive folder `1WikHrONhGsUCVJccSzWUrj3ZhSyPzXFr`
- Conversion: `gdown --folder` → PDF to PNG (pdftoppm) → WebP (ImageMagick)

## Project Images
- Served assets: `public/proyectos/` (60 WebP/WebM files)
- Originals: `_originals/proyectos/` (MP4/PNG/etc., ignored by Git)
- Legacy Drive source: folder `1FzlciDio3WIv2PqyluFiYNO9MOZo2x76` was documented
  as "currently empty" in the old portfolio. It is not public anymore:
  `embeddedfolderview` returns 401 and `gdown --json --no-cookies` returns
  nothing. All current project assets are local.
- Data file: `src/data/projects.ts` (9 projects)
- Structure: `Project > images[] / videos[] / captions{}`
- Note: asset URLs are absolute (`/portfolio/...`); Vite does not rewrite them

## Deployment Notes
- Base path: `/portfolio` (vite.config.ts `base` and BrowserRouter `basename`)
- `public/404.html` handles direct navigation on GitHub Pages (no SPA fallback)
- GitHub Pages 301-redirects `/portfolio/proyectos` → `/portfolio/proyectos/`
  because `public/proyectos/` exists as a static folder. `404.html` uses
  `pathSegmentsToKeep = 1`, rewrites to `/portfolio/?/proyectos/`, and the inline
  script in `index.html` restores `/portfolio/proyectos/` with `replaceState`.
  React Router matches paths with a trailing slash.
- After `pnpm run deploy`, GitHub Pages can take a couple of minutes to pick up
  the new `gh-pages` commit; browsers may keep the old HTML for up to 10 minutes
  (`Cache-Control: max-age=600`). Hard-refresh if assets look stale.
- `.gitignore`: excludes `node_modules`, `dist` and `_originals/`. The original
  photos are kept locally in `_originals/` and are never committed or deployed.
- Git history: single clean commit (force pushed) before content import
