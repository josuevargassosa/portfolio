'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Link, usePathname } from '@/i18n/routing';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import { ThemeToggle } from '../shared/ThemeToggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const pathname = usePathname();
  const t = useTranslations('nav');

  // Fix #1: Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fix #1: Active section detection via IntersectionObserver
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname);
      return;
    }

    const sectionIds = ['contact', 'certificates', 'resume', 'projects', 'skills'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`/#${id}`);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    // Default to home when at top
    const onScroll = () => {
      if (window.scrollY < 100) setActiveSection('/');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Escape key + focus trap for mobile menu
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
        return;
      }

      // Focus trap: keep Tab within mobile menu
      if (e.key === 'Tab') {
        const nav = document.querySelector('nav');
        const focusable = nav?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeMenu]);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/#skills', label: t('skills') },
    { href: '/#projects', label: t('projects') },
    { href: '/#resume', label: t('resume') },
    { href: '/#certificates', label: t('certificates') },
    { href: '/#contact', label: t('contact') },
  ];

  const isActive = (href: string) => activeSection === href;

  // Fix #3: Shared focus-visible classes
  const focusClasses = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background';

  return (
    <header className="fixed top-0 w-full z-50 flex justify-center pointer-events-none">
      {/* Fix #6: aria-label on nav */}
      <nav
        aria-label={t('home') === 'Inicio' ? 'Navegación principal' : 'Main navigation'}
        style={{ borderRadius: isOpen ? '24px' : '9999px' }}
        className={`
          pointer-events-auto
          mt-4 mx-4 px-5 py-2
          border border-border/50
          backdrop-blur-xl
          transition-[background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${isOpen
            ? 'bg-background/85'
            : scrolled
              ? 'bg-background/75 shadow-lg shadow-black/5 dark:shadow-black/20'
              : 'bg-background/50'
          }
        `}
      >
        <div className="flex items-center justify-between lg:justify-start lg:gap-1">
          <Link
            href="/"
            className={`font-bold font-heading px-3 min-h-[44px] flex items-center rounded-full transition-colors hover:bg-foreground/5 ${focusClasses}`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            <span className="lg:hidden text-lg">JV</span>
            <span className="hidden lg:inline text-base">Josue Vargas</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`
                  relative px-3 min-h-[44px] flex items-center text-sm font-medium rounded-full
                  transition-all duration-300
                  ${focusClasses}
                  ${isActive(item.href)
                    ? 'bg-foreground/10 text-primary'
                    : 'hover:bg-foreground/5 hover:text-primary'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}

            <div className="w-px h-5 bg-border/50 mx-2" aria-hidden="true" />

            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full transition-colors hover:bg-foreground/5 ${focusClasses}`}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav with AnimatePresence + reduced-motion support */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
              className="lg:hidden overflow-hidden motion-reduce:!transition-none"
            >
              <div className="mt-2 pb-3 border-t border-border/30 pt-3" role="menu">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    role="menuitem"
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`
                      flex items-center justify-center min-h-[44px] py-3 px-3 text-sm font-medium rounded-xl transition-colors
                      ${focusClasses}
                      ${isActive(item.href)
                        ? 'bg-foreground/10 text-primary'
                        : 'hover:bg-foreground/5'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center justify-center gap-3 mt-4 pt-3 border-t border-border/30">
                  <LanguageSwitcher />
                  <div className="w-px h-5 bg-border/50" aria-hidden="true" />
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
