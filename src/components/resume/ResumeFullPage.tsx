'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft, Download } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { experiences, education } from '@/data/experience';
import { TimelineItem } from './TimelineItem';

function formatPeriod(start: string, end: string | null, presentLabel: string): string {
  const fmt = (d: string) => (d.length > 4 ? d.slice(0, 7) : d);
  return `${fmt(start)} - ${end ? fmt(end) : presentLabel}`;
}

export function ResumeFullPage() {
  const t = useTranslations('resume');

  return (
    <main className="pt-24 pb-20 px-6 lg:px-52">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Link
          href="/#resume"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          {t('title')}
        </Link>
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
              {t('title')}
            </h1>
            <p className="text-4xl font-bold font-heading uppercase tracking-wider text-gradient">
              {t('subtitle')}
            </p>
          </div>
          {/* <a
            href="/cv/cv-es.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider bg-foreground text-background px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            {t('downloadCV')}
          </a> */}
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold font-heading mb-8">{t('experience')}</h2>
        <div className="max-w-2xl">
          {experiences.map((exp) => (
            <TimelineItem
              key={exp.id}
              title={t(`experiences.${exp.id}.position`)}
              subtitle={t(`experiences.${exp.id}.company`)}
              period={formatPeriod(exp.period.start, exp.period.end, t('present'))}
              description={t(`experiences.${exp.id}.description`)}
              tags={exp.techStack}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold font-heading mb-8">{t('education')}</h2>
        <div className="max-w-2xl">
          {education.map((edu) => (
            <TimelineItem
              key={edu.id}
              title={t(`educations.${edu.id}.degree`)}
              subtitle={t(`educations.${edu.id}.institution`)}
              period=""
              description={t.has(`educations.${edu.id}.description`) ? t(`educations.${edu.id}.description`) : undefined}
            />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
