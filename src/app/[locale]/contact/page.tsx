import type {Metadata} from 'next';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {ContactForm} from '@/components/contact/ContactForm';
import {ContactInfo} from '@/components/contact/ContactInfo';
import {useTranslations} from 'next-intl';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contacta a Josue Vargas para proyectos de desarrollo web y móvil.',
  openGraph: {
    title: 'Contacto | Josue Vargas',
    description: 'Contacta a Josue Vargas para proyectos de desarrollo.',
  },
};

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6 lg:px-52">
        <div className="mb-12">
          <h1 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            {t('title')}
          </h1>
          <p className="text-4xl font-bold font-heading uppercase tracking-wider text-gradient">
            {t('subtitle')}
          </p>
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
