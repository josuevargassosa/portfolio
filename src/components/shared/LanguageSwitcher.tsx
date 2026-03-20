'use client';

import {usePathname, useRouter} from '@/i18n/routing';
import {useLocale} from 'next-intl';

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    router.replace(pathname, {locale: newLocale});
  }

  return (
    <div className="flex items-center gap-0 text-sm font-medium" role="group" aria-label="Language switcher">
      <button
        onClick={() => switchLocale('en')}
        aria-label="Switch to English"
        aria-pressed={locale === 'en'}
        className={`px-2.5 min-h-[44px] flex items-center border-r border-border/50 transition-opacity rounded-l-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background ${
          locale === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-80'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('es')}
        aria-label="Cambiar a Español"
        aria-pressed={locale === 'es'}
        className={`px-2.5 min-h-[44px] flex items-center transition-opacity rounded-r-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background ${
          locale === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-80'
        }`}
      >
        ES
      </button>
    </div>
  );
}
