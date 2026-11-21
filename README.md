# Ozaca · Portafolio

Portafolio personal construido con React 19 + TypeScript + Vite 8 + React Router
7. Publicado en https://0z4c4.github.io/portfolio/.

## Rutas

- `/` — Inicio
- `/servicios` — Áreas en las que trabajo
- `/proyectos` — Proyectos y piezas reales
- `/certificados` — Formación y certificaciones
- `/sobre-mi` — Perfil

## Stack

- React 19.3.1, TypeScript 7.0.2, Vite 8.3.8
- pnpm 12.22.0 (`packageManager` fijado en `package.json`)
- React Router 7 con `BrowserRouter basename="/portfolio"`
- React Compiler vía `@rolldown/plugin-babel`

## Scripts

```bash
pnpm install --frozen-lockfile
pnpm dev        # desarrollo, abrir http://localhost:5173/portfolio/
pnpm typecheck  # TypeScript only
pnpm build      # typecheck + build
pnpm preview    # previsualizar build
pnpm deploy     # publicar en GitHub Pages (rama gh-pages)
```

## Contenido

- 9 proyectos con imágenes WebP y videos WebM de muestra (`src/data/projects.ts`).
- 16 certificados en WebP (`src/data/certificates.ts`).
- 7 marcas en el marquee de inicio (`src/data/logos.ts`).
- Modal de proyectos con navegación por teclado y soporte para video.

## Optimización de medios

Las imágenes se sirven en WebP y los videos en WebM (VP9/Opus), con clips de
muestra de 10 segundos para mantener el sitio liviano. Los archivos originales
(MP4/PNG/PDF de alta resolución) se conservan en `_originals/`, excluido del
control de versiones y del despliegue.

Las certificaciones servidas son WebP, generadas desde los PDF/PNG guardados en
`_originals/certificados-src/`.

## Nota de rutas

`base` es `/portfolio` y las URLs de assets en `src/data/*.ts` son absolutas
(`/portfolio/...`). Vite no las reescribe: si se cambia el nombre del repo o el
`base`, hay que actualizar esos literales. `public/404.html` redirige las rutas
directas de GitHub Pages al `BrowserRouter` de la app.
