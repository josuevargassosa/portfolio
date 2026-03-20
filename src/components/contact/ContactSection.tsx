'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const t = useTranslations('contact');

  const bookings = [
    {
      title: t('consultation.title'),
      description: t('consultation.description'),
      duration: t('consultation.duration'),
      url: 'https://cal.com/josuevargassosa/consultation',
      icon: Calendar,
    },
    {
      title: t('opportunity.title'),
      description: t('opportunity.description'),
      duration: t('opportunity.duration'),
      url: 'https://cal.com/josuevargassosa/opportunity',
      icon: Briefcase,
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-52 scroll-mt-20">
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

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
        {bookings.map((booking, i) => (
          <motion.a
            key={booking.url}
            href={booking.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-border/40 bg-secondary/80 backdrop-blur-md transition-all duration-300 hover:border-border/80 hover:bg-secondary hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-foreground/5 text-foreground/60 transition-colors group-hover:bg-foreground/10 group-hover:text-foreground">
                <booking.icon size={22} strokeWidth={1.8} />
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold font-heading mb-1">{booking.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {booking.description}
              </p>
            </div>

            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {booking.duration}
            </span>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-8 max-w-3xl"
      >
        <p className="text-sm text-muted-foreground">
          {t('email')}{' '}
          <a href="mailto:josuevargass@hotmail.com" className="underline hover:text-foreground transition-colors">
            josuevargass@hotmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}
