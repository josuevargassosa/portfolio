export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'menudigital',
    title: 'MenuDigital.ec',
    description:
      'SaaS de menú digital para restaurantes en Ecuador. Monorepo con landing, panel admin (dashboard, analytics, multi-sucursal, roles, facturación Stripe) y menús públicos con 3 templates. Pedidos por WhatsApp sin comisiones.',
    thumbnail: '/images/projects/menudigital.jpg',
    techStack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Cloudinary', 'Vercel', 'Railway'],
    liveUrl: 'https://www.menudigital.ec/',
    featured: true,
  },
  {
    id: 'invitacion-boda',
    title: 'Invitación Digital de Boda',
    description:
      'Invitación web interactiva con música ambiental, cuenta regresiva, galería de fotos, itinerario, mesa de regalos, integración con Google Calendar y confirmación de asistencia con formulario.',
    thumbnail: '/images/projects/invitacion-boda.jpg',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    liveUrl: 'https://invitacion-boda-carlos-lucia.josuevargassosa.com/',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Sistema Web Licorería',
    description:
      'Aplicación web progresiva (PWA) para la gestión de inventario y ventas de una licorería con soporte offline.',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Ionic', 'PWA', 'MySQL'],
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Sistema Control de Lectura',
    description:
      'Plataforma web para el control y seguimiento de lecturas con documentación de API y almacenamiento de archivos en la nube.',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Angular', 'NestJS', 'Railway', 'Swagger', 'Cloudinary'],
    featured: true,
  },
  {
    id: 'project-4',
    title: 'App de Eventos',
    description:
      'Aplicación móvil para la gestión y consulta de eventos con autenticación y datos en tiempo real.',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Ionic', 'Firebase'],
    featured: false,
  },
  {
    id: 'project-5',
    title: 'Portfolio Website',
    description:
      'Portafolio profesional con soporte multilenguaje, tema oscuro/claro y animaciones.',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    featured: false,
  },
];
