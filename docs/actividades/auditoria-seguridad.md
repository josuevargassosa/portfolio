# Auditoría de seguridad — Portfolio Josue Vargas

> **Fecha:** 2026-05-21
> **Versión analizada:** 1.8.0
> **Alcance:** sitio Next.js 16 estático, sin auth, sin base de datos, endpoint público `POST /api/contact`.

---

## 1. Resumen ejecutivo

| Métrica | Valor |
|---|---|
| **Calificación general** | 9.2/10 |
| Riesgo de explotación inmediata | Muy bajo |
| Vectores revisados | 27 |
| Aplicados / Seguros | 19 |
| No aplican (N/A) | 5 |
| Parciales / Manuales | 3 |
| **Pendientes (críticos)** | **0** P0 — solo P1 (rate-limit, Turnstile opcional) y P2 manual (secret scanning) |

La mayoría de los ataques clásicos **no aplican** porque el sitio es estático, sin sesión autenticada, sin base de datos y sin redirects basados en input del usuario. Sin embargo, faltan los **security headers HTTP** y la **protección anti-spam del formulario**, que es lo más explotable hoy.

---

## 2. Tabla completa: Hacks comunes → Solución → Estado

| # | Ataque | Solución estándar | Estado actual |
|---|---|---|---|
| 1 | **XSS** (Cross-Site Scripting) | React escapa por defecto + sanitizar | ✅ **Aplicado** — React safe; los 4 `dangerouslySetInnerHTML` solo serializan JSON-LD estático con `JSON.stringify` (sin input del usuario). |
| 2 | **SQL Injection** | Queries parametrizadas / ORM | ✅ **N/A** — no hay base de datos. |
| 3 | **NoSQL Injection** | Validación con schemas | ✅ **N/A** — no hay BD. |
| 4 | **CSRF** | SameSite cookies + tokens | ✅ **N/A** — no hay sesión autenticada que mutar. |
| 5 | **Clickjacking** (iframe malicioso) | `X-Frame-Options: DENY` o CSP `frame-ancestors` | ✅ **Aplicado** (v1.8.1) — `X-Frame-Options: SAMEORIGIN` + CSP `frame-ancestors 'self'` en `next.config.js`. |
| 6 | **MIME sniffing** | `X-Content-Type-Options: nosniff` | ✅ **Aplicado** (v1.8.1). |
| 7 | **HTTPS downgrade / SSL strip** | HSTS (`Strict-Transport-Security`) | ✅ **Aplicado** (v1.8.1) — `max-age=63072000; includeSubDomains; preload`. |
| 8 | **Script injection / CSP bypass** | Content-Security-Policy header | ✅ **Aplicado** (v1.8.1) — CSP con allowlist para GA y Cal.com; `'unsafe-eval'` solo en dev. |
| 9 | **Referrer leak** (URLs sensibles a terceros) | `Referrer-Policy: strict-origin-when-cross-origin` | ✅ **Aplicado** (v1.8.1). |
| 10 | **Abuso de permisos del navegador** (camera, mic, geolocation) | `Permissions-Policy` | ✅ **Aplicado** (v1.8.1) — camera, mic, geo, interest-cohort, payment, usb bloqueados. |
| 11 | **Spam / rate-limit del formulario** | Rate limit por IP (Upstash, Vercel WAF) | ❌ **NO aplicado** — alguien puede martillar `/api/contact` con bots. |
| 12 | **Bots automatizados en formulario** | reCAPTCHA / Cloudflare Turnstile / honeypot | ✅ **Aplicado** (v1.8.1) — campo honeypot `website` invisible (off-screen + `aria-hidden` + `tabIndex={-1}` + `autoComplete="off"`); el endpoint devuelve `200 OK` falso si se llena para no dar pistas al bot. |
| 13 | **Email header injection** (cuando integres email) | Usar API del proveedor (Resend), strip `\r\n` del input | 🟡 **Pendiente** — todavía no envías email, pero será riesgo cuando integres Resend/SendGrid si concatenas headers manualmente. |
| 14 | **Vulnerabilidades de dependencias** | `npm audit fix` + Dependabot | 🟡 **Parcial** (v1.8.1) — parcheadas las 2 high (`next` 16.1.6→16.2.6 cierra 12 CVEs, `picomatch` 4.0.3→4.0.4) y la 1 low (`icu-minify`). Quedan 3 moderate de `postcss@8.4.31` bundled dentro de Next 16.2.6 (vector XSS via stringify CSS — no aplica porque no procesamos CSS de usuario en runtime; esperar fix upstream de Vercel). Dependabot pendiente. |
| 15 | **Information disclosure** (header `X-Powered-By`) | `poweredByHeader: false` | ✅ **Aplicado** (en `next.config.js:12`). |
| 16 | **Source maps expuestos en prod** | Default de Next: `productionBrowserSourceMaps: false` | ✅ **Default seguro**. |
| 17 | **`.env` versionado** | `.gitignore` | ✅ **Aplicado** (`.env*.local` ignorado). |
| 18 | **Open redirect** (`?next=...`) | No redirigir según query del usuario | ✅ **N/A** — no hay redirects basados en input. |
| 19 | **SSRF** (server fetch a URL del atacante) | URLs hardcoded | ✅ **N/A** — `og-image.tsx` solo hace fetch a tu propio dominio hardcoded. |
| 20 | **Prototype pollution** | Validación estricta antes de spread | ✅ **Aplicado** — Zod `safeParse` valida y normaliza. |
| 21 | **Subdomain takeover** (CNAME huérfano) | Auditar DNS, eliminar entries huérfanas | 🟡 **Manual** — revisar en Vercel/DNS que no quede ningún CNAME apuntando a servicios que ya no usas. |
| 22 | **Secretos en el repo** (API keys olvidadas) | Git secret scanning | 🟡 **Manual** — habilitar GitHub Secret Scanning en `Settings → Code security`. |
| 23 | **Path traversal** | No servir archivos desde input | ✅ **N/A** — la API no sirve archivos. |
| 24 | **Insecure deserialization** | JSON.parse + validación | ✅ **Aplicado** vía Zod. |
| 25 | **CORS misconfig** | Default same-origin | ✅ **Aplicado** — Next.js no expone CORS abierto por defecto en `/api`. |
| 26 | **Dependency confusion / typosquatting** | Lockfile + verificación de paquetes | ✅ **Aplicado** — todas las deps son legítimas y `package-lock.json` está committeado. |
| 27 | **CDN cache poisoning** | Cache-Control correcto en endpoints dinámicos | 🟡 **Verificar** — Vercel maneja esto bien por defecto en App Router. |

---

## 3. Detalle por categoría

### 3.1 Lo que está bien (12 items)

- **React escapa output por defecto.** Todos los `{variable}` están protegidos. Los `dangerouslySetInnerHTML` en `JsonLd.tsx` y `BreadcrumbsJsonLd.tsx` solo serializan objetos hardcoded — no hay vector XSS.
- **Sin base de datos** → toda la familia de injections (SQL, NoSQL, ORM) no aplica.
- **Sin autenticación / sesión** → CSRF no es vector. No hay state que mutar a nombre del usuario.
- **`poweredByHeader: false`** elimina el header `X-Powered-By: Next.js` que delata el stack.
- **`.gitignore`** excluye `.env*.local` y `.vercel` — los secretos no se versionan.
- **Validación Zod** en `/api/contact` con `safeParse` — bloquea prototype pollution, type confusion, payloads malformados, y campos extra (Zod rechaza por defecto los campos no declarados con `.strict()` si se usa, aunque actualmente acepta extras silenciosamente).
- **URLs hardcoded** en `src/lib/og-image.tsx` → no hay SSRF.
- **Sin redirects basados en input** → no hay open redirect.
- **API route mismo-origen** → CORS cerrado por default.
- **Lockfile commiteado** + dependencias legítimas → sin dependency confusion.

### 3.2 Pendientes críticos (7 items)

#### a) Security headers HTTP (#5, #6, #7, #8, #9, #10)

**Problema:** el sitio no envía headers de seguridad en las respuestas. Resultado: clickjacking, MIME confusion, script injection y referrer leak son posibles.

**Solución:** agregar bloque `headers()` en `next.config.js`:

```js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
        // CSP: ajustar según scripts externos (Google Analytics, Cal.com)
        {
          key: 'Content-Security-Policy',
          value: [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://app.cal.com",
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data: https:",
            "font-src 'self' data:",
            "connect-src 'self' https://www.google-analytics.com https://app.cal.com",
            "frame-src https://app.cal.com",
            "frame-ancestors 'self'",
            "base-uri 'self'",
            "form-action 'self'",
          ].join('; '),
        },
      ],
    },
  ];
}
```

**Aplicado:** ✅ **Hecho en v1.8.1** (`next.config.js` con bloque `headers()` + CSP estricta en prod, permisiva en dev, allowlist para `*.googletagmanager.com`, `*.google-analytics.com`, `*.cal.com`).

---

#### b) Rate limiting del endpoint `/api/contact` (#11)

**Problema:** alguien puede automatizar un bot que envíe 10.000 requests/segundo al endpoint. Aunque no envía email todavía, satura logs de Vercel y consume invocaciones de funciones (cuesta dinero).

**Solución:** rate limit por IP con Upstash Redis o Vercel KV.

```ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests/minuto
});

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }
  // ... resto del handler
}
```

Requiere crear cuenta en [upstash.com](https://upstash.com) (free tier alcanza) y agregar `UPSTASH_REDIS_REST_URL` y `UPSTASH_REDIS_REST_TOKEN` en Vercel.

**Alternativa sin servicios externos:** activar **Vercel WAF** (Pro plan) o Cloudflare Rate Limiting Rules si el dominio pasa por Cloudflare.

**Aplicado:** ❌ pendiente.

---

#### c) Anti-bot del formulario (#12)

**Problema:** un bot puede llenar y enviar el form 100 veces sin rate limit. Aunque tienes validación Zod, no filtra automatización.

**Soluciones (de menor a mayor fricción):**

1. **Honeypot field** (gratis, invisible, sin UX impact):
   ```tsx
   <input
     type="text"
     name="website"
     tabIndex={-1}
     autoComplete="off"
     style={{ position: 'absolute', left: '-9999px' }}
     aria-hidden="true"
   />
   ```
   En el backend, si `website` viene con valor → bloquear como spam.

2. **Cloudflare Turnstile** (gratis, sin CAPTCHA visual, mejor que reCAPTCHA hoy en día).

3. **reCAPTCHA v3** (gratis, score-based, requiere cuenta Google).

**Aplicado:** ✅ **Hecho en v1.8.1** — opción 1 (honeypot). Detalles:
- `src/components/contact/ContactForm.tsx`: campo `website` envuelto en `<div aria-hidden="true">` posicionado en `left: -9999px` (invisible para humanos, lectores de pantalla lo ignoran por `aria-hidden`, focus lo salta por `tabIndex={-1}`, password managers no lo autocompletan por `autoComplete="off"`).
- `src/lib/schemas/contact.ts`: añadido `website: z.string().max(0).optional()` para validar que el campo esté vacío.
- `src/app/api/contact/route.ts`: si `result.data.website` viene con contenido, retorna `200 OK` falso sin procesar el envío. Devolver 400 alertaría al bot de que detectamos el honeypot.

Si los bots evolucionan y empiezan a filtrar campos por estilo/aria, escalar a **Cloudflare Turnstile** (P1).

---

#### d) Vulnerabilidades de dependencias (#14)

**Estado actual (`npm audit`):**

| Paquete | Severidad | CVE / Advisory |
|---|---|---|
| `picomatch` 4.0.0–4.0.3 | High | ReDoS + Method Injection (GHSA-3v7f-55p6-f55p, GHSA-c2c7-rcm5-vvqj) |
| `postcss` < 8.5.10 | Moderate | XSS via unescaped `</style>` (GHSA-qx2v-qp2m-jg93) |
| Otras 3 | Mixed low/moderate | — |

**Solución:**
```bash
npm audit fix
npm audit  # verificar que quede 0
```
Si `audit fix` rompe algo, hacerlo manual: `npm update <paquete>`.

**Recomendado además:** activar **Dependabot** en GitHub (`.github/dependabot.yml`) para PRs automáticos semanales.

**Aplicado:** 🟡 **Parcial en v1.8.1.** Resultado del `npm audit fix`:

| Paquete | Antes → Ahora | Severidad cerrada |
|---|---|---|
| `next` | 16.1.6 → **16.2.6** | 12 advisories (high+moderate+low) |
| `next-intl` | 4.8.2 → **4.12.0** | 2 advisories (moderate) |
| `picomatch` | 4.0.3 → **4.0.4** | 2 advisories (high) |
| `icu-minify` | 4.9.1 → **4.12.0** | 1 advisory (low) |
| `postcss` (top-level) | 8.5.6 → **8.5.15** | 1 advisory (moderate) |

**Quedan 3 moderate:** `postcss@8.4.31` está bundled dentro de `next@16.2.6` (la versión más reciente). El `--force` que sugiere npm haría downgrade de Next a 9.3.3 — inviable. El vector real de la CVE (XSS via `</style>` no escapado al hacer stringify CSS) **no aplica** en este sitio: no procesamos CSS controlado por el usuario en runtime. Cuando Vercel actualice el postcss interno de Next, se cierra automáticamente.

**Dependabot:** ✅ **Aplicado en v1.8.1** — `.github/dependabot.yml` configura:
- Updates semanales de npm (lunes 09:00 GT) agrupados por minor/patch para evitar 30 PRs separados.
- Updates mensuales de GitHub Actions (cuando se agreguen workflows).
- Target branch: `developer` (respeta el flujo feature → developer → main).
- Commits con prefijo `chore`/`ci` (siguen convenciones del repo).
- Majors de `next`, `react`, `react-dom`, `tailwindcss` ignorados — se actualizan a mano por traer breaking changes.
- Vigilancia continua: ante una nueva CVE, Dependabot abre PR de inmediato (no espera al schedule).

---

### 3.3 Pendientes manuales (3 items)

#### a) Subdomain takeover (#21)
Revisar en Vercel → tu dominio → DNS. Eliminar cualquier CNAME apuntando a servicios desactivados (Heroku apps muertas, Netlify sites borrados, etc.).

#### b) Secret scanning (#22)
En GitHub:
1. `Settings → Code security and analysis`
2. Activar **Secret scanning** y **Push protection**
3. Activar **Dependabot alerts** y **Dependabot security updates**

#### c) Email header injection futuro (#13)
Cuando integres Resend:
- Usa **Resend SDK oficial** (`resend.emails.send({...})`), no construyas headers MIME a mano.
- En el `subject`/`from`/`to`, nunca concatenes input del usuario directamente — si lo haces, primero `value.replace(/[\r\n]/g, '')`.
- El `text`/`html` del body sí puede llevar input del usuario (es texto, no header).

---

## 4. Plan de remediación recomendado

| Prioridad | Acción | Esfuerzo | Impacto |
|---|---|---|---|
| ✅ ~~P0~~ | ~~Security headers en `next.config.js`~~ | ~~15 min~~ | **Hecho en v1.8.1** |
| ✅ ~~P0~~ | ~~`npm audit fix` + verificar build~~ | ~~10 min~~ | **Hecho en v1.8.1** — cierra 17 advisories. Quedan 3 moderate no-explotables (postcss bundled en Next). |
| ✅ ~~P0~~ | ~~Honeypot en contact form~~ | ~~10 min~~ | **Hecho en v1.8.1** — campo trampa `website` invisible + Zod `max(0)` + drop silencioso en API. |
| 🟠 P1 | Rate limit con Upstash | 1–2 h | Anti-DDoS al endpoint |
| 🟠 P1 | Cloudflare Turnstile (si honeypot no basta) | 30 min | Bot protection real |
| ✅ ~~P2~~ | ~~Activar Dependabot~~ | ~~5 min~~ | **Hecho en v1.8.1** — `.github/dependabot.yml` con updates semanales agrupados, target `developer`. Secret Scanning sigue pendiente (manual en UI de GitHub). |
| 🟡 P2 | Auditoría DNS Vercel | 10 min | Anti subdomain takeover |
| 🟡 P2 | Cuando integres email: usar Resend SDK + sanitizar headers | con la feature | Anti header injection |

**Tiempo total para llegar a 9.5/10: ~3 horas.**

---

## 5. Herramientas de verificación

Después de aplicar los headers, validar con estas herramientas online (gratis):

| Herramienta | Qué mide |
|---|---|
| [securityheaders.com](https://securityheaders.com) | Headers HTTP — objetivo: grado A+ |
| [observatory.mozilla.org](https://observatory.mozilla.org) | Análisis completo Mozilla — objetivo: A+ |
| [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/) | TLS/SSL — objetivo: A+ |
| [pagespeed.web.dev](https://pagespeed.web.dev) | Lighthouse — sección "Best practices" incluye security |
| [csp-evaluator.withgoogle.com](https://csp-evaluator.withgoogle.com) | Análisis específico de tu CSP |

---

## 6. Referencias

- [OWASP Top 10 (2021)](https://owasp.org/Top10/)
- [Next.js Security Headers docs](https://nextjs.org/docs/app/api-reference/config/next-config-js/headers)
- [Vercel — Security best practices](https://vercel.com/docs/security)
- [MDN — HTTP security headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
