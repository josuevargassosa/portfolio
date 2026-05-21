import type {Metadata} from 'next';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {CertificatesFullPage} from '@/components/certificates/CertificatesFullPage';
import {BreadcrumbsJsonLd} from '@/components/seo/BreadcrumbsJsonLd';

const SITE_URL = 'https://josuevargassosa.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>;
}): Promise<Metadata> {
  const {locale} = await params;
  const isEn = locale === 'en';

  return {
    title: isEn ? 'Certificates' : 'Certificados',
    description: isEn
      ? 'Professional certifications of Josue Vargas in web development, mobile, databases, cloud and modern frameworks — Angular, React, .NET, Azure, SQL Server and more.'
      : 'Certificaciones profesionales de Josue Vargas en desarrollo web, móvil, bases de datos, cloud y frameworks modernos — Angular, React, .NET, Azure, SQL Server y más.',
    alternates: {
      canonical: `/${locale}/certificates`,
      languages: {
        'es-ES': '/es/certificates',
        'en-US': '/en/certificates',
        'x-default': '/es/certificates',
      },
    },
    openGraph: {
      title: isEn ? 'Certificates | Josue Vargas' : 'Certificados | Josue Vargas',
      description: isEn
        ? 'Professional certifications and continued education.'
        : 'Certificaciones profesionales y educación continua.',
      url: `${SITE_URL}/${locale}/certificates`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Certificates | Josue Vargas' : 'Certificados | Josue Vargas',
    },
  };
}

export default function CertificatesPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          {name: 'Home', url: SITE_URL},
          {name: 'Certificates', url: `${SITE_URL}/certificates`},
        ]}
      />
      <Header />
      <CertificatesFullPage />
      <Footer />
    </>
  );
}
