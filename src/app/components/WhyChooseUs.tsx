'use client';

import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Why Homeowners Trust Best Deal Roofing',
      features: [
        {
          icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
          title: 'Certified & Insured',
          description: 'Fully licensed and insured professionals with 10+ years of experience.',
        },
        {
          icon: <Zap className="w-8 h-8 text-yellow-400" />,
          title: 'Fast Turnaround',
          description: 'Quick inspections, quotes and installations without delays.',
        },
        {
          icon: <CheckCircle className="w-8 h-8 text-yellow-400" />,
          title: 'Lifetime Warranty',
          description: 'Enjoy peace of mind with our long-term service warranty.',
        },
      ],
    },
    es: {
      title: 'Por qué los hogares confían en Best Deal Roofing',
      features: [
        {
          icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
          title: 'Certificados y Asegurados',
          description: 'Profesionales licenciados y asegurados con más de 10 años de experiencia.',
        },
        {
          icon: <Zap className="w-8 h-8 text-yellow-400" />,
          title: 'Respuesta Rápida',
          description: 'Inspecciones, cotizaciones e instalaciones sin demoras.',
        },
        {
          icon: <CheckCircle className="w-8 h-8 text-yellow-400" />,
          title: 'Garantía de por vida',
          description: 'Tranquilidad total con garantía de servicio a largo plazo.',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="benefits" className="bg-pattern py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          {t.title}
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-10 text-left">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
