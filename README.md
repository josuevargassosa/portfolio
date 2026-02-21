# Portfolio - Josue Vargas Sosa

Portfolio personal de Josue Vargas Sosa, Full Stack Developer. Construido con Next.js 16, React 19, Tailwind CSS 4 y TypeScript.

## Tecnologias

- **Framework:** Next.js 16 (App Router + Turbopack)
- **UI:** React 19, Tailwind CSS 4, Framer Motion
- **Lenguaje:** TypeScript 5.9
- **Internacionalizacion:** next-intl (rutas `[locale]`)
- **Formularios:** React Hook Form + Zod
- **Temas:** next-themes (claro/oscuro)
- **SEO:** Sitemap, robots.txt, JSON-LD, manifest

## Estructura del proyecto

```
src/
├── app/
│   ├── [locale]/          # Paginas por idioma (layout, page, error, loading, not-found)
│   │   ├── certificates/  # Pagina de certificaciones
│   │   ├── contact/       # Pagina de contacto
│   │   ├── projects/      # Pagina de proyectos
│   │   └── resume/        # Pagina de experiencia
│   └── api/contact/       # API route para formulario de contacto
├── components/
│   ├── certificates/      # CertificateCard, CertificatesFullPage, CertificatesPreview
│   ├── contact/           # ContactForm, ContactInfo, ContactSection
│   ├── home/              # Hero, SkillsGrid, WaveSVG
│   ├── layout/            # Header, Footer, SocialSidebar
│   ├── projects/          # ProjectCard, ProjectsFullPage, ProjectsPreview
│   ├── resume/            # TimelineItem, ResumeFullPage, ResumePreview
│   ├── seo/               # JsonLd
│   └── shared/            # Analytics, LanguageSwitcher, ThemeToggle
├── data/                  # Datos estaticos (projects, certificates, skills, experience, social-links)
├── i18n/                  # Configuracion de internacionalizacion (request, routing)
├── lib/                   # Utilidades y schemas de validacion
└── middleware.ts          # Middleware de rutas (i18n)
```

## Requisitos previos

- Node.js >= 18
- npm o yarn

## Instalacion

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd josuevargassosa

# Instalar dependencias
npm install
```

## Scripts disponibles

| Comando            | Descripcion                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Servidor de desarrollo con Turbopack |
| `npm run build`    | Build de produccion                  |
| `npm run start`    | Iniciar servidor de produccion       |
| `npm run lint`     | Ejecutar ESLint                      |
| `npm run type-check` | Verificar tipos con TypeScript     |

## Buenas practicas de commits

Este proyecto sigue la convencion de [Conventional Commits](https://www.conventionalcommits.org/).

### Formato

```
<tipo>(<alcance opcional>): <descripcion corta>

[cuerpo opcional]

[footer opcional]
```

### Tipos permitidos

| Tipo         | Uso                                                    |
| ------------ | ------------------------------------------------------ |
| `feat`       | Nueva funcionalidad                                    |
| `fix`        | Correccion de errores                                  |
| `docs`       | Cambios en documentacion                               |
| `style`      | Formato, punto y coma, etc. (sin cambio en logica)     |
| `refactor`   | Refactorizacion de codigo sin cambio de comportamiento  |
| `perf`       | Mejoras de rendimiento                                 |
| `test`       | Agregar o corregir tests                               |
| `chore`      | Tareas de mantenimiento, dependencias, configuracion   |
| `ci`         | Cambios en CI/CD                                       |
| `build`      | Cambios en el sistema de build o dependencias externas  |

### Ejemplos

```bash
feat: add dark mode toggle to header
fix: resolve hydration error on locale switch
docs: update README with commit conventions
refactor(components): extract reusable TimelineItem
perf: lazy load project images with next/image
chore: upgrade next-intl to v4.8
```

### Reglas

- Usar **ingles** para los mensajes de commit
- La descripcion debe ser en **imperativo** (add, fix, update — no added, fixed, updated)
- Primera linea maximo **72 caracteres**
- No terminar la descripcion con punto
- Separar cuerpo del titulo con una linea en blanco

## Versionamiento

Este proyecto utiliza [Semantic Versioning (SemVer)](https://semver.org/).

### Formato

```
MAJOR.MINOR.PATCH
```

| Segmento | Cuando incrementar                                              |
| -------- | --------------------------------------------------------------- |
| `MAJOR`  | Cambios incompatibles (breaking changes), redisenos completos   |
| `MINOR`  | Nueva funcionalidad compatible con versiones anteriores          |
| `PATCH`  | Correcciones de errores y mejoras menores                       |

### Version actual

```
1.1.0
```

### Flujo de ramas (GitHub Flow)

```
main ─────────────────────────────────── produccion (protegida)
  └── feature/nueva-funcionalidad ────── desarrollo de features
  └── fix/correccion-bug ─────────────── correccion de errores
  └── hotfix/parche-critico ──────────── parches urgentes en produccion
  └── refactor/mejora-codigo ─────────── refactorizaciones
```

- **`main`**: Rama principal, siempre estable y desplegable
- **`feature/*`**: Ramas para nuevas funcionalidades
- **`fix/*`**: Ramas para correccion de errores
- **`hotfix/*`**: Parches criticos directos a produccion
- **`refactor/*`**: Mejoras de codigo sin cambio funcional

### Reglas de ramas

1. Nunca hacer commit directamente en `main`
2. Crear PRs con titulo descriptivo y descripcion clara
3. PRs deben pasar CI antes de merge
4. Eliminar ramas despues de merge
5. Mantener PRs pequenos y enfocados (< 400 lineas cuando sea posible)
