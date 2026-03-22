'use client';

import { useRef, type MouseEvent } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

export function ProjectCard({ project }: { project: Project }) {
  const t = useTranslations('projects');
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { stiffness: 300, damping: 20 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const rotateX = useTransform(ySpring, [0, 1], [8, -8]);
  const rotateY = useTransform(xSpring, [0, 1], [-8, 8]);
  const glareX = useTransform(xSpring, [0, 1], [0, 100]);
  const glareY = useTransform(ySpring, [0, 1], [0, 100]);

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: 'preserve-3d',
      }}
      className="group relative bg-secondary rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
    >
      {/* Glare overlay */}
      <motion.div
        style={{
          background: useTransform(
            [glareX, glareY],
            ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.08) 0%, transparent 60%)`
          ),
        }}
        className="absolute inset-0 z-10 pointer-events-none rounded-xl"
      />

      <div className="aspect-video bg-muted flex items-center justify-center text-muted-foreground text-sm">
        {project.thumbnail.includes('placeholder') ? (
          <span className="uppercase tracking-wider">{t(`items.${project.id}.title`)}</span>
        ) : (
          <img
            src={project.thumbnail}
            alt={t(`items.${project.id}.title`)}
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
        <h3 className="text-lg font-bold font-heading mt-1 mb-2">{t(`items.${project.id}.title`)}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {t(`items.${project.id}.description`)}
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
