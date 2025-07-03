'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDollarSign, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import { useLanguage } from '@/context/LanguageContext';

export default function Promotions() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: '🔥 Types of Promotions',
      cards: [
        {
          icon: <FaDollarSign className="text-4xl text-green-600 mb-4" />,
          title: 'No Initial Cost',
          description: 'Start your project without paying anything in advance.',
        },
        {
          icon: <FaHandshake className="text-4xl text-blue-600 mb-4" />,
          title: 'Financing Option',
          description: 'Accessible plans adjusted to your budget.',
        },
        {
          icon: <FaShieldAlt className="text-4xl text-purple-600 mb-4" />,
          title: '50-Year Guarantee',
          description: 'Guaranteed protection for your roof for decades.',
        },
      ],
    },
    es: {
      title: '🔥 Tipos de Promociones',
      cards: [
        {
          icon: <FaDollarSign className="text-4xl text-green-600 mb-4" />,
          title: 'Sin Costo Inicial',
          description: 'Comienza tu proyecto sin pagar nada por adelantado.',
        },
        {
          icon: <FaHandshake className="text-4xl text-blue-600 mb-4" />,
          title: 'Opción de Financiamiento',
          description: 'Planes accesibles ajustados a tu presupuesto.',
        },
        {
          icon: <FaShieldAlt className="text-4xl text-purple-600 mb-4" />,
          title: 'Garantía de 50 Años',
          description: 'Protección garantizada para tu techo por décadas.',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="relative bg-yellow-50 py-20 px-4 sm:px-8 text-center overflow-hidden" id="promotions">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/bg-promo.jpg"
          alt="Promotions background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-10"
        >
          {t.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-800"
        >
          {t.cards.map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl"
            >
              {card.icon}
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
