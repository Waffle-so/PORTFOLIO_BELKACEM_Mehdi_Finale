import type { Metadata } from 'next';
import './theme.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Belkacem Mehdi — Independent Software Engineer',
  description:
    'Portfolio of Belkacem Mehdi, Independent Software Engineer based in Algeria. Available for freelance projects. Built to work. Designed to fit. Powered by AI.',
  keywords: ['software engineer', 'freelance', 'Algeria', 'portfolio', 'web development'],
  authors: [{ name: 'Belkacem Mehdi' }],
  openGraph: {
    title: 'Belkacem Mehdi — Independent Software Engineer',
    description: 'Available for freelance projects. Based in Algeria.',
    type: 'website',
  },
};

import { LanguageProvider, Language } from '@/context/LanguageContext';

/**
 * Langue par défaut du site ('fr' pour Français, 'en' pour Anglais)
 * Valeur par défaut : 'fr'
 */
export const DEFAULT_LANGUAGE: Language = 'fr';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={DEFAULT_LANGUAGE}>
      <body>
        <LanguageProvider defaultLanguage={DEFAULT_LANGUAGE}>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
