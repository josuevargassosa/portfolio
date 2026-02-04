export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Angular - Desarrollo de Aplicaciones',
    issuer: 'Udemy',
    date: '2023-06',
    credentialUrl: '#',
  },
  {
    id: 'cert-2',
    title: 'NestJS - Backend con Node.js',
    issuer: 'Udemy',
    date: '2023-03',
    credentialUrl: '#',
  },
  {
    id: 'cert-3',
    title: 'Flutter - Desarrollo Móvil',
    issuer: 'Platzi',
    date: '2022-11',
    credentialUrl: '#',
  },
  {
    id: 'cert-4',
    title: 'SQL Server - Administración de BD',
    issuer: 'Udemy',
    date: '2022-08',
    credentialUrl: '#',
  },
];
