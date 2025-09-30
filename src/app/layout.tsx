import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import BannerConsent from './components/BannerConsent';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

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
    'roofing near me',
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WS6NVJBF');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        {/* TrustedForm Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              console.log('🔧 Loading TrustedForm script...');
              var tf = document.createElement('script');
              tf.type = 'text/javascript';
              tf.async = true;
              tf.src = 'https://api.trustedform.com/trustedform.js?field=trusted_form_cert_id&l=' + 
                       new Date().getTime() + Math.random();
              tf.onload = function() {
                console.log('✅ TrustedForm script loaded successfully');
                // Verificar si TrustedForm se inicializó correctamente
                setTimeout(function() {
                  console.log('🔧 TrustedForm object after load:', typeof window.TrustedForm);
                  if (window.TrustedForm) {
                    console.log('🔧 TrustedForm methods:', Object.keys(window.TrustedForm));
                  }
                }, 1000);
              };
              tf.onerror = function() {
                console.error('❌ TrustedForm script failed to load');
              };
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(tf, s);
            })();`,
          }}
        />
        {/* End TrustedForm Script */}
        
        {/* TrustedForm Initialization */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              // Función para inicializar TrustedForm cuando esté disponible
              function initTrustedForm() {
                if (window.TrustedForm && window.TrustedForm.init) {
                  console.log('🔧 Initializing TrustedForm...');
                  try {
                    window.TrustedForm.init();
                    console.log('✅ TrustedForm initialized successfully');
                  } catch (error) {
                    console.error('❌ Error initializing TrustedForm:', error);
                  }
                } else {
                  console.log('🔧 TrustedForm not ready for initialization yet');
                  setTimeout(initTrustedForm, 500);
                }
              }
              
              // Inicializar cuando el DOM esté listo
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initTrustedForm);
              } else {
                initTrustedForm();
              }
            })();`,
          }}
        />
        {/* End TrustedForm Initialization */}
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#14b8a6" />
        <meta name="author" content="TOPTIER BATH PROS Team" />
        <link rel="canonical" href="https://bathroom.homedesignandco.com/" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body className="relative bg-white text-gray-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WS6NVJBF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {/* 🔁 Background Video Global */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="fixed top-0 left-0 w-full h-full object-cover opacity-20 z-[-10]"
          src="/roofing.mp4"
        />

        {/* 🌓 Overlay oscuro para mejorar legibilidad */}
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-[-5]" />

        <LanguageProvider>
          <main className="relative z-10">
            {children}
            {/* ✅ Banner de consentimiento legal TCPA + cookies */}
            <BannerConsent />
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
