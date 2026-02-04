import type {MetadataRoute} from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Josue Vargas - Full Stack Developer',
    short_name: 'Josue Vargas',
    description: 'Portfolio profesional de Josue Vargas, Full Stack Developer.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/images/josue-logo.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/images/josue-logo.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  };
}
