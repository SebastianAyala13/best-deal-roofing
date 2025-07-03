'use client';

import { useEffect } from 'react';

export default function MobileVideoHandler() {
  useEffect(() => {
    let hasInteracted = false;

    const isMobile = () => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    };

    const playAllVideos = () => {
      if (hasInteracted) return;
      hasInteracted = true;

      const videos = document.querySelectorAll('video');
      videos.forEach((video) => {
        // Configurar atributos para móvil
        video.setAttribute('webkit-playsinline', 'true');
        video.setAttribute('playsinline', 'true');
        video.muted = true;

        if (video.paused) {
          video.play().catch(() => {
            // Silenciar errores de autoplay
          });
        }
      });
    };

    const handleUserInteraction = () => {
      playAllVideos();
    };

    // Eventos para activar reproducción
    const events = ['touchstart', 'touchend', 'click', 'scroll'];
    
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true, passive: true });
    });

    // Intentar reproducir después de cargar
    const timer = setTimeout(() => {
      if (isMobile()) {
        playAllVideos();
      }
    }, 2000);

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
      clearTimeout(timer);
    };
  }, []);

  return null; // Este componente no renderiza nada
} 