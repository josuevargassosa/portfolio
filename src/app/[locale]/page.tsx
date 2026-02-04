import {useTranslations} from 'next-intl';

export default function Home() {
  const t = useTranslations('hero');

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold font-heading mb-4">
          {t('name')}
        </h1>
        <h2 className="text-3xl mb-6">{t('title')}</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('description')}
        </p>
        <div className="mt-8 text-sm text-muted-foreground">
          <p>✅ Next.js 14 configurado</p>
          <p>✅ TypeScript habilitado</p>
          <p>✅ Tailwind CSS funcionando</p>
          <p>✅ next-intl (ES/EN) configurado</p>
          <p>✅ Tema oscuro/claro listo</p>
        </div>
      </div>
    </main>
  );
}
