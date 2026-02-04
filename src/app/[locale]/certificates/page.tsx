import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {certificates} from '@/data/certificates';
import {CertificateCard} from '@/components/certificates/CertificateCard';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Certificados',
  description: 'Certificaciones profesionales en desarrollo web, móvil y bases de datos.',
  openGraph: {
    title: 'Certificados | Josue Vargas',
    description: 'Certificaciones profesionales de Josue Vargas.',
  },
};

export default function CertificatesPage() {
  const t = useTranslations('certificates');

  return (
    <>
      <Header />
      <main className="pt-24 pb-20 px-6 lg:px-52">
        <div className="mb-12">
          <h1 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            {t('title')}
          </h1>
          <p className="text-4xl font-bold font-heading uppercase tracking-wider">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
