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
        
        {/* TrustedForm Lead Tracking - Professional Implementation */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              // TrustedForm Lead Tracking
              var tf = document.createElement('script');
              tf.type = 'text/javascript';
              tf.async = true;
              tf.src = (("https:" == document.location.protocol) ? 'https' : 'http') +
                '://api.trustedform.com/trustedform.js?field=trusted_form_cert_id&use_tagged_consent=true&l=' +
                (new Date().getTime() + Math.random());
              var s = document.getElementsByTagName('script')[0]; 
              s.parentNode.insertBefore(tf, s);
              
              // Enhanced tracking for form interactions
              document.addEventListener('DOMContentLoaded', function() {
                // Track form focus events
                var forms = document.querySelectorAll('form');
                forms.forEach(function(form) {
                  var inputs = form.querySelectorAll('input, select, textarea');
                  inputs.forEach(function(input) {
                    input.addEventListener('focus', function() {
                      if (window.TrustedForm) {
                        window.TrustedForm.tag();
                      }
                    });
                  });
                });
                
                // Track form submission attempts
                document.addEventListener('submit', function(e) {
                  if (window.TrustedForm) {
                    window.TrustedForm.tag();
                  }
                });
              });
            })();`,
          }}
        />
        {/* End TrustedForm Script */}

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1538478924006867');
            fbq('track', 'PageView');`,
          }}
        />
        {/* End Meta Pixel Code */}
        
        {/* Removed alternative manual TF implementation to match Premium-bathrooms pattern */}
        
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
        {/* TrustedForm pixel tracking (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img src="https://api.trustedform.com/ns.gif" alt="" style="display:none" />',
          }}
        />
        {/* Meta Pixel (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=1538478924006867&ev=PageView&noscript=1" />',
          }}
        />
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
