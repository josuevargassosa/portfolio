import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ThemeProvider} from 'next-themes';
import {Inter, Poppins} from 'next/font/google';
import type { Metadata } from 'next';
import {JsonLd} from '@/components/seo/JsonLd';
import {Analytics} from '@/components/shared/Analytics';
import {WhatsAppButton} from '@/components/shared/WhatsAppButton';
import {CodeBackground} from '@/components/home/CodeBackground';
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
    default: 'Josue Vargas | Senior Software Engineer',
    template: '%s | Josue Vargas'
  },
  description: 'Senior Software Engineer con +6 años de experiencia en Angular, NestJS, .NET, React y Flutter. Especializado en arquitectura limpia, CI/CD y productos digitales escalables.',
  keywords: [
    'Senior Software Engineer',
    'Full Stack Developer',
    'Angular',
    'NestJS',
    '.NET',
    'React',
    'Next.js',
    'Flutter',
    'TypeScript',
    'Node.js',
    'SQL Server',
    'Azure',
    'Clean Architecture',
    'Josue Vargas',
    'Ecuador',
    'Guayaquil',
  ],
  authors: [{ name: 'Josue Vargas', url: 'https://josuevargassosa.com' }],
  creator: 'Josue Vargas',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://josuevargassosa.com',
    title: 'Josue Vargas | Senior Software Engineer',
    description: 'Senior Software Engineer · Angular, NestJS, .NET, React, Flutter · +6 años construyendo productos digitales escalables.',
    siteName: 'Josue Vargas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josue Vargas | Senior Software Engineer',
    description: 'Senior Software Engineer · Angular, NestJS, .NET, React, Flutter · +6 años construyendo productos digitales escalables.',
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
            <CodeBackground />
            {children}
            <WhatsAppButton />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
