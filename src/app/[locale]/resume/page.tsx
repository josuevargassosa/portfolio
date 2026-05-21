import type {Metadata} from 'next';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {ResumeFullPage} from '@/components/resume/ResumeFullPage';
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
    title: isEn ? 'Resume' : 'Currículum',
    description: isEn
      ? 'Resume of Josue Vargas — Senior Software Engineer with 6+ years building production systems in Angular, NestJS, .NET, React, Next.js and Flutter. Clean architecture, CI/CD, Azure.'
      : 'Currículum de Josue Vargas — Senior Software Engineer con +6 años construyendo sistemas en Angular, NestJS, .NET, React, Next.js y Flutter. Arquitectura limpia, CI/CD, Azure.',
    alternates: {
      canonical: `/${locale}/resume`,
      languages: {
        'es-ES': '/es/resume',
        'en-US': '/en/resume',
        'x-default': '/es/resume',
      },
    },
    openGraph: {
      title: isEn ? 'Resume | Josue Vargas' : 'Currículum | Josue Vargas',
      description: isEn
        ? 'Professional experience, education and skills.'
        : 'Experiencia profesional, educación y habilidades.',
      url: `${SITE_URL}/${locale}/resume`,
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Resume | Josue Vargas' : 'Currículum | Josue Vargas',
    },
  };
}

export default function ResumePage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          {name: 'Home', url: SITE_URL},
          {name: 'Resume', url: `${SITE_URL}/resume`},
        ]}
      />
      <Header />
      <ResumeFullPage />
      <Footer />
    </>
  );
}
