'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { skills, skillCategories } from '@/data/skills';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export function SkillsGrid() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-20 px-6 lg:px-52 scroll-mt-20">
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
        <p className="text-4xl font-bold font-heading uppercase tracking-wider text-gradient">
          {t('subtitle')}
        </p>
      </motion.div>

      <div className="space-y-10">
        {skillCategories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category.key);
          if (!categorySkills.length) return null;

          return (
            <div key={category.key}>
              <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">
                {category.label}
              </h3>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {categorySkills.map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={item}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2.5 bg-secondary/80 border border-border/30 rounded-lg px-4 py-2.5 hover:bg-secondary hover:border-border/60 transition-colors cursor-default"
                  >
                    <div className="relative w-5 h-5 shrink-0">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        fill
                        sizes="20px"
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
