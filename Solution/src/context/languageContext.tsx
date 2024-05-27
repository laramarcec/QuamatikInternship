import { createContext, useState, useEffect, ReactNode, Dispatch, SetStateAction } from 'react';

interface Language {
  language: string;
}

interface LanguageContextValue {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: {
    language: 'en',
  },
  setLanguage: () => { },
});

interface LanguageProviderProps {
    children: ReactNode;
  }

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>(() => {
      const storedLanguage = localStorage.getItem('language');
      return storedLanguage ? JSON.parse(storedLanguage) : {language: 'en'};
    });
  
    useEffect(() => {
      localStorage.setItem('language', JSON.stringify(language));
    }, [language]);
  
    return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
  };