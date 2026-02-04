'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import Image from 'next/image';
import {skills} from '@/data/skills';

const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.08},
  },
};

const item = {
  hidden: {opacity: 0, y: 20},
  show: {opacity: 1, y: 0},
};

export function SkillsGrid() {
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-20 px-6 lg:px-52">
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
          {t('subtitle')}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once: true}}
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={item}
            whileHover={{scale: 1.08, y: -4}}
            className="flex items-center gap-4 bg-secondary rounded-xl p-5 shadow-lg hover:shadow-2xl transition-shadow cursor-default"
          >
            <div className="relative w-14 h-14 shrink-0">
              <Image
                src={skill.logo}
                alt={skill.name}
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
            <span className="font-bold text-sm uppercase tracking-wider">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
