'use client';

import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';
import {Award, ExternalLink} from 'lucide-react';
import type {Certificate} from '@/data/certificates';

export function CertificateCard({certificate}: {certificate: Certificate}) {
  const t = useTranslations('certificates');

  return (
    <motion.div
      whileHover={{y: -4}}
      className="flex items-start gap-4 bg-secondary rounded-xl p-5 shadow-lg hover:shadow-2xl transition-shadow"
    >
      <div className="shrink-0 w-10 h-10 rounded-lg bg-background flex items-center justify-center">
        <Award size={20} className="text-muted-foreground" />
      </div>

      <div className="min-w-0">
        <h3 className="font-bold text-sm leading-tight">{certificate.title}</h3>
        <p className="text-xs text-muted-foreground mt-1">
          {certificate.issuer} &middot; {certificate.date}
        </p>

        {certificate.credentialUrl && certificate.credentialUrl !== '#' && (
          <a
            href={certificate.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium mt-2 hover:underline"
          >
            <ExternalLink size={12} />
            {t('viewCredential')}
          </a>
        )}
      </div>
    </motion.div>
  );
}
