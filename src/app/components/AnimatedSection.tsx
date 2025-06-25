'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Props {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-right' | 'fade-left' | 'zoom-in' | 'slide-up';
}

const variantsMap = {
  'fade-up': { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 } },
  'fade-right': { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
  'fade-left': { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
  'zoom-in': { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 } },
  'slide-up': { initial: { y: 100 }, animate: { y: 0 } },
};

export default function AnimatedSection({ children, animation = 'fade-up' }: Props) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.15 });
  const variant = variantsMap[animation];

  return (
    <motion.section
      ref={ref}
      initial={variant.initial}
      animate={inView ? variant.animate : variant.initial}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
