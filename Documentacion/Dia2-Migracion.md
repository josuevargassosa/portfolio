# Dia 2 - Componentes Core

**Rama:** `feature/day2-core-components`
**Base:** `feature/day1-nextjs-setup`
**Total:** 7 commits atomicos

---

## Commits Realizados

### 1. `3a707b4` - feat: add ThemeToggle and LanguageSwitcher shared components
**Archivos:** `src/components/shared/ThemeToggle.tsx`, `src/components/shared/LanguageSwitcher.tsx`

- **ThemeToggle:** Boton dark/light mode usando `next-themes`. Iconos Sun/Moon de `lucide-react`. Maneja montaje del cliente con `useState` para evitar hydration mismatch.
- **LanguageSwitcher:** Selector EN/ES usando `next-intl/navigation`. Muestra opacidad activa/inactiva segun idioma actual. Usa `useRouter().replace()` para cambiar locale sin recargar pagina.

### 2. `aa87209` - feat: add responsive Header with navigation and mobile menu
**Archivo:** `src/components/layout/Header.tsx`

- Navbar fijo en top con `backdrop-blur-lg` y fondo semitransparente
- Navegacion desktop con items: Inicio, Habilidades, Proyectos, Contacto
- Menu hamburguesa para mobile (`lg:hidden`) con iconos Menu/X
- Animacion underline en hover de nav items
- Integra LanguageSwitcher y ThemeToggle
- Textos internacionalizados con `useTranslations('nav')`

### 3. `89b901c` - feat: add Hero section with typewriter animation
**Archivo:** `src/components/home/Hero.tsx`

- Animacion typewriter migrada de Angular: efecto de escritura y borrado en loop
- Implementada con `useCallback` + `setTimeout` (sin setInterval para control preciso)
- Velocidad: 150ms escribiendo, 80ms borrando, 2s pausa al completar
- Entrada con Framer Motion: fade-in + slide-up (0.8s)
- Titulo y descripcion internacionalizados con `next-intl`
- Layout responsivo: `text-5xl` mobile, `text-7xl` desktop

### 4. `52fd1b5` - feat: add WaveSVG animated divider component
**Archivo:** `src/components/home/WaveSVG.tsx`

- SVG con 4 capas de ondas con diferentes delays y duraciones
- Migrado directamente del template Angular original
- Usa colores del tema via `fill-background/XX` (compatibles con dark/light)
- Componente server-side (sin `'use client'`), solo CSS animations

### 5. `3391763` - feat: add SkillsGrid with stagger animations
**Archivo:** `src/components/home/SkillsGrid.tsx`

- Grid responsivo: 2 cols mobile, 3 cols tablet, 4 cols desktop
- 11 tecnologias cargadas desde `src/data/skills.ts`
- Animacion stagger con Framer Motion: cards aparecen secuencialmente al hacer scroll (`whileInView`)
- Hover: `scale(1.08)` + elevacion (`y: -4`)
- Logos optimizados con `next/image` (lazy loading automatico)
- Titulo y subtitulo internacionalizados

### 6. `35206cc` - feat: add SocialSidebar with hover expansion
**Archivo:** `src/components/layout/SocialSidebar.tsx`

- Barra fija lateral izquierda (`fixed left-0 top-1/4`)
- 3 redes sociales: Instagram, LinkedIn, GitHub
- Efecto expand on hover: `w-[70px]` -> `w-[200px]` mostrando nombre
- Iconos de `lucide-react`, colores de fondo desde data
- Oculta en mobile (`hidden md:block`)
- Datos desde `src/data/social-links.ts`

### 7. `6dc4e08` - feat: integrate all core components into Home page
**Archivo:** `src/app/[locale]/page.tsx`

- Importa y renderiza: Header, Hero, WaveSVG, SkillsGrid, SocialSidebar
- Layout con Fragment (`<>...</>`)
- Header y SocialSidebar fuera del `<main>` (son fixed/overlay)

---

## Estructura de Componentes Creados

```
src/components/
├── shared/
│   ├── ThemeToggle.tsx        # Toggle dark/light mode
│   └── LanguageSwitcher.tsx   # Selector idioma EN/ES
├── layout/
│   ├── Header.tsx             # Navbar responsive
│   └── SocialSidebar.tsx      # Sidebar redes sociales
├── home/
│   ├── Hero.tsx               # Seccion hero con typewriter
│   ├── WaveSVG.tsx            # Divisor animado SVG
│   └── SkillsGrid.tsx        # Grid de habilidades
├── contact/                   # (vacio, pendiente Dia 3+)
├── projects/                  # (vacio, pendiente Dia 3+)
└── ui/                        # (vacio, para shadcn/ui)
```

---

## Tecnologias Utilizadas en los Componentes

| Componente | Client/Server | Librerias |
|---|---|---|
| ThemeToggle | Client | next-themes, lucide-react |
| LanguageSwitcher | Client | next-intl/navigation |
| Header | Client | next-intl, lucide-react |
| Hero | Client | next-intl, framer-motion |
| WaveSVG | Server | CSS animations puro |
| SkillsGrid | Client | next-intl, framer-motion, next/image |
| SocialSidebar | Client | lucide-react |

---

## Build

Build verificado exitosamente con `npx next build` antes de los commits.

---

## Pendiente para Dia 3+

- Pagina de Proyectos con ProjectCard
- Pagina de Resume (experiencia + educacion)
- Pagina de Certificados
- Formulario de Contacto con API route
- Footer
- SEO avanzado (sitemap, robots.txt, JSON-LD)
