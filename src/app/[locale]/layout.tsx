import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ThemeProvider} from 'next-themes';
import {Inter, Poppins} from 'next/font/google';
import type { Metadata } from 'next';
import {JsonLd} from '@/components/seo/JsonLd';
import {Analytics} from '@/components/shared/Analytics';
import {WhatsAppButton} from '@/components/shared/WhatsAppButton';
import '../globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://josuevargassosa.com'),
  icons: {
    icon: '/images/josueLogo.png',
    apple: '/images/josueLogo.png',
  },
  title: {
    default: 'Josue Vargas - Full Stack Developer',
    template: '%s | Josue Vargas'
  },
  description: 'Full Stack Developer especializado en Angular, React, Next.js, Node.js y tecnologías modernas. Portfolio profesional.',
  keywords: [
    'Full Stack Developer',
    'Angular',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Josue Vargas'
  ],
  authors: [{ name: 'Josue Vargas', url: 'https://josuevargassosa.com' }],
  creator: 'Josue Vargas',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://josuevargassosa.com',
    title: 'Josue Vargas - Full Stack Developer',
    description: 'Full Stack Developer Portfolio',
    siteName: 'Josue Vargas Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Josue Vargas - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josue Vargas - Full Stack Developer',
    description: 'Full Stack Developer Portfolio',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextIntlClientProvider messages={messages}>
            {children}
            <WhatsAppButton />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
