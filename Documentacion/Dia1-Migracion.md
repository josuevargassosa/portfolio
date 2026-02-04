Dia 1 - Commit Realizado
Rama: feature/day1-nextjs-setup
Commit: 6894f00 - feat: migrate from Angular to Next.js 16
Archivos: 59 archivos cambiados (+2,637 / -12,836 lineas)

Lo que se hizo en este commit:
Eliminado (Angular):

angular.json, tsconfig.app.json, tsconfig.spec.json
Todos los componentes Angular (app.module.ts, landing-page.component.*)
Assets antiguos, environments, index.html, main.ts
Agregado (Next.js 16):

next.config.js con next-intl y optimizacion de imagenes
postcss.config.js con @tailwindcss/postcss (Tailwind v4)
src/app/[locale]/layout.tsx - Layout con fuentes, tema, SEO, i18n
src/app/[locale]/page.tsx - Pagina principal
src/app/globals.css - Tema con variables CSS (dark/light)
src/middleware.ts - Deteccion de idioma
src/i18n/ - Configuracion i18n completa con traducciones ES/EN
src/data/skills.ts - 11 skills migrados con tipado TypeScript
src/data/social-links.ts - Links sociales tipados
src/lib/utils.ts - Utilidad cn() para clases
Migrado:

Imagenes de src/assets/img/ a public/images/skills/ (git detecto los renames)
Nota:
El remote del repo no esta configurado, asi que el push queda pendiente hasta que configures el origin correcto. Puedes verificar con git remote -v y actualizarlo si es necesario.