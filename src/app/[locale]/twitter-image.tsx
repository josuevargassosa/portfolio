import {OG_SIZE, OG_CONTENT_TYPE, renderOgImage} from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Josue Vargas - Senior Software Engineer';
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
    eyebrow: isEn ? 'Portfolio' : 'Portafolio',
    title: 'Josue Vargas',
    subtitle: isEn
      ? 'Senior Software Engineer · Angular · NestJS · .NET · React · Next.js · Flutter'
      : 'Ingeniero de Software Senior · Angular · NestJS · .NET · React · Next.js · Flutter',
  });
}
