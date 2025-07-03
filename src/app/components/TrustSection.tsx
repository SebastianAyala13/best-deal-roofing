'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Carlos M.',
    text: 'Quick response and affordable pricing. Highly recommend!',
    image: '/clients/carlos.jpg',
  },
  {
    name: 'Lindsey W.',
    text: 'Roof replaced in one day. Clean and respectful crew.',
    image: '/clients/lindsey.jpg',
  },
  {
    name: 'James R.',
    text: "Most professional roofers I've dealt with.",
    image: '/clients/james.jpg',
  },
  {
    name: 'Laura P.',
    text: 'Answered all my questions and did a great job.',
    image: '/clients/laura.jpg',
  },
  {
    name: 'Anthony G.',
    text: 'Fast, affordable and high quality roofing service.',
    image: '/clients/anthony.jpg',
  },
  {
    name: 'Stephanie T.',
    text: 'Loved the service and the new roof looks amazing!',
    image: '/clients/stephanie.jpg',
  },
  {
    name: 'Brian C.',
    text: 'They helped with insurance and saved me money.',
    image: '/clients/brian.jpg',
  },
  {
    name: 'Monica S.',
    text: 'Very responsive and helpful during the whole process.',
    image: '/clients/monica.jpg',
  },
  {
    name: 'Jason H.',
    text: 'They worked through bad weather to get the job done!',
    image: '/clients/jason.jpg',
  },
  {
    name: 'Rachel L.',
    text: 'So grateful for the quality and communication. 5 stars!',
    image: '/clients/rachel.jpg',
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

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const interval = setInterval(next, 4000); // cambio más rápido
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="trust"
      className="py-16 bg-slate-800 text-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.5 }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Why Homeowners Trust Us
        </h2>

        {/* Star Rating */}
        <div className="flex justify-center items-center mb-6">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.625 9.393c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.966z" />
            </svg>
          ))}
          <span className="ml-3 text-sm sm:text-base text-slate-300">
            4.9/5 based on 250+ reviews
          </span>
        </div>

        {/* Review Slider */}
        <div className="relative mb-10 max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="px-6"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={reviews[current].image}
                  alt={reviews[current].name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4 border-2 border-yellow-400 object-cover shadow-md hover:shadow-yellow-300 transition"
                />
                <p className="text-base sm:text-lg italic text-slate-100">
                  &quot;{reviews[current].text}&quot;
                </p>
                <p className="mt-3 font-semibold text-yellow-400 text-sm sm:text-base">
                  – {reviews[current].name}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2">
            <button onClick={prev} aria-label="Previous">
              <ChevronLeft className="w-6 h-6 text-yellow-400 hover:scale-110 transition" />
            </button>
            <button onClick={next} aria-label="Next">
              <ChevronRight className="w-6 h-6 text-yellow-400 hover:scale-110 transition" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition ${
                  current === i ? 'bg-yellow-400' : 'bg-slate-500'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mt-8">
          {badges.map((badge) => (
            <motion.div
              key={badge.alt}
              className="bg-white rounded-2xl shadow-lg p-5 w-full h-36 flex items-center justify-center hover:shadow-yellow-300/40 transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={badge.src}
                alt={badge.alt}
                width={90}
                height={50}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
