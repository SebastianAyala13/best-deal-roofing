'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Form() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    zip: '',
    service: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead captured:', form);
    setForm({ fullName: '', email: '', phone: '', zip: '', service: '' });
    alert('Thanks! Your request has been submitted.');
  };

  return (
    <motion.section
      id="form-section"
      className="relative px-4 sm:px-6 flex justify-center items-center min-h-[500px] bg-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-lg w-full p-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4 drop-shadow-md">
          Get Your Free Roofing Quote
        </h2>
        <p className="text-center text-white/90 mb-6 text-sm drop-shadow-sm">
          Fill in the form and our team will reach out to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          {["fullName", "email", "phone", "zip"].map((field) => (
            <motion.input
              key={field}
              whileFocus={{ scale: 1.01 }}
              type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
              name={field}
              placeholder={field
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase())}
              className="w-full px-5 py-3 bg-white/80 text-slate-800 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={form[field as keyof typeof form]}
              onChange={handleChange}
              required
            />
          ))}

          <motion.select
            whileFocus={{ scale: 1.01 }}
            name="service"
            className="w-full px-5 py-3 bg-white/80 text-slate-800 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Roof Repair">Roof Repair</option>
            <option value="New Roof Installation">New Roof Installation</option>
            <option value="Inspection">Inspection</option>
          </motion.select>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-xl shadow-md transition"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}
