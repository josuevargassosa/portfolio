export interface Experience {
  id: string;
  company: string;
  position: string;
  period: { start: string; end: string | null };
  description: string;
  techStack: string[];
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
    company: 'Empresa Ejemplo',
    position: 'Full Stack Developer',
    period: { start: '2023-01', end: null },
    description: 'Desarrollo de aplicaciones web con Angular y NestJS. Diseño de APIs REST y bases de datos SQL Server.',
    techStack: ['Angular', 'NestJS', 'SQL Server', 'TypeScript'],
  },
  {
    id: 'exp-2',
    company: 'Empresa Anterior',
    position: 'Frontend Developer',
    period: { start: '2021-06', end: '2022-12' },
    description: 'Desarrollo de interfaces de usuario responsivas con Angular e Ionic para aplicaciones móviles.',
    techStack: ['Angular', 'Ionic', 'JavaScript', 'CSS'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Universidad Ejemplo',
    degree: 'Ingeniería en Sistemas',
    period: { start: '2018', end: '2022' },
    description: 'Enfoque en desarrollo de software y bases de datos.',
  },
];
