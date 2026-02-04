export interface Skill {
  id: string;
  name: string;
  logo: string;
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'tools';
}

export const skills: Skill[] = [
  {
    id: 'angular',
    name: 'Angular',
    logo: '/images/skills/angularLogo.png',
    category: 'frontend',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    logo: '/images/skills/typescriptLogo.png',
    category: 'frontend',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    logo: '/images/skills/javascriptLogo.png',
    category: 'frontend',
  },
  {
    id: 'ionic',
    name: 'Ionic',
    logo: '/images/skills/ionicLogo.png',
    category: 'mobile',
  },
  {
    id: 'html',
    name: 'HTML',
    logo: '/images/skills/htmlLogo.png',
    category: 'frontend',
  },
  {
    id: 'css',
    name: 'CSS',
    logo: '/images/skills/cssLogo.png',
    category: 'frontend',
  },
  {
    id: 'git',
    name: 'Git',
    logo: '/images/skills/gitLogo.png',
    category: 'tools',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    logo: '/images/skills/flutterLogo.png',
    category: 'mobile',
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    logo: '/images/skills/sqlServerLogo.png',
    category: 'database',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    logo: '/images/skills/nodejsLogo.png',
    category: 'backend',
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    logo: '/images/skills/nestjsLogo.png',
    category: 'backend',
  },
];
