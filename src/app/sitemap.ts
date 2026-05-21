import type {MetadataRoute} from 'next';

const BASE_URL = 'https://josuevargassosa.com';
const LOCALES = ['es', 'en'] as const;

interface RouteConfig {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}

const ROUTES: RouteConfig[] = [
  {path: '', changeFrequency: 'weekly', priority: 1.0},
  {path: '/projects', changeFrequency: 'monthly', priority: 0.9},
  {path: '/resume', changeFrequency: 'monthly', priority: 0.9},
  {path: '/certificates', changeFrequency: 'monthly', priority: 0.7},
  {path: '/contact', changeFrequency: 'yearly', priority: 0.6},
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
    ROUTES.map(({path, changeFrequency, priority}) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          'es-ES': `${BASE_URL}/es${path}`,
          'en-US': `${BASE_URL}/en${path}`,
          'x-default': `${BASE_URL}/es${path}`,
        },
      },
    })),
  );
}
