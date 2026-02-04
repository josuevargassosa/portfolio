'use client';

import {motion} from 'framer-motion';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  tags?: string[];
}

export function TimelineItem({title, subtitle, period, description, tags}: TimelineItemProps) {
  return (
    <motion.div
      initial={{opacity: 0, x: -20}}
      whileInView={{opacity: 1, x: 0}}
      viewport={{once: true}}
      transition={{duration: 0.5}}
      className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-foreground" />

      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {period}
      </span>
      <h3 className="text-lg font-bold font-heading mt-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>

      {description && (
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-md font-medium">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
