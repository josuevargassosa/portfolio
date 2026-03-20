export interface Skill {
  id: string;
  name: string;
  logo: string;
  category: 'frontend' | 'backend' | 'mobile' | 'data' | 'ai' | 'tools';
}

export const skillCategories = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'data', label: 'Data & Cloud' },
  { key: 'ai', label: 'AI' },
  { key: 'tools', label: 'Tools' },
] as const;

export const skills: Skill[] = [
  // Frontend
  { id: 'angular', name: 'Angular', logo: '/images/skills/angularLogo.svg', category: 'frontend' },
  { id: 'react', name: 'React', logo: '/images/skills/reactLogo.svg', category: 'frontend' },
  { id: 'nextjs', name: 'Next.js', logo: '/images/skills/nextjsLogo.svg', category: 'frontend' },
  { id: 'typescript', name: 'TypeScript', logo: '/images/skills/typescriptLogo.svg', category: 'frontend' },
  { id: 'javascript', name: 'JavaScript', logo: '/images/skills/javascriptLogo.svg', category: 'frontend' },
  { id: 'tailwind', name: 'Tailwind', logo: '/images/skills/tailwindLogo.svg', category: 'frontend' },
  { id: 'html', name: 'HTML5', logo: '/images/skills/htmlLogo.svg', category: 'frontend' },
  { id: 'css', name: 'CSS3', logo: '/images/skills/cssLogo.svg', category: 'frontend' },

  // Backend
  { id: 'nestjs', name: 'NestJS', logo: '/images/skills/nestjsLogo.svg', category: 'backend' },
  { id: 'nodejs', name: 'Node.js', logo: '/images/skills/nodejsLogo.svg', category: 'backend' },
  { id: 'dotnet', name: '.NET', logo: '/images/skills/dotnetLogo.svg', category: 'backend' },
  { id: 'csharp', name: 'C#', logo: '/images/skills/csharpLogo.svg', category: 'backend' },

  // Mobile
  { id: 'ionic', name: 'Ionic', logo: '/images/skills/ionicLogo.svg', category: 'mobile' },
  { id: 'flutter', name: 'Flutter', logo: '/images/skills/flutterLogo.svg', category: 'mobile' },

  // Data & Cloud
  { id: 'sqlserver', name: 'SQL Server', logo: '/images/skills/sqlServerLogo.svg', category: 'data' },
  { id: 'mysql', name: 'MySQL', logo: '/images/skills/mysqlLogo.svg', category: 'data' },
  { id: 'firebase', name: 'Firebase', logo: '/images/skills/firebaseLogo.svg', category: 'data' },
  { id: 'azuredevops', name: 'Azure DevOps', logo: '/images/skills/azureDevopsLogo.svg', category: 'data' },
  { id: 'docker', name: 'Docker', logo: '/images/skills/dockerLogo.svg', category: 'data' },

  // AI & Tools
  { id: 'claudeai', name: 'Claude AI', logo: '/images/skills/claudeaiLogo.svg', category: 'ai' },
  { id: 'codex', name: 'Codex', logo: '/images/skills/codexLogo.svg', category: 'ai' },
  { id: 'opencode', name: 'OpenCode', logo: '/images/skills/opencodeLogo.svg', category: 'ai' },

  // Tools
  { id: 'git', name: 'Git', logo: '/images/skills/gitLogo.svg', category: 'tools' },
  { id: 'figma', name: 'Figma', logo: '/images/skills/figmaLogo.svg', category: 'tools' },
  { id: 'swagger', name: 'Swagger', logo: '/images/skills/swaggerLogo.svg', category: 'tools' },
];
