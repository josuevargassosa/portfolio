import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectsFullPage } from '@/components/projects/ProjectsFullPage';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Portafolio de proyectos de desarrollo web y móvil. Angular, React, Next.js, Node.js, Flutter y más.',
  openGraph: {
    title: 'Proyectos | Josue Vargas',
    description: 'Portafolio de proyectos de desarrollo web y móvil.',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <ProjectsFullPage />
      <Footer />
    </>
  );
}
