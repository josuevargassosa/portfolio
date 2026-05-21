import type {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Josue Vargas — Senior Software Engineer',
    short_name: 'Josue Vargas',
    description:
      'Portfolio profesional de Josue Vargas, Ingeniero de Software Senior especializado en Angular, NestJS, .NET, React, Next.js y Flutter.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#000000',
    theme_color: '#000000',
    lang: 'es',
    categories: ['portfolio', 'developer', 'technology', 'productivity'],
    icons: [
      {
        src: '/images/josueLogo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/josueLogo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/images/josueLogo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
