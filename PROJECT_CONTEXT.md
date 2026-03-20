# Project Context: Portfolio Next.js

## 1. Project Overview
**Name:** `portfolio-nextjs`
**Description:** Josue Vargas - Full Stack Developer Portfolio.
**Type:** Responsive Web Application / Personal Portfolio.

## 2. Tech Stack

### Core
- **Framework:** [Next.js 16.1.6](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.9](https://www.typescriptlang.org/)
- **Runtime:** Node.js

### Styling & UI
- **CSS Engine:** [Tailwind CSS 4.1.18](https://tailwindcss.com/)
- **UI Architecture:** 
  - `class-variance-authority` (CVA) for component variants.
  - `clsx` & `tailwind-merge` for class management.
- **Icons:** `lucide-react`.
- **Animations:** `framer-motion`.
- **Theme:** Dark/Light mode support via `next-themes`.

### Forms
- **Library:** `react-hook-form`.
- **Validation:** `zod` with `@hookform/resolvers`.

### Internationalization (i18n)
- **Library:** `next-intl`.
- **Routing:** Localized routing (`/en/...`, `/es/...`) via `src/app/[locale]` structure.

## 3. Architecture & Project Structure

The project follows a modular, feature-based architecture within the Next.js App Router structure.

### Key Directories
- **`src/app`**: Next.js App Router definitions.
  - `[locale]/`: Dynamic route for localization. All main pages reside here.
  - `api/`: Backend API routes.
  - SEO files: `sitemap.ts`, `robots.ts`, `manifest.ts`.
  
- **`src/components`**: UI Components organized by domain.
  - `ui/`: Reusable, generic UI primitives (likely Shadcn/UI inspired).
  - `shared/`: Shared components used across features (Header, Footer, etc.).
  - `home/`, `projects/`, `resume/`, `contact/`, `certificates/`: Feature-specific components.
  - `layout/`: Layout wrappers.

- **`src/i18n`**: Internationalization configuration and dictionaries.
- **`src/lib`**: Utility functions and helpers.
- **`src/types`**: TypeScript type definitions.
- **`src/data`**: Static data files.

## 4. Key Configurations
- **Tailwind 4**: Configured via `@tailwindcss/postcss`.
- **Middleware**: `middleware.ts` handles locale detection and redirection.
- **Build System**: Uses Turbopack (`next dev --turbopack`).

## 5. Summary for AI Agents
This is a modern, statically typed Next.js applications focused on performance and clean UI. 
- When generating components, prefer **Functional Components** with **TypeScript** interfaces.
- Use **Tailwind CSS** utility classes for styling.
- Use **Framer Motion** for animations if requested.
- Respect the **i18n** structure; strings should likely be pulled from dictionaries.
- The UI pattern suggests a separation between "dumb" UI components (`src/components/ui`) and feature-rich domain components.
