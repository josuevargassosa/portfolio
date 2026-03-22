export interface Project {
  id: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'menudigital',
    thumbnail: '/images/projects/menudigital.jpg',
    techStack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Cloudinary', 'Vercel', 'Railway'],
    liveUrl: 'https://www.menudigital.ec/',
    featured: true,
  },
  {
    id: 'invitacion-boda',
    thumbnail: '/images/projects/invitacion-boda.jpg',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    liveUrl: 'https://invitacion-boda-carlos-lucia.josuevargassosa.com/',
    featured: true,
  },
  {
    id: 'licoreria',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Ionic', 'PWA', 'MySQL'],
    featured: true,
  },
  {
    id: 'control-lectura',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Angular', 'NestJS', 'Railway', 'Swagger', 'Cloudinary'],
    featured: true,
  },
  {
    id: 'app-eventos',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Ionic', 'Firebase'],
    featured: false,
  },
  {
    id: 'portfolio',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    featured: false,
  },
];
