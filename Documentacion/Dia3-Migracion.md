# Dia 3 - Nuevas Secciones (Hibrido)

**Rama:** `feature/day3-new-sections`
**Base:** `feature/day2-core-components`
**Enfoque:** Preview en Home con scroll anchors + paginas completas por seccion

---

## Arquitectura Hibrida

Se implemento un modelo hibrido de navegacion:

- **Home page**: secciones preview con 2-4 items destacados y link "Ver todos"
- **Paginas completas**: `/projects`, `/resume`, `/certificates` con todo el contenido
- **Navegacion**: Header usa anchors (`#projects`, `#resume`, etc.) para scroll en Home

---

## Data Files Creados

### `src/data/projects.ts`
- Interface `Project` con campos: id, title, description, thumbnail, techStack, liveUrl?, githubUrl?, featured
- 3 proyectos placeholder (marcados como `featured: true`)

### `src/data/experience.ts`
- Interface `Experience` con campos: id, company, position, period (start/end nullable), description, techStack
- Interface `Education` con campos: id, institution, degree, period, description?
- 2 experiencias laborales placeholder + 1 educacion placeholder

### `src/data/certificates.ts`
- Interface `Certificate` con campos: id, title, issuer, date, credentialUrl?, image?
- 4 certificados placeholder

---

## Componentes Creados

### Projects

| Componente | Tipo | Descripcion |
|---|---|---|
| `ProjectCard.tsx` | Client | Card con thumbnail (o fallback texto), tech tags, links a proyecto/codigo. Hover con framer-motion `y: -6` |
| `ProjectsPreview.tsx` | Client | Muestra 3 proyectos featured en grid. Link "Ver Todos" a `/projects` usando `next-intl` Link |

### Resume

| Componente | Tipo | Descripcion |
|---|---|---|
| `TimelineItem.tsx` | Client | Componente reutilizable para timeline vertical con dot, periodo, titulo, subtitulo, descripcion y tags opcionales. Animacion slide-in con framer-motion |
| `ResumePreview.tsx` | Client | Muestra 2 experiencias recientes. Helper `formatPeriod()` para fechas con soporte i18n ("Actualidad"/"Present"). Link "Ver Curriculum Completo" a `/resume` |

### Certificates

| Componente | Tipo | Descripcion |
|---|---|---|
| `CertificateCard.tsx` | Client | Card compacta con icono Award, titulo, emisor, fecha. Link a credencial si existe y no es placeholder |
| `CertificatesPreview.tsx` | Client | Muestra 4 certificados con stagger animation. Grid 2 columnas en md+. Link "Ver Todos" a `/certificates` |

### Layout

| Componente | Tipo | Descripcion |
|---|---|---|
| `Footer.tsx` | Server | Copyright dinamico (year) + links a redes sociales desde `social-links.ts`. Sin `'use client'` |

---

## Paginas Completas Creadas

### `/[locale]/projects/page.tsx` (Server Component)
- Header + grid completo de todos los proyectos + Footer
- Reutiliza `ProjectCard` (client) dentro de page server

### `/[locale]/resume/page.tsx` (Server Component)
- Header + seccion Experiencia + seccion Educacion + Footer
- Boton "Descargar CV" (link a `/cv/cv-es.pdf`, visible en desktop)
- Reutiliza `TimelineItem` (client) para ambas secciones

### `/[locale]/certificates/page.tsx` (Server Component)
- Header + grid completo de todos los certificados + Footer
- Reutiliza `CertificateCard` (client)

---

## Archivos Modificados

### `src/i18n/messages/es.json` y `en.json`
- Agregada key `viewAll` en secciones `projects`, `resume` y `certificates`

### `src/components/layout/Header.tsx`
- Agregados 2 nav items: `#resume` (Curriculum) y `#certificates` (Certificados)
- Orden: Home, Skills, Projects, Resume, Certificates, Contact

### `src/app/[locale]/page.tsx`
- Agregados imports: ProjectsPreview, ResumePreview, CertificatesPreview, Footer
- Orden de secciones: Hero > WaveSVG > SkillsGrid > ProjectsPreview > ResumePreview > CertificatesPreview > Footer

---

## Estructura de Archivos Dia 3

```
src/
├── data/
│   ├── projects.ts          # NUEVO
│   ├── experience.ts        # NUEVO
│   └── certificates.ts      # NUEVO
├── components/
│   ├── projects/
│   │   ├── ProjectCard.tsx      # NUEVO
│   │   └── ProjectsPreview.tsx  # NUEVO
│   ├── resume/
│   │   ├── TimelineItem.tsx     # NUEVO
│   │   └── ResumePreview.tsx    # NUEVO
│   ├── certificates/
│   │   ├── CertificateCard.tsx      # NUEVO
│   │   └── CertificatesPreview.tsx  # NUEVO
│   └── layout/
│       ├── Header.tsx       # MODIFICADO (+2 nav items)
│       └── Footer.tsx       # NUEVO
├── app/[locale]/
│   ├── page.tsx             # MODIFICADO (+previews +footer)
│   ├── projects/page.tsx    # NUEVO
│   ├── resume/page.tsx      # NUEVO
│   └── certificates/page.tsx # NUEVO
└── i18n/messages/
    ├── es.json              # MODIFICADO (+viewAll keys)
    └── en.json              # MODIFICADO (+viewAll keys)
```

---

## Patron Server vs Client Components

| Capa | Tipo | Razon |
|---|---|---|
| Pages (`page.tsx`) | Server | Sin estado ni efectos, solo composicion |
| Preview sections | Client | Requieren framer-motion (whileInView, animations) |
| Cards | Client | Requieren framer-motion (whileHover) |
| TimelineItem | Client | Requiere framer-motion (whileInView) |
| Footer | Server | Sin interactividad, solo renderiza datos |

---

## Datos Placeholder

Todos los data files contienen datos de ejemplo. El usuario reemplazara con datos reales posteriormente. Las interfaces TypeScript estan definidas para facilitar la actualizacion.

---

## Pendiente para Dia 4+

- Formulario de Contacto con API route + validacion Zod
- SEO avanzado (sitemap.ts, robots.ts, JSON-LD)
- Optimizacion de imagenes reales
- Reemplazar datos placeholder con datos reales
- Archivo CV en `/public/cv/`
