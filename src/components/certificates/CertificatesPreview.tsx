'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {ArrowRight} from 'lucide-react';
import {Link} from '@/i18n/routing';
import {certificates} from '@/data/certificates';
import {CertificateCard} from './CertificateCard';

const container = {
  hidden: {opacity: 0},
  show: {opacity: 1, transition: {staggerChildren: 0.1}},
};

const item = {
  hidden: {opacity: 0, y: 20},
  show: {opacity: 1, y: 0},
};

export function CertificatesPreview() {
  const t = useTranslations('certificates');
  const preview = certificates.slice(0, 4);

  return (
    <section id="certificates" className="py-20 px-6 lg:px-52">
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
        className="grid md:grid-cols-2 gap-4"
      >
        {preview.map((cert) => (
          <motion.div key={cert.id} variants={item}>
            <CertificateCard certificate={cert} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="mt-10 text-center"
      >
        <Link
          href="/certificates"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all"
        >
          {t('viewAll')}
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}
