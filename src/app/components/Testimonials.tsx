'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: 'Carlos M.',
      text: {
        en: 'The service was fast and professional. Highly recommended!',
        es: 'El servicio fue rápido y profesional. ¡Muy recomendado!',
      },
    },
    {
      name: 'Emily R.',
      text: {
        en: 'They inspected and repaired my roof in no time.',
        es: 'Inspeccionaron y repararon mi techo en muy poco tiempo.',
      },
    },
    {
      name: 'Luis A.',
      text: {
        en: 'Great customer service and a lifetime warranty.',
        es: 'Excelente servicio al cliente y garantía de por vida.',
      },
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 px-4 bg-white/20 backdrop-blur-md"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-slate-900 drop-shadow-md">
          {language === 'en' ? 'What our clients say' : 'Lo que dicen nuestros clientes'}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition"
            >
              <p className="text-slate-700 text-sm italic leading-relaxed">“{t.text[language]}”</p>
              <p className="mt-4 text-sm font-semibold text-yellow-600">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}