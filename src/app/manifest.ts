import type {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Josue Vargas - Senior Software Engineer',
    short_name: 'Josue Vargas',
    description: 'Portfolio profesional de Josue Vargas, Ingeniero de Software Senior.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/josueLogo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/josueLogo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
