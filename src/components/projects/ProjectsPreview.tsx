'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsPreview() {
  const t = useTranslations('projects');
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 lg:px-52 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
          {t('title')}
        </h2>
        <p className="text-4xl font-bold font-heading uppercase tracking-wider">
          {t('subtitle')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all"
        >
          {t('viewAll')}
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
