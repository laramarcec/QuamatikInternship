import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

export type LanguageKey = 'en' | 'mk' | 'sq';

type LanguageState = {
  language: LanguageKey;
};

type LanguageContextType = {
  language: LanguageState;
  setLanguage: (lang: LanguageState) => void;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: { language: 'en' },
  setLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageState>(() => {
    const storedLanguage = localStorage.getItem('lang');
    return storedLanguage ? JSON.parse(storedLanguage) : {language: 'en'};
  });

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(language));
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
