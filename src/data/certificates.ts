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
    title: 'Curso de Introducción a React.js',
    issuer: 'Platzi',
    date: '2022-12',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/2444-react/diploma/detalle/',
  },
  {
    id: 'cert-2',
    title: 'Frontend con Angular',
    issuer: 'Platzi',
    date: '2022-10',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/2485-angular/diploma/detalle/',
  },
  {
    id: 'cert-3',
    title: 'Curso de CSS Grid Básico',
    issuer: 'Platzi',
    date: '2022-06',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/2474-css-grid/diploma/detalle/',
  },
  {
    id: 'cert-4',
    title: 'Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy',
    issuer: 'Platzi',
    date: '2022-06',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/2274-nestjs-modular/diploma/detalle/',
  },
  {
    id: 'cert-5',
    title: 'Curso de Backend con NestJS',
    issuer: 'Platzi',
    date: '2022-06',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/2272-nestjs/diploma/detalle/',
  },
  {
    id: 'cert-6',
    title: 'Curso Profesional de Angular 8',
    issuer: 'Platzi',
    date: '2022-05',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/1670-angular-profesional/diploma/detalle/',
  },
  {
    id: 'cert-7',
    title: 'Curso de Fundamentos de Angular',
    issuer: 'Platzi',
    date: '2022-04',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/2484-angular-fundamentos/diploma/detalle/',
  },
  {
    id: 'cert-8',
    title: 'Curso Básico de Seguridad Informática para Empresas',
    issuer: 'Platzi',
    date: '2021-04',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/2210-seguridad-empresas/diploma/detalle/',
  },
  {
    id: 'cert-9',
    title: 'Curso de Ventas Práctico',
    issuer: 'Platzi',
    date: '2021-11',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/1832-ventas-practico/diploma/detalle/',
  },
  {
    id: 'cert-10',
    title: 'Curso de Usabilidad',
    issuer: 'Platzi',
    date: '2021-10',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/1755-usabilidad/diploma/detalle/',
  },
  {
    id: 'cert-11',
    title: 'Curso de Figma',
    issuer: 'Platzi',
    date: '2021-09',
    credentialUrl: 'https://platzi.com/p/Josuevargassosa/curso/2064-figma/diploma/detalle/',
  },
  {
    id: 'cert-12',
    title: 'Ionic 5: Crear aplicaciones IOS, Android y PWAs con Angular',
    issuer: 'Udemy',
    date: '2020-01',
    credentialUrl: 'https://www.udemy.com/certificate/UC-29TQL0EG/',
  },
];
