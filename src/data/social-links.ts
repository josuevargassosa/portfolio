export interface SocialLink {
  name: string;
  url: string;
  icon: 'linkedin' | 'github';
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/josue-vargas-sosa',
    icon: 'linkedin',
    color: '#2867b2',
  },
  {
    name: 'Github',
    url: 'https://github.com/josuevargassosa',
    icon: 'github',
    color: '#333333',
  },
];
