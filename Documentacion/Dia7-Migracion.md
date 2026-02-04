# Dia 7 - Performance

**Rama:** `feature/day7-performance`
**Base:** `feature/day5-seo`
**Total:** 4 commits atomicos

---

## Commits Realizados

### 1. `7d9a9be` - feat: add loading skeletons for all routes
**Archivos:** 5 loading.tsx

- Skeleton UI con `animate-pulse` para cada ruta
- Cada skeleton replica la estructura visual de su pagina
- Home: header + hero + skills grid placeholders
- Projects: grid de cards con aspect-video + text blocks
- Resume: timeline items con border-l
- Certificates: cards con icono + texto
- Contact: form inputs + info items

### 2. `d729587` - feat: add error boundary and custom 404 page
**Archivos:** `error.tsx`, `not-found.tsx`

- **error.tsx (Client):** Captura errores de runtime, log a consola, boton "Intentar de nuevo" con `reset()`
- **not-found.tsx (Server):** Pagina 404 personalizada con titulo "404", mensaje y link a home usando `next-intl` Link

### 3. `31a9f8b` - perf: lazy load below-fold sections with dynamic imports
**Archivo:** `src/app/[locale]/page.tsx`

- 5 componentes below-fold cargados con `next/dynamic`:
  - SkillsGrid, ProjectsPreview, ResumePreview, CertificatesPreview, ContactSection
- Componentes above-fold (Hero, Header, WaveSVG) siguen como import estatico
- Reduce el bundle JS inicial de la Home page

### 4. `597fa8d` - feat: add Google Analytics 4 component
**Archivos:** `src/components/shared/Analytics.tsx`, `src/app/[locale]/layout.tsx`

- Componente server que inyecta `gtag.js` con `next/script` strategy `afterInteractive`
- Condicional: solo renderiza si `NEXT_PUBLIC_GA_ID` esta definido en env
- Integrado al final del `<body>` en el layout

---

## Estructura de Archivos Dia 7

```
src/
├── app/[locale]/
│   ├── loading.tsx              # NUEVO - Skeleton Home
│   ├── error.tsx                # NUEVO - Error boundary
│   ├── not-found.tsx            # NUEVO - 404 personalizado
│   ├── page.tsx                 # MODIFICADO (dynamic imports)
│   ├── layout.tsx               # MODIFICADO (+Analytics)
│   ├── projects/loading.tsx     # NUEVO
│   ├── resume/loading.tsx       # NUEVO
│   ├── certificates/loading.tsx # NUEVO
│   └── contact/loading.tsx      # NUEVO
└── components/shared/
    └── Analytics.tsx            # NUEVO - GA4
```

---

## Estrategia de Performance

### Dynamic Imports
| Componente | Carga | Razon |
|---|---|---|
| Header | Eager | Above the fold, navegacion critica |
| Hero | Eager | Above the fold, primer contenido visible |
| WaveSVG | Eager | Above the fold, transicion visual |
| SkillsGrid | Lazy | Below the fold |
| ProjectsPreview | Lazy | Below the fold |
| ResumePreview | Lazy | Below the fold |
| CertificatesPreview | Lazy | Below the fold |
| ContactSection | Lazy | Below the fold, ultimo en la pagina |

### Loading States
Cada ruta tiene su propio skeleton que se muestra durante:
- Navegacion entre paginas (client-side)
- Streaming SSR cuando el servidor tarda en responder

### Error Handling
- `error.tsx`: Captura errores en runtime sin crashear toda la app
- `not-found.tsx`: UX limpia para URLs invalidas
- Ambos mantienen el estilo visual del portfolio

---

## Activar Google Analytics

Agregar en `.env.local`:
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Sin esta variable, el componente Analytics no renderiza nada (zero overhead).

---

## Build

Build exitoso. Todas las rutas compilan correctamente con los nuevos archivos.

---

## Pendiente para Dia 9-10

- Deploy a Vercel
- Configurar variables de entorno en produccion
- Imagen OG real (`/public/og-image.jpg`)
- Datos reales en data files
- Archivo CV en `/public/cv/`
