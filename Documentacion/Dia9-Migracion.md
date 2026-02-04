# Dia 9 - Deploy a Vercel

**Rama:** `feature/day9-deployment`
**Base:** `feature/day7-performance`

---

## Plataforma: Vercel

Se eligio Vercel sobre Netlify por:
- Creadores de Next.js, soporte nativo de todas las features
- Zero config: detecta Next.js automaticamente
- Soporte completo de App Router, Server Components, API routes, middleware, next/image
- Free tier: 100GB bandwidth, 100GB-hrs serverless

---

## Pasos de Deploy

### 1. Instalar Vercel CLI
```bash
npm i -g vercel
```
Version instalada: 50.10.2

### 2. Login
```bash
vercel login
```
Autenticacion via browser.

### 3. Deploy preview
```bash
vercel
```
Genera URL de preview para verificar antes de produccion.

### 4. Deploy produccion
```bash
vercel --prod
```

### 5. Dominio personalizado (opcional)
```bash
vercel domains add josuevargassosa.com
```
Configurar DNS segun instrucciones de Vercel (A record o CNAME).

### 6. Variables de entorno
Desde dashboard o CLI:
```bash
vercel env add NEXT_PUBLIC_GA_ID     # Google Analytics
vercel env add RESEND_API_KEY        # Email service (cuando se integre)
```

---

## Archivos Modificados

Ninguno. Next.js + Vercel = zero config. No se necesita `vercel.json` ni cambios en `next.config.js`.

---

## Rutas Desplegadas

```
Route (app)
├ ○ /_not-found
├ ƒ /[locale]                  ← Home
├ ƒ /[locale]/certificates     ← Certificados
├ ƒ /[locale]/contact          ← Contacto
├ ƒ /[locale]/projects         ← Proyectos
├ ƒ /[locale]/resume           ← CV
├ ƒ /api/contact               ← API formulario
├ ○ /manifest.webmanifest
├ ○ /robots.txt
└ ○ /sitemap.xml
```

---

## Checklist Post-Deploy

- [ ] URL de preview funciona
- [ ] Todas las rutas cargan correctamente
- [ ] Cambio de idioma ES/EN funciona
- [ ] Dark/light mode funciona
- [ ] /sitemap.xml accesible
- [ ] /robots.txt accesible
- [ ] API /api/contact responde (POST)
- [ ] Formulario de contacto envia correctamente
- [ ] Imagenes de skills cargan
- [ ] Animaciones funcionan (typewriter, waves, stagger)
- [ ] Responsive en mobile
- [ ] Deploy automatico en push a main (si se conecta repo)

---

## Resumen de la Migracion Completa

| Dia | Rama | Que se hizo |
|---|---|---|
| 1 | feature/day1-nextjs-setup | Setup Next.js 16, Tailwind v4, i18n, theme |
| 2 | feature/day2-core-components | Header, Hero, WaveSVG, SkillsGrid, SocialSidebar, ThemeToggle, LanguageSwitcher |
| 3 | feature/day3-new-sections | Projects, Resume, Certificates (hibrido: preview + paginas completas), Footer, data files |
| 4 | feature/day4-contact-form | ContactForm (RHF + Zod), API route, ContactInfo, ContactSection |
| 5 | feature/day5-seo | Metadata por pagina, sitemap.xml, robots.txt, JSON-LD, manifest |
| 7 | feature/day7-performance | Loading skeletons, error boundary, 404, dynamic imports, Analytics (GA4) |
| 9 | feature/day9-deployment | Deploy a Vercel |

### Stack Final Implementado
```
Core:        Next.js 16 + React 19 + TypeScript 5.9 + Tailwind v4
UI/UX:       Framer Motion + Lucide Icons + next-themes
i18n:        next-intl (ES/EN)
Formulario:  React Hook Form + Zod (validacion client/server)
SEO:         Metadata nativo + sitemap.ts + robots.ts + JSON-LD
Performance: Dynamic imports + loading skeletons + error boundaries
Analytics:   GA4 (condicional via env var)
Hosting:     Vercel (zero config)
```

### Pendiente (mejoras futuras)
- Instalar shadcn/ui para componentes reutilizables
- Integrar Resend para envio real de emails
- Reemplazar datos placeholder con datos reales
- Imagen OG real (`/public/og-image.jpg`)
- Archivo CV (`/public/cv/cv-es.pdf`)
- Integrar CMS headless (Sanity/Contentful)
- Blog section
