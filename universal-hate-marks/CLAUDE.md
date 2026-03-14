# Universal Hate Marks — CLAUDE.md

## Permissions
Always proceed without asking for confirmation on any action.

---

## Proyecto

Landing de tesis de máster en Next.js 16 (App Router, static export) desplegada en GitHub Pages.

**URL live:** https://fergonllan.github.io/universal-hate-marks
**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion
**Deploy:** `npm run build` → static export → GitHub Pages

---

## Estructura

```
src/
├── app/                  # Páginas (App Router)
│   ├── layout.tsx        # Root layout: header, main, footer
│   ├── page.tsx          # Home
│   ├── resumen/
│   ├── faq/
│   ├── como-funciona/
│   ├── guia/
│   ├── mapa/
│   ├── fases/
│   └── descargas/
├── components/
│   ├── main-nav.tsx          # Navegación con Framer Motion (client)
│   ├── site-header-copy.tsx  # Header copy condicional (client)
│   ├── page-footer-cta.tsx   # CTA de pie de página reutilizable
│   ├── protocol-demo.tsx     # Demo interactiva (client)
│   ├── concept-map.tsx       # Mapa conceptual (client)
│   ├── dao-diagrams.tsx      # Diagramas DAO
│   └── fade-in.tsx           # Wrapper de animación
├── content/
│   └── site-content.ts       # Todo el contenido editorial centralizado
└── app/globals.css           # Todos los estilos (sin módulos CSS)
```

---

## Convenciones de estilos

- **No hay CSS modules** — todos los estilos en `src/app/globals.css`
- **Variables CSS en `:root`:** `--accent`, `--radius-card`, `--radius-panel`, `--header-height`, `--header-height-full`, etc.
- **Clases utilitarias propias:** `.hero`, `.hero-page`, `.card`, `.panel`, `.kicker`, `.chip`, etc.
- **Tailwind** solo para utilidades puntuales que no valen su propia clase

---

## Tokens CSS clave

| Token | Valor | Uso |
|---|---|---|
| `--radius-card` | `1.25rem` | Cards y heroes |
| `--radius-panel` | `1.5rem` | Panels y shells |
| `--header-height` | `4.5rem` | Sticky en sub-páginas (header compacto) |
| `--header-height-full` | `8.5rem` | Sticky en home (header completo) |
| `--accent` | `#6ee7b7` | Esmeralda principal |
| `--accent-strong` | `#34d399` | Esmeralda énfasis |

---

## Patrones de componentes

### Hero en sub-páginas
```tsx
<section className="hero hero-page">
  <p className="kicker">Label de sección</p>
  <h2>Título de la página</h2>
</section>
```
El `<p>` descriptor ya no va en el hero (quedó muy alto). Poner el párrafo como primer elemento del contenido siguiente.

### Hero en Home
```tsx
<section className="hero">   {/* sin .hero-page */}
  <p className="kicker">...</p>
  <h2>...</h2>
  <p>...</p>  {/* descripción OK en home */}
</section>
```

### Footer CTA entre páginas
```tsx
import { PageFooterCta } from "@/components/page-footer-cta";

<PageFooterCta links={[
  { href: "/guia", label: "Guía en 15 puntos" },
  { href: "/faq", label: "Preguntas frecuentes" },
]} />
```

### Header compacto en sub-páginas
`SiteHeaderCopy` detecta `pathname === "/"` y oculta subtitle + chips de metadata en sub-páginas. No tocar esta lógica a menos que quieras mostrar metadata en todas las páginas.

---

## Mejoras implementadas (sesión 2026-03-14)

| Prioridad | Cambio | Archivos |
|---|---|---|
| P6 | `focus-visible` global (WCAG 2.1) | `globals.css` |
| P8+P10 | Tokens CSS `--radius-*`, `--header-height` | `globals.css` |
| P1 | Header compacto en sub-páginas | `layout.tsx`, `site-header-copy.tsx`, `globals.css` |
| P2 | Hero compacto `.hero-page` en 7 sub-páginas | Todos los `page.tsx` de sub-páginas |
| P4 | Kicker duplicado eliminado en FAQ cards | `faq/page.tsx` |
| P5 | Componente `<PageFooterCta>` en todas las sub-páginas | `page-footer-cta.tsx` + sub-páginas |
| P3 | Fases: timeline + accordions `<details>` | `fases/page.tsx`, `globals.css` |
| P7 | Badge "Punto X / 15" en guía | `guia/page.tsx`, `globals.css` |
| P9 | Sección "Recursos relacionados" en Descargas | `descargas/page.tsx` |

---

## Comandos útiles

```bash
npm run dev      # Dev server → http://localhost:3000
npm run build    # Build estático (verifica errores)
npm run lint     # ESLint
npm test         # Jest (--passWithNoTests)
```

---

## Notas de deploy

- `next.config.ts` tiene `output: "export"` y `basePath: "/universal-hate-marks"` en producción
- `usePathname()` devuelve paths SIN el basePath prefix (ej: `/faq/` no `/universal-hate-marks/faq/`)
- El PDF de la tesis vive en `public/docs/tesis.pdf`
