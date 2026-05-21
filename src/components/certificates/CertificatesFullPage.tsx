'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { certificates } from '@/data/certificates';
import { CertificateCard } from './CertificateCard';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function CertificatesFullPage() {
  const t = useTranslations('certificates');

  return (
    <main className="pt-24 pb-20 px-6 lg:px-52">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <Link
          href="/#certificates"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          {t('title')}
        </Link>
        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
          {t('title')}
        </p>
        <h1 className="text-4xl font-bold font-heading uppercase tracking-wider text-gradient">
          {t('subtitle')}
        </h1>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid md:grid-cols-2 gap-4"
      >
        {certificates.map((cert) => (
          <motion.div key={cert.id} variants={item}>
            <CertificateCard certificate={cert} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
