import {OG_SIZE, OG_CONTENT_TYPE, renderOgImage} from '@/lib/og-image';

export const runtime = 'edge';
export const alt = 'Certificates — Josue Vargas';
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
    title: isEn ? 'Certificates' : 'Certificados',
    subtitle: isEn
      ? 'Professional certifications — Web, Mobile, Cloud, Databases'
      : 'Certificaciones profesionales — Web, Móvil, Cloud, Bases de datos',
  });
}
