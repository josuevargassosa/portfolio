import type {MetadataRoute} from 'next';

const BASE_URL = 'https://josuevargassosa.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['es', 'en'];
  const routes = ['', '/projects', '/resume', '/certificates', '/contact'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
  );
}
