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
    <div className="flex items-center gap-0 text-sm font-medium">
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 border-r border-current transition-opacity ${
          locale === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-80'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale('es')}
        className={`px-2 py-1 transition-opacity ${
          locale === 'es' ? 'opacity-100' : 'opacity-50 hover:opacity-80'
        }`}
      >
        ES
      </button>
    </div>
  );
}
