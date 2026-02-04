# Dia 4 - Formulario de Contacto

**Rama:** `feature/day4-contact-form`
**Base:** `feature/day3-new-sections`
**Total:** 6 commits atomicos

---

## Commits Realizados

### 1. `a9d05c0` - feat: add Zod contact form validation schema
**Archivo:** `src/lib/schemas/contact.ts`

- Schema Zod con 3 campos: name (min 2, max 100), email (validacion email), message (min 10, max 2000)
- Type export `ContactFormData` inferido del schema
- Reutilizado en frontend (resolver) y backend (API route)

### 2. `ec0c305` - feat: add contact API route with Zod validation
**Archivo:** `src/app/api/contact/route.ts`

- POST `/api/contact` con validacion server-side usando el mismo schema Zod
- Retorna 400 con detalles de error si la validacion falla
- Retorna 500 en errores internos
- TODO preparado para integrar servicio de email (Resend, SendGrid)

### 3. `f70f3cd` - feat: add ContactForm and ContactInfo components
**Archivos:** `src/components/contact/ContactForm.tsx`, `src/components/contact/ContactInfo.tsx`

- **ContactForm (Client):**
  - React Hook Form con `zodResolver` para validacion client-side
  - 4 estados: idle, loading, success, error
  - Iconos contextuales: Send, Loader2 (spin), CheckCircle, AlertCircle
  - Inputs con `register()`, mensajes de error por campo
  - Reset del formulario tras envio exitoso
  - `fetch` a `/api/contact`

- **ContactInfo (Client via parent):**
  - 3 items: Email, Ubicacion, Tiempo de respuesta
  - Iconos: Mail, MapPin, Clock de lucide-react
  - Datos placeholder (email generico)

### 4. `0944fe9` - feat: add ContactSection with form and info side by side
**Archivo:** `src/components/contact/ContactSection.tsx`

- Layout 2 columnas (`lg:grid-cols-2`) con form a la izquierda e info a la derecha
- Framer Motion: slide-in desde izquierda (form) y derecha (info) con delay
- Seccion con id `#contact` para anchor desde el Header

### 5. `e105251` - feat: add full contact page at /contact
**Archivo:** `src/app/[locale]/contact/page.tsx`

- Server component que compone ContactForm + ContactInfo
- Incluye Header y Footer
- Ruta: `/es/contact` y `/en/contact`

### 6. `4331071` - feat: integrate ContactSection in Home page
**Archivo:** `src/app/[locale]/page.tsx`

- +1 import ContactSection
- Renderiza entre CertificatesPreview y Footer

---

## Estructura de Archivos Dia 4

```
src/
├── lib/schemas/
│   └── contact.ts               # NUEVO - Zod schema
├── app/
│   ├── api/contact/
│   │   └── route.ts             # NUEVO - API POST
│   └── [locale]/
│       ├── contact/
│       │   └── page.tsx          # NUEVO - Pagina completa
│       └── page.tsx              # MODIFICADO (+ContactSection)
└── components/contact/
    ├── ContactForm.tsx           # NUEVO - Formulario
    ├── ContactInfo.tsx           # NUEVO - Info de contacto
    └── ContactSection.tsx        # NUEVO - Preview para Home
```

---

## Flujo del Formulario

```
Usuario llena form → React Hook Form valida (Zod client)
  ↓ OK
fetch POST /api/contact → Zod valida server-side
  ↓ OK
console.log (placeholder) → Response 200 {success: true}
  ↓
UI muestra mensaje de exito + reset form
```

---

## Patron de Validacion Compartida

El schema Zod en `src/lib/schemas/contact.ts` se reutiliza en:
- **Client:** `zodResolver(contactSchema)` en React Hook Form
- **Server:** `contactSchema.safeParse(body)` en API route

Esto garantiza que las reglas de validacion sean identicas en ambos lados.

---

## Build

```
Route (app)
├ ○ /_not-found
├ ƒ /[locale]
├ ƒ /[locale]/certificates
├ ƒ /[locale]/contact        ← NUEVO
├ ƒ /[locale]/projects
├ ƒ /[locale]/resume
└ ƒ /api/contact              ← NUEVO
```

Build exitoso sin errores.

---

## Pendiente para Dia 5+

- Integrar servicio de email real (Resend / SendGrid)
- Reemplazar email placeholder en ContactInfo
- SEO avanzado (sitemap.ts, robots.ts, JSON-LD)
- Optimizacion de performance (lazy loading, error boundaries)
- Deploy a Vercel
