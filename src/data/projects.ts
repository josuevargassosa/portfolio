export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico con carrito de compras, pagos y gestión de inventario.',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Angular', 'Node.js', 'SQL Server', 'TypeScript'],
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con tableros Kanban, asignación de usuarios y reportes.',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Ionic', 'Flutter', 'NestJS', 'TypeScript'],
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Portfolio Website',
    description: 'Portafolio profesional con soporte multilenguaje, tema oscuro/claro y animaciones.',
    thumbnail: '/images/projects/placeholder.webp',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/josuevargassosa/josuevargassosa',
    featured: true,
  },
];
