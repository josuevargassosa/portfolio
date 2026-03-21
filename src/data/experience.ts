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
    company: 'Prosegur · Facilito S.A.',
    position: 'Senior Software Engineer',
    period: { start: '2024-04', end: null },
    description:
      'Lideré la migración de sistemas legados (.NET Framework) a Angular + .NET Core 7 aplicando ingeniería inversa sobre binarios compilados. Optimicé reportes críticos reduciendo tiempos de carga de 10 min a 1 min (-90%). Implementé pipeline CI/CD con Azure DevOps, Docker y Azure Container Apps. Diseñé autenticación federada con Active Directory y Microsoft Entra ID.',
    techStack: ['Angular', 'NestJS', '.NET 7', 'Docker', 'Azure DevOps', 'Azure Container Apps'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-2',
    company: 'Prosegur · Facilito S.A.',
    position: 'Software Engineer',
    period: { start: '2022-07', end: '2024-04' },
    description:
      'Diseñé el sistema de Onboarding de comercios, reduciendo el tiempo de registro de 2 horas a 15 minutos (-87%). Lideré la migración de Facilito Web a Angular + .NET 6, logrando un sistema 30% más rápido. Implementé pipelines CI/CD reduciendo despliegues de 1 hora a 10 minutos. Integré servicios CISLATAM (Western Union).',
    techStack: ['Angular', '.NET 6', 'SQL Server', 'Azure DevOps', 'CI/CD'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-3',
    company: 'AITEC Instituto Superior Universitario',
    position: 'Docente de Desarrollo Móvil',
    period: { start: '2024-06', end: '2024-09' },
    description:
      'Impartí el curso de desarrollo móvil con Ionic y Angular a nivel tecnológico superior, con enfoque práctico basado en proyectos reales. Guié la construcción de aplicaciones CRUD con consumo de APIs REST y realicé revisiones de código personalizadas.',
    techStack: ['Ionic', 'Angular', 'TypeScript', 'REST APIs'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-4',
    company: 'Fondo de Cesantía CTE',
    position: 'Software Developer',
    period: { start: '2021-01', end: '2022-07' },
    description:
      'Desarrollé el sistema de solicitudes de crédito y adhesión de socios. Construí la app móvil institucional reduciendo la adhesión de socios de 3-4 horas a 20 minutos. Implementé el módulo de aprobación de créditos web y móvil, reduciendo el trámite de 6 horas a 1 hora. Configuré pipelines CI/CD y documenté APIs REST con Swagger.',
    techStack: ['Angular', '.NET', 'SQL Server', 'Ionic', 'Swagger', 'CI/CD'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-5',
    company: 'Binasystem',
    position: 'Front-End Developer',
    period: { start: '2020-10', end: '2022-07' },
    description:
      'Participé en el desarrollo de la app móvil TendaGo en Flutter y del administrador web Service Broker. Diseñé prototipos de interfaces móviles en Figma para presentaciones a clientes. Contribuí al desarrollo del sitio corporativo binasystem.com aplicando principios UX/UI modernos.',
    techStack: ['Angular', 'Flutter', 'Figma', 'Azure DevOps', 'TypeScript'],
    location: 'Guayaquil, Ecuador',
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'FUNIBER – UNINI México / UNEATLANTICO España',
    degree: 'Maestría en Transformación Digital',
    period: { start: '2025', end: '2027' },
    description:
      'Doble titulación internacional. Gestión de proyectos de TI, Big Data, Seguridad de la Información y Planificación Estratégica.',
  },
  {
    id: 'edu-2',
    institution: 'Universidad ECOTEC',
    degree: 'Ingeniero en Sistemas',
    period: { start: '2017', end: '2022' },
  },
  {
    id: 'edu-3',
    institution: 'Kaplan – Canadá',
    degree: 'Curso Intensivo de Inglés – Nivel B1',
    period: { start: '2024', end: '2024' },
  },
];
