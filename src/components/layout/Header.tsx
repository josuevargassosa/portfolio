'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from '../shared/LanguageSwitcher';
import { ThemeToggle } from '../shared/ThemeToggle';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('nav');

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/#skills', label: t('skills') },
    { href: '/#projects', label: t('projects') },
    { href: '/#resume', label: t('resume') },
    { href: '/#certificates', label: t('certificates') },
    { href: '/#contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="mx-auto px-6 lg:px-52 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-heading">
            Josue Vargas
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group text-sm font-medium transition-colors hover:text-primary"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
