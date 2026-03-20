'use client';

import { useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, ArrowUpRight } from 'lucide-react';
import Cal, { getCalApi } from '@calcom/embed-react';

function replaceCalLoader(calModal: Element, isDark: boolean) {
  const shadow = calModal.shadowRoot;
  if (!shadow) return;

  // Inject styles: hide native loader + add custom logo loader (theme-aware)
  const existing = shadow.querySelector('#custom-cal-loader-styles');
  if (existing) existing.remove();

  const style = document.createElement('style');
  style.id = 'custom-cal-loader-styles';
  style.textContent = `
    .loader, .modal-loader {
      display: none !important;
    }
    .custom-logo-loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999999;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
    .custom-logo-loader img {
      width: 64px;
      height: 64px;
      object-fit: contain;
      ${isDark ? 'filter: invert(1);' : ''}
      animation: logoPulse 2s ease-in-out infinite;
    }
    .custom-logo-loader .bar-track {
      width: 48px;
      height: 2px;
      border-radius: 9999px;
      background: ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'};
      overflow: hidden;
    }
    .custom-logo-loader .bar-fill {
      width: 100%;
      height: 100%;
      border-radius: 9999px;
      background: ${isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'};
      animation: loadingBar 1.2s ease-in-out infinite;
    }
    @keyframes logoPulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.95); }
    }
    @keyframes loadingBar {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(0); }
      100% { transform: translateX(100%); }
    }
  `;
  shadow.appendChild(style);

  // Always insert logo as a branding splash while Cal.com modal opens
  const modalBox = shadow.querySelector('.modal-box') || shadow.querySelector('.body');
  if (modalBox && !shadow.querySelector('.custom-logo-loader')) {
    const loader = document.createElement('div');
    loader.className = 'custom-logo-loader';
    loader.innerHTML = `
      <img src="/images/skills/josueLogo.png" alt="Loading" />
      <div class="bar-track"><div class="bar-fill"></div></div>
    `;
    modalBox.appendChild(loader);

    // Fade out and remove after brief display
    setTimeout(() => {
      loader.style.transition = 'opacity 0.3s ease-out';
      loader.style.opacity = '0';
      setTimeout(() => loader.remove(), 300);
    }, 1200);
  }

  // Hide native loader on re-renders
  const innerObserver = new MutationObserver(() => {
    const nativeLoader = shadow.querySelector('.loader, .modal-loader');
    if (nativeLoader instanceof HTMLElement) {
      nativeLoader.style.display = 'none';
    }
  });
  innerObserver.observe(shadow, { childList: true, subtree: true });
}

export function ContactSection() {
  const t = useTranslations('contact');
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const syncCalTheme = useCallback(async () => {
    const cal = await getCalApi();
    cal('ui', {
      theme: isDark ? 'dark' : 'light',
      cssVarsPerTheme: {
        dark: { 'cal-brand': '#ffffff' },
        light: { 'cal-brand': '#0a0a0a' },
      },
      hideEventTypeDetails: false,
    });
  }, [isDark]);

  // Sync theme on mount and when theme changes
  // Reset Cal.com's cached iframe so it recreates with the new theme
  useEffect(() => {
    syncCalTheme();

    // Reset Cal.com internal instance to force new iframe with correct theme
    const calGlobal = (window as unknown as Record<string, unknown>).Cal as Record<string, unknown> | undefined;
    if (calGlobal?.instance) {
      const inst = calGlobal.instance as Record<string, unknown>;
      if (inst.iframe && inst.iframe instanceof HTMLElement) {
        inst.iframe.remove();
        inst.iframe = null;
      }
      if (inst.modalBox && inst.modalBox instanceof HTMLElement) {
        inst.modalBox.remove();
        inst.modalBox = null;
      }
      inst.iframeReady = false;
      inst.calLink = null;
    }
    // Clean up any orphaned elements
    document.querySelectorAll('cal-modal-box, iframe.cal-embed').forEach((el) => el.remove());
  }, [syncCalTheme, isDark]);

  useEffect(() => {
    // Watch for ANY cal-modal-box appearing to hide native loader
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node instanceof HTMLElement) {
            if (node.tagName === 'CAL-MODAL-BOX') {
              replaceCalLoader(node, isDark);
            }
            node.querySelectorAll?.('cal-modal-box')?.forEach((el) =>
              replaceCalLoader(el, isDark)
            );
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [isDark]);

  const bookings = [
    {
      title: t('consultation.title'),
      description: t('consultation.description'),
      duration: t('consultation.duration'),
      calLink: 'josuevargassosa/consultation',
      icon: Calendar,
    },
    {
      title: t('opportunity.title'),
      description: t('opportunity.description'),
      duration: t('opportunity.duration'),
      calLink: 'josuevargassosa/opportunity',
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
          <motion.button
            key={booking.calLink}
            data-cal-link={booking.calLink}
            data-cal-config='{"layout":"month_view"}'
            onClick={() => syncCalTheme()}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-border/40 bg-secondary/80 backdrop-blur-md transition-all duration-300 hover:border-border/80 hover:bg-secondary hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 text-left cursor-pointer"
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
          </motion.button>
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
