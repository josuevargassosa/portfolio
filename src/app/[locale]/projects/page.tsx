import type {Metadata} from 'next';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {ProjectsFullPage} from '@/components/projects/ProjectsFullPage';
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
    title: isEn ? 'Projects' : 'Proyectos',
    description: isEn
      ? 'Portfolio of web and mobile projects by Josue Vargas — Angular, React, Next.js, NestJS, .NET, Flutter and more. Production-grade software built with clean architecture.'
      : 'Portafolio de proyectos web y móviles de Josue Vargas — Angular, React, Next.js, NestJS, .NET, Flutter y más. Software de producción construido con arquitectura limpia.',
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        'es-ES': '/es/projects',
        'en-US': '/en/projects',
        'x-default': '/es/projects',
      },
    },
    openGraph: {
      title: isEn ? 'Projects | Josue Vargas' : 'Proyectos | Josue Vargas',
      description: isEn
        ? 'Web and mobile development projects portfolio.'
        : 'Portafolio de proyectos de desarrollo web y móvil.',
      url: `${SITE_URL}/${locale}/projects`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Projects | Josue Vargas' : 'Proyectos | Josue Vargas',
    },
  };
}

export default function ProjectsPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          {name: 'Home', url: SITE_URL},
          {name: 'Projects', url: `${SITE_URL}/projects`},
        ]}
      />
      <Header />
      <ProjectsFullPage />
      <Footer />
    </>
  );
}
