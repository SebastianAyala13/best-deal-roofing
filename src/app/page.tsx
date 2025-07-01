'use client';

import Hero from './components/Hero';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Form from './Form';
import { useEffect } from 'react';
import TrustSection from './components/TrustSection';
import ReviewSection from './components/ReviewSection';
import ProjectGallery from './components/ProjectGallery';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function Home() {
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const faqs = [
    {
      en: { q: 'How do I know if my roof needs to be replaced?', a: 'Some common signs include visible water leaks inside your home, curling or missing shingles, mold growth in the attic, and dark spots on the ceiling. A professional inspection can give you a clear diagnosis.' },
      es: { q: '¿Cómo sé si mi techo necesita ser reemplazado?', a: 'Algunas señales comunes incluyen filtraciones visibles dentro de tu hogar, tejas curvadas o faltantes, moho en el ático y manchas oscuras en el techo. Una inspección profesional puede darte un diagnóstico claro.' },
    },
    {
      en: { q: 'Are your roofing services licensed and insured?', a: 'Yes. Best Deal Roofing is fully licensed and insured, giving you peace of mind that your home is in professional hands. All work meets local codes and insurance requirements.' },
      es: { q: '¿Están licenciados y asegurados sus servicios de techado?', a: 'Sí. Best Deal Roofing está completamente licenciada y asegurada, brindándote tranquilidad de que tu hogar está en buenas manos. Todo el trabajo cumple con los códigos locales y los requisitos del seguro.' },
    },
    {
      en: { q: 'Do you offer free estimates?', a: 'Yes. We offer 100% free, no-obligation estimates. Simply fill out our contact form or call us, and our team will assess your roof and provide a transparent quote.' },
      es: { q: '¿Ofrecen estimaciones gratuitas?', a: 'Sí. Ofrecemos estimaciones 100% gratuitas y sin compromiso. Simplemente completa nuestro formulario de contacto o llámanos, y nuestro equipo evaluará tu techo y te proporcionará una cotización transparente.' },
    },
    {
      en: { q: 'How long does a typical roof replacement take?', a: 'Most residential roof replacements are completed within 1–2 days depending on the size, material selected, and weather. We plan efficiently and keep you informed every step of the way.' },
      es: { q: '¿Cuánto tiempo tarda un reemplazo de techo?', a: 'La mayoría de los reemplazos de techos residenciales se completan en 1 a 2 días, dependiendo del tamaño, el material y el clima. Planificamos eficientemente y te mantenemos informado en todo momento.' },
    },
    {
      en: { q: 'What types of roofing materials do you offer?', a: 'We offer asphalt shingles, metal roofing, TPO, tile roofing, and energy-efficient options tailored to your home’s needs and climate.' },
      es: { q: '¿Qué tipos de materiales para techos ofrecen?', a: 'Ofrecemos tejas asfálticas, techos metálicos, TPO, techos de tejas y opciones energéticamente eficientes adaptadas a tu hogar y clima.' },
    },
    {
      en: { q: 'Is financing available for roof projects?', a: 'Yes. We partner with financing companies to offer flexible payment plans that make roofing projects more affordable for homeowners.' },
      es: { q: '¿Ofrecen financiación para proyectos de techado?', a: 'Sí. Nos asociamos con empresas financieras para ofrecer planes de pago flexibles que hacen que los proyectos de techado sean más accesibles.' },
    },
    {
      en: { q: 'Do you provide emergency roof repair services?', a: 'Absolutely. We offer 24/7 emergency services for storm damage, heavy leaks, or insurance claim repairs. Our response team is fast and dependable.' },
      es: { q: '¿Ofrecen servicios de reparación de emergencia?', a: 'Sí. Ofrecemos servicios de emergencia 24/7 para daños por tormentas, filtraciones fuertes o reparaciones cubiertas por seguros. Nuestro equipo responde rápido y es confiable.' },
    },
    {
      en: { q: 'Can I schedule an inspection even if I’m not sure I need repairs?', a: 'Yes. Our roof inspections are free and educational. We\'ll give you a full report and walk you through any concerns or areas of improvement.' },
      es: { q: '¿Puedo programar una inspección aunque no esté seguro si necesito reparaciones?', a: 'Sí. Nuestras inspecciones son gratuitas y educativas. Te daremos un informe completo y te guiaremos a través de cualquier preocupación o área de mejora.' },
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <VideoSection />
      <WhyChooseUs />
      <TrustSection />

      <section id="form-section" className="py-20 px-4 bg-transparent">
        <Form />
      </section>

      <ReviewSection />

      <section className="py-16 px-4 bg-white text-slate-900" id="testimonials">
        <Testimonials />
      </section>

      {/* FAQ con fondo y tarjetas */}
      <section id="faq" className="relative py-20 px-4 text-white bg-white/10 backdrop-blur-md">
        <div className="absolute inset-0 -z-10">
          <img
            src="/background-video-blur.jpg"
            alt="background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-md">
          {language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="bg-white/90 text-slate-900 p-4 rounded-xl shadow-md transition hover:shadow-lg group"
            >
              <summary className="flex items-center justify-between font-semibold cursor-pointer">
                {language === 'es' ? faq.es.q : faq.en.q}
                <span className="ml-2 text-yellow-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <motion.p
                className="mt-2 text-slate-700 text-sm"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {language === 'es' ? faq.es.a : faq.en.a}
              </motion.p>
            </details>
          ))}
        </div>
      </section>

      <ProjectGallery />
      <Footer />

      <p className="sr-only">
        Best Deal Roofing is a trusted and licensed roofing contractor offering full roof replacements, emergency roof repairs, and free estimates across the United States including Texas, Florida, and California.
      </p>
    </>
  );
}
