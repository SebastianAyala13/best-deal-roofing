'use client';

import { useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  zip: string;
  service: string;
  ownership: string;
  roofType: string;
  urgency: string;
}

interface Question {
  key: keyof FormData;
  label: string;
  placeholder?: string;
  type: 'text' | 'email' | 'tel' | 'select';
  options?: { value: string; label: string }[];
  image: string;
}

export default function QuoteForm() {
  const { language } = useLanguage();

  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    zip: '',
    service: '',
    ownership: '',
    roofType: '',
    urgency: ''
  });

  const questions: Question[] = [
    {
      key: 'fullName',
      label: language === 'es' ? '¿Cuál es tu nombre completo?' : 'What is your full name?',
      placeholder: language === 'es' ? 'Nombre completo' : 'Full Name',
      type: 'text',
      image: '/experience1.jpg'
    },
    {
      key: 'email',
      label: language === 'es' ? '¿Cuál es tu correo electrónico?' : 'What is your email?',
      placeholder: 'Email',
      type: 'email',
      image: '/experience2.jpg'
    },
    {
      key: 'phone',
      label: language === 'es' ? '¿Cuál es tu número de teléfono?' : 'What is your phone number?',
      placeholder: language === 'es' ? 'Teléfono' : 'Phone',
      type: 'tel',
      image: '/experience3.jpg'
    },
    {
      key: 'zip',
      label: language === 'es' ? '¿Cuál es tu código postal?' : 'What is your ZIP code?',
      placeholder: 'ZIP Code',
      type: 'text',
      image: '/experience4.jpg'
    },
    {
      key: 'service',
      label: language === 'es' ? '¿Qué servicio necesitas?' : 'What service do you need?',
      type: 'select',
      options: [
        { value: '', label: language === 'es' ? 'Selecciona' : 'Select' },
        { value: 'replacement', label: language === 'es' ? 'Reemplazo de Techo' : 'Roof Replacement' },
        { value: 'repair', label: language === 'es' ? 'Reparación de Techo' : 'Roof Repair' }
      ],
      image: '/experience5.jpg'
    },
    {
      key: 'ownership',
      label: language === 'es' ? '¿Eres el propietario de la vivienda?' : 'Are you the homeowner?',
      type: 'select',
      options: [
        { value: '', label: language === 'es' ? 'Selecciona' : 'Select' },
        { value: 'yes', label: language === 'es' ? 'Sí, soy el dueño' : 'Yes, I’m the owner' },
        { value: 'no', label: language === 'es' ? 'No, soy inquilino' : 'No, I’m renting' }
      ],
      image: '/experience6.jpg'
    },
    {
      key: 'roofType',
      label: language === 'es' ? '¿Qué tipo de techo tienes?' : 'What type of roof do you have?',
      placeholder: language === 'es' ? 'Tipo de techo' : 'Roof Type',
      type: 'text',
      image: '/experience7.jpg'
    },
    {
      key: 'urgency',
      label: language === 'es' ? '¿Qué tan pronto necesitas el servicio?' : 'How soon do you need service?',
      type: 'select',
      options: [
        { value: '', label: language === 'es' ? 'Selecciona' : 'Select' },
        { value: 'immediately', label: language === 'es' ? 'Inmediatamente' : 'Immediately' },
        { value: 'week', label: language === 'es' ? 'Dentro de una semana' : 'Within a week' },
        { value: 'month', label: language === 'es' ? 'Dentro de un mes' : 'Within a month' }
      ],
      image: '/experience8.jpg'
    }
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    const currentKey = questions[step].key;
    const currentValue = formData[currentKey];

    if (!currentValue || currentValue.trim() === '') {
      alert(language === 'es' ? 'Por favor completa este campo.' : 'Please fill out this field.');
      return;
    }

    if (currentKey === 'ownership' && currentValue === 'no') {
      alert(language === 'es' ? 'Lo sentimos, solo propietarios pueden aplicar.' : 'Sorry, homeowners only.');
      return;
    }

    if (step < questions.length - 1) {
      setStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    console.log('Lead captured:', formData);
  
    // TODO: Integrate email or backend logic here.
    // Example:
    // fetch('/api/send', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
  
    alert(language === 'es'
      ? '¡Gracias por tu solicitud!'
      : 'Thank you for your request!');
  
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      zip: '',
      service: '',
      ownership: '',
      roofType: '',
      urgency: ''
    });
  
    setStep(0);
  };
  

  const current = questions[step];
  const progress = Math.round(((step + 1) / questions.length) * 100);

  return (
    <section id="quote-wizard" className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-4 text-sm font-medium text-slate-700">{progress}%</div>
      <div className="w-full h-2 bg-gray-200 rounded-full mb-8">
        <div
          className="h-full bg-yellow-400 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <motion.div
        key={current.key}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row items-center gap-6 bg-white p-6 md:p-10 rounded-3xl shadow-xl"
      >
        <div className="w-full md:w-1/2">
          <Image
            src={current.image}
            alt="Question visual"
            width={600}
            height={400}
            className="rounded-xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">{current.label}</h2>
          {current.type === 'select' ? (
            <select
              name={current.key}
              value={formData[current.key]}
              onChange={handleChange}
              required
              aria-label={current.label}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base"
            >
              {current.options?.map((opt, idx) => (
                <option key={idx} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          ) : (
            <input
              type={current.type}
              name={current.key}
              placeholder={current.placeholder}
              value={formData[current.key]}
              onChange={handleChange}
              required
              aria-label={current.label}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base"
            />
          )}

          <div className="flex justify-between mt-6">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className="bg-gray-300 hover:bg-gray-400 text-slate-800 font-bold py-2 px-6 rounded-lg transition"
            >
              {language === 'es' ? 'Atrás' : 'Back'}
            </button>
            <button
              onClick={handleNext}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              {step === questions.length - 1 ? (language === 'es' ? 'Enviar' : 'Submit') : (language === 'es' ? 'Siguiente' : 'Next')}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
