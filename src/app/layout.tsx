import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Default Metadata
export const metadata: Metadata = {
  title: 'Best Deal Roofing | Roofing Contractors in the US',
  description:
    'Trusted roofing company in the US offering free estimates, expert repair, and full roof replacements. Get the best deal now!',
  keywords: [
    'roofing company USA',
    'roof repair',
    'licensed roofing contractor',
    'roof replacement',
    'roofing services',
    'roofing experts',
    'roof inspection',
    'roof damage insurance',
    'emergency roofing',
    'roofing near me'
  ],
  robots: 'index, follow',
  openGraph: {
    title: 'Best Deal Roofing | Expert Roofing Contractors in the US',
    description:
      'Protect your home with the best roofing service. Free estimates, fast response, licensed and insured.',
    url: 'https://www.bestdealroofing.xyz',
    siteName: 'Best Deal Roofing',
    images: [
      {
        url: 'https://www.bestdealroofing.xyz/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Best Deal Roofing - Free Estimate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Deal Roofing | Top Roofing Company',
    description: 'America’s most trusted roofing service. Get your free quote now!',
    site: '@bestdealroofing',
    creator: '@bestdealroofing',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#FBBF24" />
        <meta name="author" content="Best Deal Roofing Team" />
        <link rel="canonical" href="https://www.bestdealroofing.xyz/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body className="relative bg-white text-gray-900">
        {/* Background Video Global */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover opacity-20 z-[-10]"
          src="/roofing.mp4"
        />

        {/* Darker Overlay for readability */}
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-[-5]" />

        <LanguageProvider>
          <main className="relative z-10">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
