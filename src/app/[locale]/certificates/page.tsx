import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CertificatesFullPage } from '@/components/certificates/CertificatesFullPage';

export const metadata: Metadata = {
  title: 'Certificados',
  description:
    'Certificaciones profesionales en desarrollo web, móvil y bases de datos.',
  openGraph: {
    title: 'Certificados | Josue Vargas',
    description: 'Certificaciones profesionales de Josue Vargas.',
  },
};

export default function CertificatesPage() {
  return (
    <>
      <Header />
      <CertificatesFullPage />
      <Footer />
    </>
  );
}
