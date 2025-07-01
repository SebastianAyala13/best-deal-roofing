'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Form() {
  const { language } = useLanguage();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    zip: '',
    service: '',
    ownership: '',
    roofType: '',
    urgency: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', form);
    setForm({
      fullName: '',
      email: '',
      phone: '',
      zip: '',
      service: '',
      ownership: '',
      roofType: '',
      urgency: '',
    });
    alert(language === 'es' ? '¡Gracias! Hemos recibido tu solicitud.' : 'Thanks! Your request has been submitted.');
  };

  return (
    <div className="flex justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-md"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 text-center">
          {language === 'es' ? 'Obtén tu Cotización Gratuita' : 'Get Your Free Roofing Quote'}
        </h2>
        <p className="text-sm text-slate-600 mb-6 text-center">
          {language === 'es'
            ? 'Completa el formulario y nuestro equipo se pondrá en contacto contigo.'
            : 'Fill in the form and our team will reach out to you shortly.'}
        </p>

        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder={language === 'es' ? 'Nombre completo' : 'Full Name'}
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-yellow-500 text-base"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={language === 'es' ? 'Correo electrónico' : 'Email Address'}
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-yellow-500 text-base"
          required
        />
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder={language === 'es' ? 'Número de teléfono' : 'Phone Number'}
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-yellow-500 text-base"
          required
        />
        <input
          type="text"
          name="zip"
          value={form.zip}
          onChange={handleChange}
          placeholder={language === 'es' ? 'Código postal' : 'ZIP Code'}
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 focus:outline-yellow-500 text-base"
        />

        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 text-slate-700 text-base"
          required
        >
          <option value="">{language === 'es' ? 'Selecciona un servicio' : 'Select a Service'}</option>
          <option value="replacement">{language === 'es' ? 'Reemplazo de Techo' : 'Roof Replacement'}</option>
          <option value="repair">{language === 'es' ? 'Reparación' : 'Roof Repair'}</option>
        </select>

        {/* Nuevo campo: ¿Es dueño de casa? */}
        <select
          name="ownership"
          value={form.ownership}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 text-slate-700 text-base"
        >
          <option value="">{language === 'es' ? '¿Eres el propietario?' : 'Are you the homeowner?'}</option>
          <option value="yes">{language === 'es' ? 'Sí, soy el dueño' : 'Yes, I’m the owner'}</option>
          <option value="no">{language === 'es' ? 'No, soy inquilino' : 'No, I’m renting'}</option>
        </select>

        {/* Nuevo campo: Tipo de techo */}
        <select
          name="roofType"
          value={form.roofType}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 text-slate-700 text-base"
        >
          <option value="">{language === 'es' ? 'Tipo de techo' : 'Type of Roof'}</option>
          <option value="asphalt">{language === 'es' ? 'Asfáltico' : 'Asphalt Shingles'}</option>
          <option value="metal">{language === 'es' ? 'Metálico' : 'Metal'}</option>
          <option value="tile">{language === 'es' ? 'Tejas' : 'Tile'}</option>
          <option value="flat">{language === 'es' ? 'Plano / TPO' : 'Flat / TPO'}</option>
        </select>

        {/* Nuevo campo: Urgencia */}
        <select
          name="urgency"
          value={form.urgency}
          onChange={handleChange}
          className="w-full mb-6 px-4 py-3 rounded-lg border border-gray-300 text-slate-700 text-base"
        >
          <option value="">{language === 'es' ? '¿Cuándo necesitas el servicio?' : 'How soon do you need service?'}</option>
          <option value="asap">{language === 'es' ? 'Lo antes posible' : 'As soon as possible'}</option>
          <option value="1week">{language === 'es' ? 'Dentro de una semana' : 'Within a week'}</option>
          <option value="1month">{language === 'es' ? '1 mes o más' : '1 month or later'}</option>
        </select>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-lg transition"
        >
          {language === 'es' ? 'Enviar Solicitud' : 'Submit Request'}
        </button>
      </form>
    </div>
  );
}
