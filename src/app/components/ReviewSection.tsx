'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const reviewVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function ReviewSection() {
  const reviews = [
    {
      logo: '/google-logo.png',
      alt: 'Google Reviews',
      text: '“After a major storm in Houston, Best Deal Roofing came the next day and had everything fixed in 24 hours. They even helped with my insurance!”',
      author: '– Alicia R., Texas ⭐⭐⭐⭐⭐',
    },
    {
      logo: '/facebook-logo.png',
      alt: 'Facebook Reviews',
      text: '“We just bought our home in Miami and needed a full roof replacement. Fast, affordable and super professional. 10/10.”',
      author: '– James T., Florida ⭐⭐⭐⭐⭐',
    },
    {
      logo: '/linkedin-logo.png',
      alt: 'LinkedIn Reviews',
      text: '“Reliable roofing company in California. Great communication and they cleaned up everything after the job. Our HOA was impressed.”',
      author: '– Carla G., California ⭐⭐⭐⭐⭐',
    },
    {
      logo: '/google-logo.png',
      alt: 'Google Reviews',
      text: '“They explained every step and gave us a better quote than 2 other companies. Our home in Atlanta looks amazing now.”',
      author: '– David P., Georgia ⭐⭐⭐⭐⭐',
    },
    {
      logo: '/facebook-logo.png',
      alt: 'Facebook Reviews',
      text: '“I’m a single mom and was scared of roofing scams. Best Deal Roofing was kind, honest, and super transparent. Highly recommended.”',
      author: '– Jessica M., North Carolina ⭐⭐⭐⭐⭐',
    },
    {
      logo: '/linkedin-logo.png',
      alt: 'LinkedIn Reviews',
      text: '“As a realtor, I’ve worked with many contractors. These guys are on another level. Quick, clean and competitive prices.”',
      author: '– Robert S., Nevada ⭐⭐⭐⭐⭐',
    },
  ];

  return (
    <section
      className="py-20 px-6 backdrop-blur-lg bg-transparent"
      id="reviews"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white drop-shadow mb-12"
        >
          Real Reviews from Real Homeowners
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              variants={reviewVariants}
              viewport={{ once: true }}
              className="border border-white/20 bg-white/10 text-white p-6 rounded-2xl shadow-lg backdrop-blur-md"
            >
              <Image src={review.logo} alt={review.alt} width={80} height={20} />
              <p className="mt-4 text-sm italic">{review.text}</p>
              <p className="mt-3 font-semibold text-yellow-300">{review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
