import type { Metadata } from 'next';
import AppShell from '@/components/layout/AppShell';
import './globals.css';

export const metadata: Metadata = {
  title: 'الإعجاز العلمي | Scientific Miracles in the Quran',
  description:
    'The definitive interactive encyclopedia for Scientific Miracles in the Quran, proofs of the Creator, and the authenticity of Prophet Muhammad ﷺ. Based on the works of Dr. Haitham Talaat.',
  keywords: [
    'الإعجاز العلمي',
    'القرآن',
    'معجزات',
    'Scientific Miracles',
    'Quran',
    'Dr. Haitham Talaat',
    'هيثم طلعت',
    'بصائر',
    'رسول الأميين',
    'علم الكتاب',
  ],
  openGraph: {
    title: 'الإعجاز العلمي | Scientific Miracles in the Quran',
    description: 'The definitive interactive encyclopedia of Scientific Miracles in the Quran.',
    type: 'website',
    locale: 'ar_SA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="bg-vanta text-text-primary font-cairo noise-overlay antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
