import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ResumeFullPage } from '@/components/resume/ResumeFullPage';

export const metadata: Metadata = {
  title: 'Currículum',
  description:
    'Experiencia profesional y educación de Josue Vargas, Full Stack Developer.',
  openGraph: {
    title: 'Currículum | Josue Vargas',
    description: 'Experiencia profesional y educación de Josue Vargas.',
  },
};

export default function ResumePage() {
  return (
    <>
      <Header />
      <ResumeFullPage />
      <Footer />
    </>
  );
}
