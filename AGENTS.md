# Portfolio - 0z4c4

## Project Overview
Personal portfolio website for GitHub user **0z4c4** (previously dbazc).

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
│   ├── Navbar.tsx          # Navigation with NavLink (5 routes, active state)
│   ├── Footer.tsx          # Footer with social links + quick links
│   ├── Hero.tsx            # Rotating words + tech banner + stats
│   ├── Hero.css
│   ├── About.tsx           # About me section (areas + highlights)
│   ├── About.css
│   ├── Services.tsx        # Services/areas section
│   ├── Services.css
│   ├── Projects.tsx        # 9-project gallery + MediaModal
│   ├── Projects.css
│   ├── MediaModal.tsx      # Image/video modal with keyboard navigation
│   ├── MediaModal.css
│   ├── LogoMarquee.tsx     # 7-brand marquee
│   ├── LogoMarquee.css
│   ├── HomePreview.tsx     # 4 cards to inner routes
│   ├── HomePreview.css
│   ├── Icons.tsx           # SVG icon components
│   ├── ScrollToTop.tsx     # Scroll to top on route change
│   └── PageTransition.tsx  # Page fade transition wrapper
├── pages/
│   ├── Home.tsx            # Hero + Services + About + HomePreview
│   ├── Services.tsx        # /servicios wrapper
│   ├── Proyectos.tsx       # LogoMarquee + Projects
│   ├── Certificados.tsx    # Certificate grid + modal
│   ├── Certificates.css    # Certificate + modal styles
│   └── SobreMi.tsx         # /sobre-mi wrapper
├── data/
│   ├── certificates.ts     # 16 certificate entries (WebP paths)
│   ├── projects.ts         # 9 projects (images, videos, captions)
│   ├── logos.ts            # 7 marquee logos
│   ├── services.ts         # Service/area data
│   └── contact.ts          # WhatsApp URL
├── App.tsx                 # Routes: /, /servicios, /proyectos, /certificados, /sobre-mi
└── main.tsx                # BrowserRouter with basename="/portfolio"
```

## Routes
| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero + Services + About + HomePreview |
| `/servicios` | Services | Areas in which I work |
| `/proyectos` | Proyectos | 9 projects with image/video modal |
| `/certificados` | Certificados | 16 certificates with image modal |
| `/sobre-mi` | SobreMi | Profile |

## Design Tokens (CSS Variables)
- `--bg`, `--bg-muted`, `--surface` - Backgrounds
- `--text`, `--text-muted` - Text colors
- `--accent`, `--accent-strong`, `--accent-soft` - Accent colors
- `--border` - Border color
- `--radius-sm`, `--radius-lg` - Border radius
- `--shadow-sm`, `--shadow-md` - Box shadows
- `--font-display` - Display font

## Key Features
- **Page transitions**: Fade animation on route changes (App.tsx FadeRoute)
- **Hero rotating words**: CREAR, DESARROLLAR, EDITAR, REPARAR (2.5s interval)
- **Tech banner**: Infinite scroll of tech icons (React, Node, Vite, HTML, CSS, JS, Premiere, Photoshop, Illustrator, Word, Excel, PowerPoint, Docker, Linux)
- **Hero stats**: +5 años, +20 proyectos, +40 clientes, 100% compromiso
- **Project modal**: Images and videos with arrow-key navigation and Esc
- **Logo marquee**: 7 brands, pause on hover
- **Certificate modal**: Image zoom with backdrop blur
- **Stagger animations**: Cards fade-in with delay per item

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
- Data file: `src/data/projects.ts` (9 projects)
- Structure: `Project > images[] / videos[] / captions{}`
- Note: asset URLs are absolute (`/portfolio/...`); Vite does not rewrite them

## Deployment Notes
- Base path: `/portfolio` (vite.config.ts `base` and BrowserRouter `basename`)
- `public/404.html` handles direct navigation on GitHub Pages (no SPA fallback)
- `.gitignore`: excludes `node_modules`, `dist`, `_originals/` and `public/certificados/tmp/`
- Git history: single clean commit (force pushed) before content import
