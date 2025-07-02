'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: 'Carlos M.',
      image: '/experience1.jpg',
      text: {
        en: 'The service was fast and professional. Highly recommended!',
        es: 'El servicio fue rápido y profesional. ¡Muy recomendado!',
      },
    },
    {
      name: 'Emily R.',
      image: '/experience2.jpg',
      text: {
        en: 'They inspected and repaired my roof in no time.',
        es: 'Inspeccionaron y repararon mi techo en muy poco tiempo.',
      },
    },
    {
      name: 'Luis A.',
      image: '/experience3.jpg',
      text: {
        en: 'Great customer service and a lifetime warranty.',
        es: 'Excelente servicio al cliente y garantía de por vida.',
      },
    },
    {
      name: 'Sarah T.',
      image: '/experience4.jpg',
      text: {
        en: 'Super friendly team and my roof looks brand new!',
        es: '¡Equipo muy amable y mi techo parece nuevo!',
      },
    },
    {
      name: 'Mark P.',
      image: '/experience5.jpg',
      text: {
        en: 'They helped me with insurance and the job was quick.',
        es: 'Me ayudaron con el seguro y el trabajo fue rápido.',
      },
    },
    {
      name: 'Julia G.',
      image: '/experience6.jpg',
      text: {
        en: 'The whole process was smooth. I felt informed and secure.',
        es: 'Todo el proceso fue fluido. Me sentí informado y seguro.',
      },
    },
  ];

  return (
    <section id="testimonials" className="relative py-20 px-4 text-white overflow-hidden">
      {/* Fondo visual */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/background-video-blur.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animación del título */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-black drop-shadow-md text-center"
        >
          {language === 'en' ? 'What our clients say' : 'Lo que dicen nuestros clientes'}
        </motion.h2>

        {/* Carrusel móvil */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex md:hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-1"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="min-w-[280px] snap-center bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-slate-800 text-center">
                <p className="text-sm italic">“{t.text[language]}”</p>
                <p className="mt-4 text-sm font-semibold text-yellow-600">— {t.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Grid escritorio */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:grid gap-8 md:grid-cols-3"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl transition flex flex-col overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-slate-800 text-center">
                <p className="text-sm italic">“{t.text[language]}”</p>
                <p className="mt-4 text-sm font-semibold text-yellow-600">— {t.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
