# Giovanardi Barili — Law firm website

Sitio institucional del Estudio Jurídico y Consultora Giovanardi Barili (Mar del Plata, Argentina), para captación de clientes en toda la Provincia de Buenos Aires.

## Live / Status

Sin deploy todavía. En desarrollo local (Fase 1: sistema de diseño + Home completa). El deploy a Vercel es Fase 3.

## Stack

- [Astro 7](https://astro.build) — SSG, sin islas de UI en runtime.
- [Tailwind CSS 4](https://tailwindcss.com) — configuración CSS-first (`@theme` en `src/styles/global.css`, sin `tailwind.config.js`).
- TypeScript en modo `strict`.
- [Vercel](https://vercel.com) como target de deploy (estático, sin adapter).
- [`@lucide/astro`](https://lucide.dev) para iconografía (import por ícono).
- [`@fontsource-variable`](https://fontsource.org) para tipografías autohospedadas (Fraunces + Inter).

Sin framework de UI en runtime: toda la interactividad (menú mobile, formulario de contacto) es JavaScript vanilla en `<script>` de Astro.

## Results

Lighthouse (`npx lighthouse`, Chrome headless, sobre `astro build && astro preview`), corrido contra `/` y `/publicaciones`, mobile y desktop:

| Página | Dispositivo | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|---|
| `/` | Mobile | 98–100* | 100 | 100 | 100 |
| `/` | Desktop | 100 | 100 | 100 | 100 |
| `/publicaciones` | Mobile | 100 | 100 | 100 | 100 |
| `/publicaciones` | Desktop | 100 | 100 | 100 | 100 |

\* Varió entre 98 y 100 en corridas repetidas (jitter normal de Lighthouse con throttling de CPU/red simulado). Siempre ≥95.

**Peso de página** (`/`, mobile, medido con Lighthouse): **130 KiB** transferidos en 6 requests — 116 KiB fuentes (2 archivos woff2), 7.9 KiB HTML, 5.9 KiB CSS, 1.8 KiB logo, 1.6 KiB otros. **0 KiB de JavaScript como request aparte** (los scripts del menú mobile y el form de contacto son módulos inline, van dentro del HTML).

**Logo optimizado** (Astro Image): 1204 KB (PNG original) → **542 B** (1x, 44px) / **1.53 KB** (2x, 88px), WebP, servido con `srcset` de densidades 1x/2x calculado sobre el tamaño real de despliegue en CSS (no un valor arbitrario).

## Architecture decisions

- **Astro SSG en vez de SPA**: es un sitio de contenido (estudio jurídico), no una aplicación. La prioridad es SEO y performance de carga inicial, no estado de cliente complejo.
- **Sin React**: el formulario de contacto se resuelve con `fetch` + estado de éxito/error en JavaScript vanilla. Sumar React para un formulario simple hubiera significado cargar ~40 KB de runtime sin necesidad real.
- **Tailwind 4 CSS-first** (`@theme` en `global.css`, sin `tailwind.config.js`): los tokens de diseño (paleta, tipografías) viven en un solo archivo CSS. El sitio lo va a mantener a largo plazo el propio dueño del estudio, no un equipo de frontend — menos archivos de configuración es menos superficie de error.
- **Contenido en `src/data/*.ts` separado del markup**: editar las áreas de práctica, el equipo o los diferenciales es tocar un array de objetos tipado, no HTML mezclado con JSX/Astro.
- **Sin adapter de Vercel**: el sitio es 100% estático. Se suma un adapter (`@astrojs/vercel`) solo si en el futuro hace falta SSR o API routes — hoy sería complejidad sin uso.

## Accessibility

WCAG AA. Contraste verificado con cálculo manual (fórmula de luminancia relativa de WCAG) y con el audit `color-contrast` de axe-core vía Lighthouse — no son lo mismo, y el segundo encontró casos que el primero no cubrió (ver abajo).

**Ratios finales, contra los fondos donde cada color realmente se usa:**

| Combinación | Ratio | Resultado |
|---|---|---|
| `--color-accent` (#7b622a) sobre blanco | 5.80:1 | AA ✅ |
| `--color-accent` sobre `--color-surface` | 5.31:1 | AA ✅ |
| `--color-accent` sobre `--color-surface-alt` | 4.83:1 | AA ✅ |
| `--color-primary` (#16352c) sobre `--color-surface` | 12.18:1 | AAA ✅ |
| `--color-ink` (#1a1c1a) sobre `--color-surface` | 15.71:1 | AAA ✅ |
| `--color-ink-soft` sobre `--color-surface` | 5.47:1 | AA ✅ |

**Dos bugs de contraste encontrados y corregidos durante el desarrollo:**

1. **Hover del botón primario** (cálculo manual): usaba `accent-soft` de fondo con texto blanco → 2.70:1, invisible. Se cambió el hover a `primary-light` → 9.90:1.
2. **Encontrados por Lighthouse/axe-core al cerrar Fase 1**, no por el cálculo manual — el accent original (`#83692c`) solo se había verificado contra blanco y contra `surface`, no contra `surface-alt` (más oscuro):
   - Texto `text-accent` (eyebrows, links) sobre `surface-alt`: 4.13:1, **fallaba AA**. Se retocó el token a `#7b622a`.
   - `text-ink-soft/70` en captions chicos: 2.80–3.11:1 según fondo, **fallaba**. Se sacó la opacidad, texto completo (5.47:1+).
   - Headings del footer en `text-surface/50`: 4.25:1, **fallaba**. Se subió a `/60` → 5.40:1.

Esto quedó documentado a propósito: el cálculo manual solo cubre las combinaciones que uno piensa en chequear; el audit automatizado encontró combinaciones reales en producción que no habían sido contempladas.

**Además**: focus visible (`focus-visible:outline`) en todos los interactivos, navegación completa por teclado, menú mobile con `aria-expanded` y cierre con `Escape`, formulario de contacto con `aria-live` en el estado de envío, alt text en imágenes, íconos decorativos con `aria-hidden`.

## SEO

- Meta tags completos por página (title, description) vía props de `BaseLayout`.
- Open Graph (og:title, og:description, og:image, og:type, og:locale, og:site_name, og:url) y Twitter Card (`summary_large_image`).
- Canonical URL por página.
- Schema.org: un solo `<script type="application/ld+json">` con `@graph` — `LegalService` (cubre LocalBusiness + LegalService) y `Person` (Luciano Barili, con `worksFor` referenciando el organization node).
- Sitemap (`@astrojs/sitemap`, genera `sitemap-index.xml` en el build) y `robots.txt`.
- Favicon y OG image generados a partir del logo real del estudio (no assets genéricos).

## Local development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build de producción a dist/
npm run preview   # sirve dist/ localmente
```

Copiar `.env.example` a `.env` y completar `PUBLIC_FORMSPREE_FORM_ID` para que el formulario de contacto envíe de verdad (sin esa variable, el form muestra un mensaje de "todavía no conectado" en vez de fallar en silencio).

## Roadmap

- **Fase 2**: páginas internas — `/areas/[slug]` (detalle de cada área de práctica), `/nosotros` (CVs completos), `/contacto` standalone.
- **Fase 3**: deploy a Vercel, dominio propio (`estudiogiovanardibarili.com`), Formspree conectado con ID real.
- **Fase 4**: blog/publicaciones con Content Collections de Astro, Google Analytics 4, Google Search Console.
