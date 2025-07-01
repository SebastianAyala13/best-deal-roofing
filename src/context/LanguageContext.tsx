'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode
} from 'react';

type Language = 'en' | 'es';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en'); // inglés por defecto

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang === 'es' || storedLang === 'en') {
      setLanguage(storedLang as Language);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
