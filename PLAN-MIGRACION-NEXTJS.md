# Plan de Migración: Angular → Next.js
## Portafolio Profesional Josue Vargas

**Fecha**: 2026-02-03
**Duración estimada**: 2 semanas (10 días)
**Objetivo**: Migrar portafolio de Angular 15 a Next.js 14 para mejorar rendimiento, SEO y demostrar habilidades modernas

---

## 📊 Resumen Ejecutivo

Tu portafolio actual en Angular funciona, pero tiene limitaciones significativas en rendimiento y SEO. Next.js es la elección correcta para un portafolio moderno por:

- ✅ **Rendimiento 3-4x mejor** (Bundle ~80KB vs ~300KB actual)
- ✅ **SEO perfecto** out-of-the-box (SSG pre-renderizado)
- ✅ **Tecnología demandada** (React/Next.js son #1 en el mercado)
- ✅ **Lighthouse 95-100** fácilmente alcanzable
- ✅ **Escalable a CMS** para gestión futura de contenido

---

## 🎯 Objetivos del Nuevo Portafolio

### Mantener del Actual:
- ✅ Diseño limpio y moderno
- ✅ Animación typewriter en hero
- ✅ Grid de skills con hover effects
- ✅ Wave SVG animations
- ✅ Multilenguaje (ES/EN)
- ✅ Social media sidebar
- ✅ Diseño responsive

### Agregar Nuevo:
- ✨ Página de **Proyectos** con cards interactivos
- ✨ Página de **Resume/CV** con timeline profesional
- ✨ Página de **Certificados** en galería
- ✨ **Formulario de Contacto** funcional con envío de emails
- ✨ Tema **oscuro/claro** (actualmente comentado)
- ✨ **SEO completo** (Open Graph, Twitter Cards, sitemap)
- ✨ **Lighthouse 95+** en todas las métricas

---

## 📅 Cronograma: 2 Semanas

### **Semana 1: MVP Funcional**

#### 📦 Día 1-2: Setup y Configuración Base
- [ ] Inicializar proyecto Next.js 14 con TypeScript y Tailwind
- [ ] Configurar `next-intl` para ES/EN
- [ ] Configurar `next-themes` para dark/light mode
- [ ] Migrar traducciones de ngx-translate
- [ ] Configurar fuentes optimizadas (Inter + Poppins)
- [ ] Crear estructura de carpetas completa

#### 🎨 Día 2-3: Componentes Core
- [ ] Migrar Header/Navbar responsive
- [ ] Migrar Hero con animación typewriter
- [ ] Migrar Wave SVG component
- [ ] Migrar Skills Grid (11 tecnologías)
- [ ] Migrar Social Sidebar
- [ ] Crear Language Switcher
- [ ] Crear Theme Toggle

#### 📄 Día 3-4: Nuevas Páginas
- [ ] Página Projects + ProjectCard component
- [ ] Página Resume (experiencia + educación)
- [ ] Página Certificates (galería)
- [ ] Crear estructuras de datos TypeScript
- [ ] Agregar datos de ejemplo

#### ✉️ Día 4-5: Formulario de Contacto
- [ ] Implementar formulario con React Hook Form
- [ ] Validación con Zod
- [ ] API route para envío de emails
- [ ] Integrar Resend para delivery
- [ ] Página de contacto con info

### **Semana 2: Optimización y Deploy**

#### 🔍 Día 6-7: SEO Completo
- [ ] Metadata exhaustiva en todas las páginas
- [ ] Open Graph tags
- [ ] Twitter Cards
- [ ] Sitemap.xml dinámico
- [ ] Robots.txt
- [ ] JSON-LD structured data
- [ ] Optimizar imágenes a WebP/AVIF

#### ⚡ Día 7-8: Performance
- [ ] Lazy loading de componentes
- [ ] Error boundaries
- [ ] Loading states
- [ ] Adapter pattern para CMS futuro
- [ ] Webhook de revalidation
- [ ] Google Analytics 4

#### 🚀 Día 9-10: Deployment
- [ ] Deploy a Vercel
- [ ] Configurar variables de entorno
- [ ] Configurar dominio personalizado
- [ ] Lighthouse CI (objetivo: 95+ en todo)
- [ ] Testing cross-browser
- [ ] Testing responsive
- [ ] Ajustes finales

---

## 🛠️ Stack Tecnológico

```
📦 Core:
├── Next.js 14 (App Router)
├── React 18
├── TypeScript
└── Tailwind CSS

🎨 UI/UX:
├── Framer Motion (animaciones)
├── shadcn/ui (componentes)
├── Lucide Icons
└── next-themes (dark/light mode)

🌐 Internacionalización:
└── next-intl (ES/EN)

📝 Formularios:
├── React Hook Form
├── Zod (validación)
└── Resend (emails)

🔍 SEO:
├── next-sitemap
└── JSON-LD

☁️ Hosting:
├── Vercel (deployment)
└── Vercel Analytics

🔮 Futuro:
└── Sanity / Contentful (CMS)
```

---

## 📁 Estructura de Carpetas

```
portfolio-nextjs/
├── src/
│   ├── app/
│   │   ├── [locale]/              # Rutas internacionalizadas
│   │   │   ├── layout.tsx         # Layout principal
│   │   │   ├── page.tsx           # Home/Landing
│   │   │   ├── projects/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── resume/page.tsx
│   │   │   ├── certificates/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── api/
│   │   │   └── contact/route.ts   # API email
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SocialSidebar.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx           # Con typewriter
│   │   │   ├── WaveSVG.tsx
│   │   │   └── SkillsGrid.tsx
│   │   ├── projects/
│   │   │   └── ProjectCard.tsx
│   │   ├── contact/
│   │   │   └── ContactForm.tsx
│   │   ├── ui/                    # shadcn/ui
│   │   └── shared/
│   │       ├── LanguageSwitcher.tsx
│   │       └── ThemeToggle.tsx
│   │
│   ├── data/
│   │   ├── skills.ts              # 11 tecnologías actuales
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── certificates.ts
│   │   └── social-links.ts
│   │
│   ├── types/
│   │   ├── project.ts
│   │   ├── skill.ts
│   │   └── experience.ts
│   │
│   ├── i18n/
│   │   ├── request.ts
│   │   ├── routing.ts
│   │   └── messages/
│   │       ├── en.json
│   │       └── es.json
│   │
│   └── lib/
│       ├── animations.ts
│       ├── validations.ts
│       └── utils.ts
│
├── public/
│   ├── images/
│   │   ├── skills/               # 11 logos actuales
│   │   ├── projects/
│   │   └── certificates/
│   ├── cv/
│   │   ├── cv-es.pdf
│   │   └── cv-en.pdf
│   └── og-image.jpg
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── .env.local
└── package.json
```

---

## 🔄 Componentes a Migrar

### 1️⃣ Hero Section (Typewriter Animation)
**Desde**: `landing-page.component.ts` líneas 59-87
**Hacia**: `/src/components/home/Hero.tsx`

**Cambios**:
- ✅ Usar React hooks en lugar de funciones anidadas
- ✅ Integrar Framer Motion para animaciones de entrada
- ✅ Usar `useTranslations` para i18n del título
- ✅ Eliminar manipulación directa del DOM

### 2️⃣ Skills Grid
**Desde**: `landing-page.component.ts` líneas 100-146
**Hacia**: `/src/components/home/SkillsGrid.tsx` + `/src/data/skills.ts`

**Cambios**:
- ✅ Mover array de skills a archivo de datos
- ✅ Usar `next/image` para logos optimizados
- ✅ Implementar hover effects con Framer Motion
- ✅ Mantener grid responsivo

**Skills a migrar** (11 tecnologías):
```typescript
[
  'Angular', 'TypeScript', 'JavaScript', 'Ionic',
  'HTML', 'CSS', 'Git', 'Flutter', 'SQL Server',
  'Node.js', 'NestJS'
]
```

### 3️⃣ Wave SVG Animation
**Desde**: `landing-page.component.html` líneas 105-142
**Hacia**: `/src/components/home/WaveSVG.tsx`

**Cambios**:
- ✅ Migrar SVG exacto con animaciones CSS
- ✅ Adaptar colores para tema oscuro/claro

### 4️⃣ Header/Navigation
**Desde**: `landing-page.component.html` líneas 1-93
**Hacia**: `/src/components/layout/Header.tsx`

**Cambios**:
- ✅ Migrar navbar responsive
- ✅ Implementar menú hamburguesa mobile
- ✅ Agregar Language Switcher (ES/EN)
- ✅ Agregar Theme Toggle (dark/light)

### 5️⃣ Social Sidebar
**Desde**: `landing-page.component.html` líneas 173-196
**Hacia**: `/src/components/layout/SocialSidebar.tsx`

**Links actuales**:
- Instagram: https://www.instagram.com/josuevargassosa/
- LinkedIn: https://www.linkedin.com/in/josue-vargas-sosa
- GitHub: https://github.com/josuevargassosa

---

## ➕ Nuevas Secciones

### 1️⃣ Página de Proyectos
**Ruta**: `/projects`
**Componentes**: `ProjectCard`, `ProjectGrid`

**Estructura de cada proyecto**:
```typescript
{
  title: "Nombre del Proyecto",
  description: "Descripción corta",
  thumbnail: "/images/projects/proyecto-1.webp",
  techStack: ["Next.js", "TypeScript", "Tailwind"],
  liveUrl: "https://proyecto.com",
  githubUrl: "https://github.com/josuevargassosa/proyecto"
}
```

### 2️⃣ Página de Resume
**Ruta**: `/resume`
**Secciones**: Experiencia + Educación

**Incluir**:
- Timeline de experiencia profesional
- Educación y cursos
- Botón descargar CV (PDF en ES/EN)

### 3️⃣ Página de Certificados
**Ruta**: `/certificates`
**Componente**: `CertificateGallery`

**Mostrar**:
- Galería de certificados con imágenes
- Título, emisor, fecha
- Link a credencial (si aplica)

### 4️⃣ Página de Contacto
**Ruta**: `/contact`
**Componentes**: `ContactForm`

**Funcionalidad**:
- Formulario validado (nombre, email, mensaje)
- Envío de email usando Resend
- Información de contacto

---

## ⚡ Optimizaciones Críticas

### Performance (Objetivo: 95+)
1. **Imágenes**:
   - Convertir PNGs a WebP (85% quality)
   - Usar `next/image` con lazy loading
   - Definir width/height para evitar layout shift

2. **Fuentes**:
   - `next/font/google` para optimización automática
   - Preconnect a fonts.googleapis.com

3. **Code Splitting**:
   - Lazy loading de componentes no críticos
   - Dynamic imports para componentes pesados

4. **Bundle Size**:
   - Objetivo: < 100KB inicial JS
   - Tailwind con purge automático

### SEO (Objetivo: 100/100)
1. **Meta Tags**:
   - Title único por página
   - Description específica
   - Open Graph completo
   - Twitter Cards

2. **Structured Data**:
   - JSON-LD para Person schema

3. **Sitemap**:
   - Dinámico con todas las rutas

### Accessibility (Objetivo: 95+)
1. **Imágenes**: Alt text en todas
2. **Formularios**: Labels correctos
3. **Navegación**: Focus visible, ARIA labels

---

## 🔐 Variables de Entorno

```bash
# .env.local

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=josue.vargas@example.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Revalidation (para CMS futuro)
REVALIDATION_TOKEN=secret_token_here

# Site URL
NEXT_PUBLIC_SITE_URL=https://josuevargassosa.com
```

---

## 🚀 Deployment en Vercel

### Paso 1: Preparar Repositorio
```bash
git init
git add .
git commit -m "Initial Next.js migration"
git branch -M main
git remote add origin https://github.com/josuevargassosa/portfolio-nextjs.git
git push -u origin main
```

### Paso 2: Conectar a Vercel
1. Ir a vercel.com
2. Importar proyecto desde GitHub
3. Configurar variables de entorno
4. Deploy automático

### Paso 3: Configurar Dominio
1. Agregar dominio personalizado en Vercel
2. Configurar DNS records
3. SSL automático

---

## 📊 Métricas: Antes vs Después

| Métrica | Angular Actual | Next.js Objetivo | Mejora |
|---------|----------------|------------------|--------|
| **Bundle Size** | ~300KB | ~80KB | **-73%** |
| **First Contentful Paint** | 3-4s | <1s | **-75%** |
| **Largest Contentful Paint** | 5-6s | <2s | **-66%** |
| **Time to Interactive** | 5-6s | <3s | **-50%** |
| **Lighthouse Performance** | 60-70 | 95-100 | **+40%** |
| **Lighthouse SEO** | 70-80 | 95-100 | **+25%** |
| **Lighthouse Accessibility** | 70-80 | 95-100 | **+25%** |
| **Lighthouse Best Practices** | 80-85 | 95-100 | **+15%** |

---

## ✅ Checklist de Implementación

### Setup Inicial
- [ ] Inicializar proyecto Next.js 14
- [ ] Configurar TypeScript estricto
- [ ] Configurar Tailwind CSS
- [ ] Instalar dependencias core
- [ ] Configurar ESLint y Prettier

### Configuración
- [ ] Configurar next-intl (ES/EN)
- [ ] Configurar next-themes (dark/light)
- [ ] Configurar fuentes (Inter + Poppins)
- [ ] Crear estructura de carpetas
- [ ] Migrar traducciones

### Componentes Core
- [ ] Header/Navigation responsive
- [ ] Hero con typewriter animation
- [ ] Wave SVG component
- [ ] Skills Grid (11 skills)
- [ ] Social Sidebar
- [ ] Footer
- [ ] Language Switcher
- [ ] Theme Toggle

### Páginas Principales
- [ ] Home/Landing page
- [ ] Projects page + ProjectCard
- [ ] Resume page (experiencia + educación)
- [ ] Certificates page (galería)
- [ ] Contact page + formulario

### Funcionalidad
- [ ] API route para contacto
- [ ] Integración Resend para emails
- [ ] Validación formulario con Zod
- [ ] Error boundaries
- [ ] Loading states

### SEO y Meta
- [ ] Metadata en layout
- [ ] Open Graph tags
- [ ] Twitter Cards
- [ ] Sitemap dinámico
- [ ] Robots.txt
- [ ] JSON-LD structured data

### Optimización
- [ ] Optimizar imágenes a WebP
- [ ] Lazy loading componentes
- [ ] Optimizar fuentes
- [ ] Configurar Analytics
- [ ] Security headers

### Testing
- [ ] Lighthouse Performance 95+
- [ ] Lighthouse SEO 95+
- [ ] Lighthouse Accessibility 95+
- [ ] Cross-browser testing
- [ ] Mobile responsive testing

### Deployment
- [ ] Deploy a Vercel
- [ ] Configurar variables entorno
- [ ] Configurar dominio personalizado
- [ ] Configurar SSL
- [ ] Verificar Analytics funcionando

---

## 🚀 Comandos Rápidos

### Iniciar Proyecto
```bash
npx create-next-app@latest portfolio-nextjs --typescript --tailwind --app --src-dir
cd portfolio-nextjs
```

### Instalar Dependencias
```bash
npm install next-intl next-themes framer-motion resend
npm install react-hook-form @hookform/resolvers zod
npm install lucide-react class-variance-authority clsx tailwind-merge
```

### Desarrollo
```bash
npm run dev              # Servidor desarrollo
npm run build            # Build producción
npm run start            # Servir build
npm run lint             # Lint código
```

---

## 🔮 Preparado para el Futuro

### CMS Ready
- ✅ Estructura lista para Sanity/Contentful
- ✅ Webhook de revalidation configurado
- ✅ Adapter pattern para cambiar data source
- ✅ TypeScript interfaces definidas
- ✅ Incremental Static Regeneration ready

### Mejoras Post-MVP
1. Integrar CMS headless
2. Agregar blog section
3. Testimonials/Recomendaciones
4. Case studies detallados
5. Versión en PDF del portafolio

---

## 📞 ¿Listo para comenzar?

Este plan está diseñado para ser ejecutado paso a paso. Puedo ayudarte con cada fase:

1. **Setup inicial** - Configurar proyecto base
2. **Migración de componentes** - Uno por uno
3. **Nuevas funcionalidades** - Proyectos, Resume, etc.
4. **Optimización** - SEO, Performance
5. **Deployment** - Vercel con dominio personalizado

**¿Por dónde quieres empezar?** 🚀
