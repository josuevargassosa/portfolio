'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { Briefcase, FolderGit2, Award, Cpu } from 'lucide-react';

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, start]);

  return count;
}

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
  index: number;
  isVisible: boolean;
}

function StatCard({ value, suffix, label, icon: Icon, index, isVisible }: StatCardProps) {
  const count = useCountUp(value, 1800, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
      className="group relative flex flex-col items-center gap-3 px-6 py-8 rounded-2xl border border-border/40 bg-background/40 backdrop-blur-md transition-all duration-300 hover:border-border/80 hover:bg-background/60 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
    >
      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-foreground/5 text-foreground/60 transition-colors group-hover:bg-foreground/10 group-hover:text-foreground">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <div className="text-center">
        <p className="text-3xl sm:text-4xl font-bold font-heading tabular-nums tracking-tight" aria-label={`${value}${suffix}`}>
          {count}
          <span className="text-foreground/40">{suffix}</span>
        </p>
        <p className="text-sm text-muted-foreground mt-1 font-medium">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const t = useTranslations('stats');

  const stats = [
    { value: 5, suffix: '+', label: t('experience'), icon: Briefcase },
    { value: 6, suffix: '+', label: t('projects'), icon: FolderGit2 },
    { value: 12, suffix: '+', label: t('certificates'), icon: Award },
    { value: 18, suffix: '+', label: t('technologies'), icon: Cpu },
  ];

  return (
    <section
      ref={ref}
      aria-label={t('ariaLabel')}
      className="px-6 lg:px-52 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
          {t('title')}
        </h2>
        <p className="text-4xl font-bold font-heading uppercase tracking-wider">
          {t('subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, i) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            icon={stat.icon}
            index={i}
            isVisible={isInView}
          />
        ))}
      </div>
    </section>
  );
}
