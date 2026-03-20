'use client';

import { useEffect, useState, useCallback, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Award, MessageSquare } from 'lucide-react';

/**
 * Parses **bold** markers in a string and returns React nodes.
 */
function renderBold(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-foreground font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

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

  const ctaButtons = [
    {
      label: t('cta.projects'),
      href: '#projects',
      variant: 'primary' as const,
      icon: ArrowRight,
    },
    {
      label: t('cta.resume'),
      href: '#resume',
      variant: 'secondary' as const,
      icon: FileText,
    },
    {
      label: t('cta.certificates'),
      href: '#certificates',
      variant: 'secondary' as const,
      icon: Award,
    },
    {
      label: t('cta.contact'),
      href: '#contact',
      variant: 'primary' as const,
      icon: MessageSquare,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center pt-20 pb-10 px-6 lg:px-52"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl w-full"
      >
        {/* Name label */}
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium"
        >
          {t('name')}
        </motion.p>

        {/* Main title with typewriter */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-5 font-heading min-h-[2.4em] leading-[1.1] text-gradient">
          {titleText}
          <span className="inline-block w-[3px] h-[0.85em] bg-foreground ml-1 align-middle animate-typewriter" />
        </h1>

        {/* Subtitle - value proposition */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl sm:text-2xl lg:text-[1.65rem] text-foreground/80 font-heading font-medium mb-4 leading-snug max-w-2xl"
        >
          {t('subtitle')}
        </motion.p>

        {/* Description with bold keywords */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-10"
        >
          {renderBold(t('description'))}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {ctaButtons.map(({ label, href, variant, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className={`
                inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium
                transition-all duration-200 ease-out
                ${
                  variant === 'primary'
                    ? 'bg-foreground text-background hover:bg-foreground/90 shadow-sm hover:shadow-md'
                    : 'border border-border text-foreground hover:bg-accent hover:border-foreground/20'
                }
              `}
            >
              <Icon size={16} strokeWidth={2} />
              {label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
