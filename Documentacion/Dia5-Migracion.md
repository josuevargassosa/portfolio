# Dia 5 - SEO Completo

**Rama:** `feature/day5-seo`
**Base:** `feature/day4-contact-form`
**Total:** 4 commits atomicos

---

## Commits Realizados

### 1. `4902dbd` - feat: add per-page metadata with Open Graph tags
**Archivos:** 4 pages modificadas

- Cada pagina exporta `metadata: Metadata` con title, description y openGraph
- Title usa el template del layout: `"%s | Josue Vargas"`
- Pages: projects, resume, certificates, contact

### 2. `40e7d2e` - feat: add dynamic sitemap.xml and robots.txt
**Archivos:** `src/app/sitemap.ts`, `src/app/robots.ts`

- **sitemap.ts:** Genera URLs para 5 rutas × 2 locales = 10 URLs
  - Rutas: home, projects, resume, certificates, contact
  - Prioridad: 1.0 para home, 0.8 para subpaginas
  - changeFrequency: weekly (home), monthly (resto)
- **robots.ts:** Permite todos los crawlers, bloquea `/api/`, apunta a sitemap

### 3. `ae8e2cc` - feat: add JSON-LD structured data (Person + WebSite)
**Archivos:** `src/components/seo/JsonLd.tsx`, `src/app/[locale]/layout.tsx`

- **Person schema:** nombre, jobTitle, url, sameAs (LinkedIn, GitHub, Instagram), knowsAbout (10 tecnologias)
- **WebSite schema:** nombre del sitio, url, idiomas soportados
- Inyectado en `<head>` del layout para todas las paginas
- Server component (sin `'use client'`)

### 4. `b2db3c9` - feat: add web app manifest for PWA base
**Archivo:** `src/app/manifest.ts`

- display: standalone, theme_color: #000000
- Iconos usando logo existente (192x192, 512x512)
- Genera `/manifest.webmanifest` como ruta estatica

---

## Estructura de Archivos Dia 5

```
src/
├── app/
│   ├── sitemap.ts               # NUEVO - Genera /sitemap.xml
│   ├── robots.ts                # NUEVO - Genera /robots.txt
│   ├── manifest.ts              # NUEVO - Genera /manifest.webmanifest
│   └── [locale]/
│       ├── layout.tsx           # MODIFICADO (+JsonLd en <head>)
│       ├── projects/page.tsx    # MODIFICADO (+metadata)
│       ├── resume/page.tsx      # MODIFICADO (+metadata)
│       ├── certificates/page.tsx # MODIFICADO (+metadata)
│       └── contact/page.tsx     # MODIFICADO (+metadata)
└── components/seo/
    └── JsonLd.tsx               # NUEVO - Schemas Person + WebSite
```

---

## Resumen SEO Implementado

| Feature | Estado | Detalle |
|---|---|---|
| Metadata base (title, description, keywords) | Dia 1 | Layout con template `%s \| Josue Vargas` |
| Open Graph tags | Dia 1 + Dia 5 | Base en layout + override por pagina |
| Twitter Cards | Dia 1 | summary_large_image en layout |
| Per-page metadata | Dia 5 | 4 paginas con title y OG propios |
| robots.txt | Dia 5 | Allow all, block /api/ |
| sitemap.xml | Dia 5 | 10 URLs (5 rutas × 2 locales) |
| JSON-LD | Dia 5 | Person + WebSite schemas |
| Manifest (PWA) | Dia 5 | standalone, dark theme |
| robots meta (googleBot) | Dia 1 | index, follow, max previews |

---

## Build

```
Route (app)
├ ○ /_not-found
├ ƒ /[locale]
├ ƒ /[locale]/certificates
├ ƒ /[locale]/contact
├ ƒ /[locale]/projects
├ ƒ /[locale]/resume
├ ƒ /api/contact
├ ○ /manifest.webmanifest   ← NUEVO (static)
├ ○ /robots.txt              ← NUEVO (static)
└ ○ /sitemap.xml             ← NUEVO (static)
```

Build exitoso sin errores.

---

## Pendiente para Dia 6+

- Lazy loading de componentes con `dynamic()`
- Error boundaries
- Loading states (loading.tsx)
- Performance: Lighthouse audit
- Deploy a Vercel
- Imagen OG real (`/public/og-image.jpg`)
- Datos reales en data files
