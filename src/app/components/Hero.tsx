import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import Link from 'next/link';

export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Protect your home with',
      highlight: 'America’s best roofing service',
      subtitle: 'Get expert guidance and access limited-time offers for new homeowners.',
      cta: 'Get a Free Quote',
    },
    es: {
      title: 'Protege tu hogar con',
      highlight: 'el mejor servicio de techado en EE.UU.',
      subtitle: 'Recibe asesoría experta y ofertas exclusivas para nuevos propietarios.',
      cta: 'Solicita una Cotización',
    },
  };

  const t = content[language];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white flex items-center justify-center px-6"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        webkit-playsinline="true"
        x-webkit-airplay="allow"
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0 pointer-events-none"
        src="/roofing.mp4"
        onLoadedData={(e) => {
          const video = e.target as HTMLVideoElement;
          video.play().catch(() => {
            console.log('Hero video autoplay prevented, will try on user interaction');
          });
        }}
        onCanPlay={(e) => {
          const video = e.target as HTMLVideoElement;
          video.play().catch(() => {});
        }}
      />
      <div className="absolute inset-0 bg-slate-900/50 z-0" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          {t.title}{' '}
          <span className="text-yellow-400">{t.highlight}</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-gray-300">{t.subtitle}</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/quote#quote-wizard"
            className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3 font-semibold rounded-xl shadow-lg hover:shadow-xl transition inline-block"
          >
            {t.cta}
          </Link>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
