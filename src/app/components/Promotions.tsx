'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaDollarSign, FaHandshake, FaShieldAlt } from 'react-icons/fa';

export default function Promotions() {
  return (
    <section className="relative bg-yellow-50 py-20 px-4 sm:px-8 text-center overflow-hidden">
      {/* Imagen de fondo (ruta como string) */}
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
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-yellow-600 mb-10"
        >
          🔥 Tipos de Promociones
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-800"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl"
          >
            <FaDollarSign className="text-4xl text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Sin Costo Inicial</h3>
            <p className="text-sm text-slate-600">Comienza tu proyecto sin pagar nada por adelantado.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl"
          >
            <FaHandshake className="text-4xl text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Opción de Financiamiento</h3>
            <p className="text-sm text-slate-600">Planes accesibles ajustados a tu presupuesto.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl"
          >
            <FaShieldAlt className="text-4xl text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Garantía de 50 Años</h3>
            <p className="text-sm text-slate-600">Protección garantizada para tu techo por décadas.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
