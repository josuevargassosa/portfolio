import {OG_SIZE, OG_CONTENT_TYPE, renderOgImage} from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Resume — Josue Vargas';
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
    title: isEn ? 'Resume' : 'Currículum',
    subtitle: isEn
      ? '6+ years building production software — Senior Software Engineer'
      : '+6 años construyendo software de producción — Senior Software Engineer',
  });
}
