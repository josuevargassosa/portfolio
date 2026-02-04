'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import {Link} from '@/i18n/routing';
import {experiences} from '@/data/experience';
import {TimelineItem} from './TimelineItem';

function formatPeriod(start: string, end: string | null, presentLabel: string): string {
  const fmt = (d: string) => d.length > 4 ? d.slice(0, 7) : d;
  return `${fmt(start)} - ${end ? fmt(end) : presentLabel}`;
}

export function ResumePreview() {
  const t = useTranslations('resume');
  const latest = experiences.slice(0, 2);

  return (
    <section id="resume" className="py-20 px-6 lg:px-52">
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.6}}
        className="mb-12"
      >
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
          {t('title')}
        </h2>
        <p className="text-4xl font-bold font-heading uppercase tracking-wider">
          {t('experience')}
        </p>
      </motion.div>

      <div className="max-w-2xl">
        {latest.map((exp) => (
          <TimelineItem
            key={exp.id}
            title={exp.position}
            subtitle={exp.company}
            period={formatPeriod(exp.period.start, exp.period.end, t('present'))}
            description={exp.description}
            tags={exp.techStack}
          />
        ))}
      </div>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="mt-10 text-center"
      >
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all"
        >
          {t('viewAll')}
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
