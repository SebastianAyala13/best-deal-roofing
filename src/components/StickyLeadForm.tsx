'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LeadForm from './LeadForm';

export default function StickyLeadForm() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Observer para el formulario principal
    const observer = new IntersectionObserver(
      ([entry]) => {
        // El sticky form se muestra cuando el formulario principal NO está visible
        setIsVisible(!entry.isIntersecting && !isMobile);
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Buscar el formulario principal en la página
    const mainForm = document.getElementById('lead-form');
    if (mainForm) {
      observer.observe(mainForm);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // No mostrar en móvil
  if (isMobile) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 max-w-sm w-80"
          style={{ maxHeight: '90vh', overflowY: 'auto' }}
        >
          {/* Background overlay for better visibility */}
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200"></div>
          
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-2 right-2 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close form"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Form content */}
          <div className="relative p-4">
            <div className="mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Online Now</span>
              </div>
              <h3 className="text-lg font-bold text-slate-800">
                Get Your Free Quote
              </h3>
              <p className="text-xs text-gray-600">
                Limited time offer - Response in 24hrs
              </p>
            </div>
            
            {/* Render the same LeadForm component */}
            <div className="scale-95 origin-top">
              <LeadForm />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
