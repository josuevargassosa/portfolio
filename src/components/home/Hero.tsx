'use client';

import {useEffect, useState, useCallback} from 'react';
import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export function Hero() {
  const t = useTranslations('hero');
  const [titleText, setTitleText] = useState('');
  const fullTitle = t('title');

  const runTypewriter = useCallback(() => {
    let index = 0;
    let isDeleting = false;

    const tick = () => {
      if (!isDeleting) {
        setTitleText(fullTitle.substring(0, index + 1));
        index++;
        if (index >= fullTitle.length) {
          isDeleting = true;
          setTimeout(tick, 2000);
          return;
        }
      } else {
        setTitleText(fullTitle.substring(0, index - 1));
        index--;
        if (index <= 0) {
          isDeleting = false;
          setTimeout(tick, 500);
          return;
        }
      }
      setTimeout(tick, isDeleting ? 80 : 150);
    };

    tick();
  }, [fullTitle]);

  useEffect(() => {
    runTypewriter();
  }, [runTypewriter]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6 lg:px-52">
      <motion.div
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease: 'easeOut'}}
        className="max-w-4xl"
      >
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 font-heading min-h-[1.2em]">
          {titleText}
          <span className="inline-block w-[3px] h-[1em] bg-current ml-1 align-middle animate-typewriter" />
        </h1>
        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.5, duration: 0.6}}
          className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          {t('description')}
        </motion.p>
      </motion.div>
    </section>
  );
}
