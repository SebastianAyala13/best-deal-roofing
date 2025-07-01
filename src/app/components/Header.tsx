'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext'; // Asegúrate que esta ruta sea correcta

export default function Header() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + nombre */}
        <Link href="/" scroll={false}>
          <div className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/logobestdeal.png"
              alt="Best Deal Roofing logo"
              width={50}
              height={50}
              priority
            />
            <div className="text-slate-900">
              <p className="text-lg font-extrabold leading-none">Best Deal</p>
              <p className="text-sm font-light uppercase tracking-wide -mt-1">Roofing</p>
            </div>
          </div>
        </Link>

        {/* Menú + idioma */}
          <div className="flex items-center space-x-6">
            <nav className="hidden sm:flex space-x-6 text-sm text-slate-700 font-medium">
              <a href="#form-section" className="hover:text-yellow-500 transition">
                {language === 'en' ? 'Free Quote' : 'Cotización'}
              </a>
              <a href="#benefits" className="hover:text-yellow-500 transition">
                {language === 'en' ? 'Why Us' : 'Por qué elegirnos'}
              </a>
              <a href="#projects" className="hover:text-yellow-500 transition">
                {language === 'en' ? 'Projects' : 'Proyectos'}
              </a>
              <a href="#footer" className="hover:text-yellow-500 transition">
                {language === 'en' ? 'Contact' : 'Contacto'}
              </a>
            </nav>

            <button
              onClick={toggleLanguage}
              aria-label="Toggle language"
              className="text-sm font-semibold text-slate-700 hover:text-yellow-500 transition"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

      </div>
    </header>
  );
}
    