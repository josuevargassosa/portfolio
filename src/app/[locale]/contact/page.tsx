import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {ContactForm} from '@/components/contact/ContactForm';
import {ContactInfo} from '@/components/contact/ContactInfo';
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
    title: isEn ? 'Contact' : 'Contacto',
    description: isEn
      ? 'Contact Josue Vargas — Senior Software Engineer available for web and mobile projects in Angular, NestJS, .NET, React, Next.js and Flutter. Based in Guayaquil, Ecuador.'
      : 'Contacta a Josue Vargas — Senior Software Engineer disponible para proyectos web y móviles en Angular, NestJS, .NET, React, Next.js y Flutter. Desde Guayaquil, Ecuador.',
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        'es-ES': '/es/contact',
        'en-US': '/en/contact',
        'x-default': '/es/contact',
      },
    },
    openGraph: {
      title: isEn ? 'Contact | Josue Vargas' : 'Contacto | Josue Vargas',
      description: isEn
        ? 'Available for web and mobile development projects.'
        : 'Disponible para proyectos de desarrollo web y móvil.',
      url: `${SITE_URL}/${locale}/contact`,
      type: 'profile',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn ? 'Contact | Josue Vargas' : 'Contacto | Josue Vargas',
    },
  };
}

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          {name: 'Home', url: SITE_URL},
          {name: 'Contact', url: `${SITE_URL}/contact`},
        ]}
      />
      <Header />
      <main className="pt-24 pb-20 px-6 lg:px-52">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            {t('title')}
          </p>
          <h1 className="text-4xl font-bold font-heading uppercase tracking-wider text-gradient">
            {t('subtitle')}
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
      <Footer />
    </>
  );
}
