import {Link} from '@/i18n/routing';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold font-heading mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          La página que buscas no existe.
        </p>
        <Link
          href="/"
          className="bg-foreground text-background px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
