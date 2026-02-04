export interface Skill {
  id: string;
  name: string;
  logo: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools';
}

export const skills: Skill[] = [
  // Frontend
  {
    id: 'angular',
    name: 'Angular',
    logo: '/images/skills/angularLogo.svg',
    category: 'frontend',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    logo: '/images/skills/typescriptLogo.svg',
    category: 'frontend',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    logo: '/images/skills/javascriptLogo.svg',
    category: 'frontend',
  },
  {
    id: 'html',
    name: 'HTML5',
    logo: '/images/skills/htmlLogo.svg',
    category: 'frontend',
  },
  {
    id: 'css',
    name: 'CSS3',
    logo: '/images/skills/cssLogo.svg',
    category: 'frontend',
  },
  // Backend
  {
    id: 'nestjs',
    name: 'NestJS',
    logo: '/images/skills/nestjsLogo.svg',
    category: 'backend',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    logo: '/images/skills/nodejsLogo.svg',
    category: 'backend',
  },
  {
    id: 'dotnet',
    name: '.NET',
    logo: '/images/skills/dotnetLogo.svg',
    category: 'backend',
  },
  {
    id: 'csharp',
    name: 'C#',
    logo: '/images/skills/csharpLogo.svg',
    category: 'backend',
  },
  // Mobile
  {
    id: 'ionic',
    name: 'Ionic',
    logo: '/images/skills/ionicLogo.svg',
    category: 'mobile',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    logo: '/images/skills/flutterLogo.svg',
    category: 'mobile',
  },
  // Database
  {
    id: 'sqlserver',
    name: 'SQL Server',
    logo: '/images/skills/sqlServerLogo.svg',
    category: 'database',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    logo: '/images/skills/mysqlLogo.svg',
    category: 'database',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    logo: '/images/skills/firebaseLogo.svg',
    category: 'database',
  },
  // Tools
  {
    id: 'git',
    name: 'Git',
    logo: '/images/skills/gitLogo.svg',
    category: 'tools',
  },
  {
    id: 'azuredevops',
    name: 'Azure DevOps',
    logo: '/images/skills/azureDevopsLogo.svg',
    category: 'tools',
  },
  {
    id: 'figma',
    name: 'Figma',
    logo: '/images/skills/figmaLogo.svg',
    category: 'tools',
  },
  {
    id: 'swagger',
    name: 'Swagger',
    logo: '/images/skills/swaggerLogo.svg',
    category: 'tools',
  },
];
