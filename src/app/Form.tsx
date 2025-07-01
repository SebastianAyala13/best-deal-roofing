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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
    });
    alert('Thanks! Your request has been submitted.');
  };

  return (
    <motion.section
      id="form-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-8 flex justify-center items-center"
    >
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-200">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-6">
          Get Your Free Roofing Quote
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in the form and our team will reach out to you shortly.
        </p>
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
          aria-label="Free Roofing Quote Form"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            aria-label="Full Name"
            autoComplete="name"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={form.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            aria-label="Email Address"
            autoComplete="email"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            aria-label="Phone Number"
            autoComplete="tel"
            pattern="^[0-9\-+\s()]*$"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="ZIP Code"
            aria-label="ZIP Code"
            autoComplete="postal-code"
            pattern="\d{5}"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={form.zip}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            aria-label="Select a Service"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Roof Repair">Roof Repair</option>
            <option value="New Roof Installation">New Roof Installation</option>
            <option value="Inspection">Inspection</option>
          </select>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold py-3 rounded-xl shadow-md transition"
          >
            Submit Request
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
}
