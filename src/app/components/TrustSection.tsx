'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  {
    name: 'Carlos M.',
    text: 'Quick response and affordable pricing. I highly recommend Best Deal Roofing!',
  },
  {
    name: 'Lindsey W.',
    text: 'Our roof was replaced in a single day. The team was respectful and clean.',
  },
  {
    name: 'James R.',
    text: 'I’ve dealt with several roofers, and Best Deal is by far the most professional.',
  },
  {
    name: 'Laura P.',
    text: 'They were patient with all my questions and did a beautiful job on our new roof.',
  },
];

const badges = [
  { src: '/certified.png', alt: 'Certified Roofing Company' },
  { src: '/insured.png', alt: 'Fully Insured Team' },
  { src: '/warranty.png', alt: 'Work Guaranteed' },
  { src: '/license.png', alt: 'Licensed Professionals' },
];

export default function TrustSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-slate-800 text-white" id="trust">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Homeowners Trust Us</h2>

        {/* Star Rating + Average */}
        <div className="flex justify-center items-center mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.625 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
            </svg>
          ))}
          <span className="ml-3 text-sm text-slate-300">4.9/5 based on 250+ reviews</span>
        </div>

        {/* Animated Review Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <p className="text-lg italic text-slate-100 max-w-xl mx-auto">
              "{reviews[current].text}"
            </p>
            <p className="mt-3 font-semibold text-yellow-400">– {reviews[current].name}</p>
          </motion.div>
        </AnimatePresence>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center mt-8">
          {badges.map((badge) => (
            <div
              key={badge.alt}
              className="bg-white rounded-lg shadow-md p-4 w-full h-36 flex items-center justify-center"
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
