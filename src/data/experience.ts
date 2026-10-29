export interface Experience {
  id: string;
  period: { start: string; end: string | null };
  techStack: string[];
  location?: string;
}

export interface Education {
  id: string;
  period: { start: string; end: string };
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    period: { start: '2024-05', end: null },
    techStack: ['Angular', 'NestJS', '.NET 7', '.NET 8', 'Next.js', 'Microsoft Entra ID', 'Playwright', 'Docker', 'Azure DevOps', 'Azure Container Apps'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-2',
    period: { start: '2022-07', end: '2024-05' },
    techStack: ['Angular', '.NET 6', 'NestJS', 'SQL Server', 'Azure DevOps', 'CI/CD'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-3',
    period: { start: '2024-06', end: '2024-08' },
    techStack: ['Ionic', 'Angular', 'TypeScript', 'REST APIs'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-4',
    period: { start: '2021-01', end: '2022-07' },
    techStack: ['Angular', '.NET', 'SQL Server', 'Flutter', 'Swagger', 'CI/CD'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-5',
    period: { start: '2020-10', end: '2022-07' },
    techStack: ['Angular', 'Flutter', 'Figma', 'Azure DevOps', 'TypeScript'],
    location: 'Guayaquil, Ecuador',
  },
  {
    id: 'exp-6',
    period: { start: '2019-12', end: null },
    techStack: ['React', 'NestJS', 'Next.js', 'Prisma', 'PostgreSQL'],
    location: 'Ecuador',
  },
];

export const education: Education[] = [
  { id: 'edu-1', period: { start: '2025', end: '2027' } },
  { id: 'edu-2', period: { start: '2017', end: '2022' } },
  { id: 'edu-3', period: { start: '2024', end: '2024' } },
];
