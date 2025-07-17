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
        en: 'Just got our roof done this week and I’m very happy with the work. Ami was very professional, showed me pictures of the damage and explained all the details. The quote was the best price and they finished everything so fast. Highly recommended! 👍',
        es: 'Esta semana terminaron nuestro techo y quedamos muy satisfechos. Ami fue muy profesional, mostró fotos del daño y explicó cada detalle. El precio fue el mejor y terminaron rapidísimo. ¡Muy recomendados! 👍',
      },
    },
    {
      name: 'Emily R.',
      image: '/experience2.jpg',
      text: {
        en: 'Ami was the only one who took time to inspect my leaks carefully. He explained the layers of the roof, and they even took care of the city permit. I felt in good hands and the results were amazing.',
        es: 'Ami fue el único que se tomó el tiempo para inspeccionar con detalle las filtraciones. Me explicó las capas del techo y ellos mismos gestionaron el permiso con la ciudad. Me sentí en buenas manos y el resultado fue increíble.',
      },
    },
    {
      name: 'Luis A.',
      image: '/experience3.jpg',
      text: {
        en: 'Their crew removed my old roof and installed the new shingles in just two days. The cleanup was spotless and the roof looks fantastic. Plus, I got a lifetime warranty.',
        es: 'Su equipo quitó mi techo viejo y colocó las nuevas tejas en solo dos días. Dejaron todo limpio y el techo quedó espectacular. Además, me dieron garantía de por vida.',
      },
    },
    {
      name: 'Sarah T.',
      image: '/experience4.jpg',
      text: {
        en: 'The team was super friendly and efficient. From the moment I called until the last shingle was placed, I felt informed and taken care of. My roof looks brand new!',
        es: 'El equipo fue súper amable y eficiente. Desde que llamé hasta que pusieron la última teja, me mantuvieron informada y me sentí atendida. ¡Mi techo parece nuevo!',
      },
    },
    {
      name: 'Mark P.',
      image: '/experience5.jpg',
      text: {
        en: 'I was overwhelmed by insurance paperwork but Ami helped me every step of the way. The process was fast and painless. Don’t hesitate to call them!',
        es: 'Estaba abrumado con los papeles del seguro pero Ami me ayudó en cada paso. El proceso fue rápido y sin complicaciones. ¡No duden en llamarlos!',
      },
    },
    {
      name: 'Julia G.',
      image: '/experience6.jpg',
      text: {
        en: 'From the inspection to the final installation, everything was clear and smooth. They respected the timeline and were super communicative. Thank you for the great service!',
        es: 'Desde la inspección hasta la instalación final, todo fue claro y sin contratiempos. Respetaron los tiempos y siempre estuvieron en contacto. ¡Gracias por el excelente servicio!',
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
          viewport={{ amount: 0.5 }}
          className="text-3xl font-bold mb-10 text-black drop-shadow-md text-center"
        >
          {language === 'en' ? 'What our clients say' : 'Lo que dicen nuestros clientes'}
        </motion.h2>

        {/* Carrusel móvil */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
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
          viewport={{ amount: 0.5 }}
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
