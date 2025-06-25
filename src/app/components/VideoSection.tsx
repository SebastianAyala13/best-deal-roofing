'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function VideoSection() {
  const { language } = useLanguage();

  return (
    <section id="video" className="bg-black py-20 px-6 text-center text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          {language === 'en' ? 'Look how we work' : 'Mira cómo trabajamos'}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-slate-700"
        >
          <video
            className="w-full h-full object-cover"
            src="/roofing.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls
            aria-label={language === 'en' ? 'Roofing project video' : 'Video de trabajo de techado'}
          >
            {language === 'en'
              ? 'Your browser does not support the video tag.'
              : 'Tu navegador no soporta la etiqueta de video.'}
          </video>
        </motion.div>
      </div>
    </section>
  );
}
