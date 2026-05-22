'use client';

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useTranslations} from 'next-intl';
import {Send, Loader2, CheckCircle, AlertCircle} from 'lucide-react';
import {contactSchema, type ContactFormData} from '@/lib/schemas/contact';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<Status>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          {t('name')}
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-2.5 bg-secondary rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
        {errors.name && (
          <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          {t('email')}
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-2.5 bg-secondary rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          {t('message')}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message')}
          className="w-full px-4 py-2.5 bg-secondary rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow resize-none"
        />
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Honeypot — invisible to humans, irresistible to bots. */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
          overflow: 'hidden',
        }}
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register('website')}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === 'loading' ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          <Send size={16} />
        )}
        {t('send')}
      </button>

      {status === 'success' && (
        <p className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
          <CheckCircle size={16} />
          {t('success')}
        </p>
      )}

      {status === 'error' && (
        <p className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle size={16} />
          {t('error')}
        </p>
      )}
    </form>
  );
}
