import {OG_SIZE, OG_CONTENT_TYPE, renderOgImage} from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Contact — Josue Vargas';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const isEn = locale === 'en';

  return renderOgImage({
    eyebrow: 'Josue Vargas',
    title: isEn ? 'Get in touch' : 'Contáctame',
    subtitle: isEn
      ? 'Available for web and mobile development projects'
      : 'Disponible para proyectos de desarrollo web y móvil',
  });
}
