'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {ContactForm} from './ContactForm';
import {ContactInfo} from './ContactInfo';

export function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="py-20 px-6 lg:px-52">
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

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{opacity: 0, x: -20}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5}}
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{opacity: 0, x: 20}}
          whileInView={{opacity: 1, x: 0}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.2}}
        >
          <ContactInfo />
        </motion.div>
      </div>
    </section>
  );
}
