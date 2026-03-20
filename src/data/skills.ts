export interface Skill {
  id: string;
  name: string;
  logo: string;
  category: 'languages' | 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'tools';
}

export const skillCategories = [
  { key: 'languages', label: 'Languages' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'database', label: 'Database' },
  { key: 'devops', label: 'DevOps & Cloud' },
  { key: 'tools', label: 'Tools' },
] as const;

export const skills: Skill[] = [
  // Languages
  { id: 'typescript', name: 'TypeScript', logo: '/images/skills/typescriptLogo.svg', category: 'languages' },
  { id: 'javascript', name: 'JavaScript', logo: '/images/skills/javascriptLogo.svg', category: 'languages' },
  { id: 'csharp', name: 'C#', logo: '/images/skills/csharpLogo.svg', category: 'languages' },
  { id: 'dart', name: 'Dart', logo: '/images/skills/dartLogo.svg', category: 'languages' },

  // Frontend
  { id: 'angular', name: 'Angular', logo: '/images/skills/angularLogo.svg', category: 'frontend' },
  { id: 'react', name: 'React', logo: '/images/skills/reactLogo.svg', category: 'frontend' },
  { id: 'nextjs', name: 'Next.js', logo: '/images/skills/nextjsLogo.svg', category: 'frontend' },
  { id: 'tailwind', name: 'Tailwind', logo: '/images/skills/tailwindLogo.svg', category: 'frontend' },
  { id: 'html', name: 'HTML', logo: '/images/skills/htmlLogo.svg', category: 'frontend' },
  { id: 'css', name: 'CSS', logo: '/images/skills/cssLogo.svg', category: 'frontend' },

  // Backend
  { id: 'nestjs', name: 'NestJS', logo: '/images/skills/nestjsLogo.svg', category: 'backend' },
  { id: 'nodejs', name: 'Node.js', logo: '/images/skills/nodejsLogo.svg', category: 'backend' },
  { id: 'dotnet', name: '.NET', logo: '/images/skills/dotnetLogo.svg', category: 'backend' },

  // Mobile
  { id: 'ionic', name: 'Ionic', logo: '/images/skills/ionicLogo.svg', category: 'mobile' },
  { id: 'flutter', name: 'Flutter', logo: '/images/skills/flutterLogo.svg', category: 'mobile' },

  // Database
  { id: 'sqlserver', name: 'SQL Server', logo: '/images/skills/sqlServerLogo.svg', category: 'database' },
  { id: 'postgresql', name: 'PostgreSQL', logo: '/images/skills/postgresqlLogo.svg', category: 'database' },
  { id: 'mysql', name: 'MySQL', logo: '/images/skills/mysqlLogo.svg', category: 'database' },
  { id: 'firebase', name: 'Firebase', logo: '/images/skills/firebaseLogo.svg', category: 'database' },

  // DevOps & Cloud
  { id: 'azuredevops', name: 'Azure DevOps', logo: '/images/skills/azureDevopsLogo.svg', category: 'devops' },
  { id: 'docker', name: 'Docker', logo: '/images/skills/dockerLogo.svg', category: 'devops' },
  { id: 'git', name: 'Git', logo: '/images/skills/gitLogo.svg', category: 'devops' },

  // Tools
  { id: 'claudeai', name: 'Claude AI', logo: '/images/skills/claudeaiLogo.svg', category: 'tools' },
  { id: 'figma', name: 'Figma', logo: '/images/skills/figmaLogo.svg', category: 'tools' },
  { id: 'swagger', name: 'Swagger', logo: '/images/skills/swaggerLogo.svg', category: 'tools' },
];
