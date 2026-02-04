export interface Experience {
  id: string;
  company: string;
  position: string;
  period: { start: string; end: string | null };
  description: string;
  techStack: string[];
  location?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: { start: string; end: string };
  description?: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Facilito S.A.',
    position: 'Senior Software Engineer',
    period: { start: '2024-04', end: null },
    description:
      'Liderazgo técnico en supervisión de tareas y definición de buenas prácticas. Implementación de funcionalidades en Angular, NestJS y .NET 7. Aseguramiento de calidad de código, eficiencia en despliegues e integración frontend-backend.',
    techStack: ['Angular', 'NestJS', '.NET 7', 'TypeScript', 'Azure DevOps'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-2',
    company: 'Facilito S.A.',
    position: 'Software Engineer',
    period: { start: '2022-07', end: '2024-04' },
    description:
      'Desarrollo full-stack de sistemas Onboarding, Portal Pagos y Facilito Web. Optimicé el proceso de adhesión de comercios de 2h a 15min. Migración a Angular + .NET 6 logrando un sistema 30% más rápido. Implementé pipelines CI/CD reduciendo despliegues de 1h a 10min.',
    techStack: ['Angular', '.NET 6', 'SQL Server', 'Azure DevOps', 'CI/CD'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-3',
    company: 'AITEC Instituto Superior Universitario Almirante Illingworth',
    position: 'Docente de Desarrollo Móvil',
    period: { start: '2024-06', end: '2024-08' },
    description:
      'Impartí clases sobre desarrollo móvil con Ionic y Angular, con enfoque práctico basado en proyectos. Guié la creación de aplicaciones CRUD con consumo de APIs públicas.',
    techStack: ['Ionic', 'Angular', 'TypeScript'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-4',
    company: 'Fondo de Cesantía CTE',
    position: 'Software Developer',
    period: { start: '2021-01', end: '2022-07' },
    description:
      'Desarrollo del sistema de solicitudes de crédito y adhesión de socios. Automaticé la adhesión de socios reduciendo el proceso de 3-4h a 20min. Desarrollé aprobación web y créditos móvil reduciendo trámites de 6h a 1h. Creé pipelines CI/CD y documenté APIs con Swagger.',
    techStack: ['Angular', 'ASP.NET Web API', '.NET', 'SQL Server', 'Swagger'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-5',
    company: 'Binasystem',
    position: 'Front-End Developer',
    period: { start: '2020-10', end: '2022-07' },
    description:
      'Desarrollo de la app móvil TendaGo en Flutter y del administrador web Service Broker. Diseño de prototipos en Figma para presentaciones a clientes. Contribución al sitio corporativo binasystem.com con principios UX/UI modernos.',
    techStack: ['Angular', 'Flutter', 'Azure DevOps', 'Figma', 'TypeScript'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-6',
    company: 'Profesional Independiente',
    position: 'Desarrollador de Software',
    period: { start: '2019-12', end: null },
    description:
      'Desarrollo de aplicaciones web y móviles para diversos clientes. Proyectos freelance incluyendo sistemas web, aplicaciones móviles y soluciones a medida.',
    techStack: ['Angular', 'Ionic', 'NestJS', 'Node.js', 'Firebase'],
    location: 'Ecuador',
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'FUNIBER – UNINI México / UNEATLANTICO España',
    degree: 'Maestría en Transformación Digital',
    period: { start: '2025', end: '2027' },
    description:
      'Doble titulación internacional. Gestión de proyectos de TI, Big Data, Seguridad de la Información y Planificación Estratégica. Enfoque en liderazgo de equipos distribuidos y experiencia de cliente (CX).',
  },
  {
    id: 'edu-2',
    institution: 'Universidad ECOTEC',
    degree: 'Ingeniero en Sistemas – Ingeniería de Software',
    period: { start: '2017', end: '2022' },
  },
  {
    id: 'edu-3',
    institution: 'Kaplan – Canadá',
    degree: 'Curso Intensivo de Inglés – Certificado Nivel B1',
    period: { start: '2024', end: '2024' },
  },
  {
    id: 'edu-4',
    institution: 'Liceo Panamericano',
    degree: 'Bachillerato',
    period: { start: '2011', end: '2017' },
  },
];
