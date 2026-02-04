'use client';

import {useEffect} from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Page error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-bold font-heading mb-4">Error</h2>
        <p className="text-muted-foreground mb-6">
          Algo salió mal. Por favor intenta de nuevo.
        </p>
        <button
          onClick={reset}
          className="bg-foreground text-background px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
