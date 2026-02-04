import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {projects} from '@/data/projects';
import {ProjectCard} from '@/components/projects/ProjectCard';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Portafolio de proyectos de desarrollo web y móvil. Angular, React, Next.js, Node.js, Flutter y más.',
  openGraph: {
    title: 'Proyectos | Josue Vargas',
    description: 'Portafolio de proyectos de desarrollo web y móvil.',
  },
};

export default function ProjectsPage() {
  const t = useTranslations('projects');

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

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
