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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body className="relative bg-white text-gray-900">
        {/* Background Video Global */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          webkit-playsinline="true"
          x-webkit-airplay="allow"
          className="fixed top-0 left-0 w-full h-full object-cover opacity-20 z-[-10]"
          src="/roofing.mp4"
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(() => {
              // Fallback silencioso si autoplay falla
              console.log('Autoplay prevented, will try on user interaction');
            });
          }}
          onCanPlay={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(() => {});
          }}
        />

        {/* Darker Overlay for readability */}
        <div className="fixed top-0 left-0 w-full h-full bg-black/20 z-[-5]" />

        <LanguageProvider>
          <main className="relative z-10">{children}</main>
        </LanguageProvider>
        
        {/* Script para manejar reproducción de videos en móvil */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                let hasInteracted = false;
                let retryCount = 0;
                const maxRetries = 3;
                
                function isMobile() {
                  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                }
                
                function playAllVideos() {
                  if (hasInteracted && retryCount >= maxRetries) return;
                  
                  const videos = document.querySelectorAll('video');
                  let playedCount = 0;
                  
                  videos.forEach((video, index) => {
                    if (video.paused) {
                      // Asegurar que los atributos estén configurados
                      video.muted = true;
                      video.playsInline = true;
                      
                      video.play()
                        .then(() => {
                          playedCount++;
                          console.log('Video ' + (index + 1) + ' playing successfully');
                        })
                        .catch(e => {
                          console.log('Video ' + (index + 1) + ' play failed:', e.message);
                        });
                    } else {
                      playedCount++;
                    }
                  });
                  
                  if (playedCount > 0) {
                    hasInteracted = true;
                  } else {
                    retryCount++;
                  }
                }
                
                function forceVideoPlayback() {
                  const videos = document.querySelectorAll('video');
                  videos.forEach(video => {
                    // Configurar para móvil
                    video.setAttribute('webkit-playsinline', 'true');
                    video.setAttribute('playsinline', 'true');
                    video.muted = true;
                    
                    // Intentar reproducir
                    if (video.paused) {
                      video.load(); // Recargar video
                      setTimeout(() => {
                        video.play().catch(() => {});
                      }, 100);
                    }
                  });
                }
                
                // Eventos para diferentes tipos de interacción
                const events = isMobile() 
                  ? ['touchstart', 'touchend', 'touchmove', 'click', 'scroll', 'gesturestart']
                  : ['click', 'scroll', 'mousedown', 'keydown'];
                
                events.forEach(event => {
                  document.addEventListener(event, playAllVideos, { once: true, passive: true });
                });
                
                // Intentos adicionales para móviles
                if (isMobile()) {
                  // Intentar cuando la página esté visible
                  document.addEventListener('visibilitychange', () => {
                    if (!document.hidden) {
                      setTimeout(forceVideoPlayback, 500);
                    }
                  });
                  
                  // Intentar en el evento de orientación
                  window.addEventListener('orientationchange', () => {
                    setTimeout(forceVideoPlayback, 1000);
                  });
                }
                
                // Múltiples intentos de reproducción
                window.addEventListener('load', () => {
                  setTimeout(playAllVideos, 1000);
                  setTimeout(playAllVideos, 3000);
                  setTimeout(forceVideoPlayback, 5000);
                });
                
                // Intentar cuando el DOM esté listo
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', playAllVideos);
                } else {
                  setTimeout(playAllVideos, 500);
                }
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
