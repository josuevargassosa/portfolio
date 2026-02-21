'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {ExternalLink} from 'lucide-react';
import type {Project} from '@/data/projects';

export function ProjectCard({project}: {project: Project}) {
  const t = useTranslations('projects');

  return (
    <motion.article
      whileHover={{y: -6}}
      className="group bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-sm">
        {project.thumbnail.includes('placeholder') ? (
          <span className="uppercase tracking-wider">{project.title}</span>
        ) : (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-5">
        {project.featured && (
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
            {t('featured')}
          </span>
        )}
        <h3 className="text-lg font-bold font-heading mt-1 mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-background rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
            >
              <ExternalLink size={14} />
              {t('viewProject')}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
