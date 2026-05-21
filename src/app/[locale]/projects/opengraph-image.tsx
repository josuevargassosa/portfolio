import {OG_SIZE, OG_CONTENT_TYPE, renderOgImage} from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Projects — Josue Vargas';
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
    title: isEn ? 'Projects' : 'Proyectos',
    subtitle: isEn
      ? 'Web & mobile portfolio — Angular · React · Next.js · NestJS · .NET · Flutter'
      : 'Portafolio web y móvil — Angular · React · Next.js · NestJS · .NET · Flutter',
  });
}
