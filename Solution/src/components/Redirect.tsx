import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/App.css';

import { LanguageContext, LanguageKey } from '../context/languageContext';

const translations: Record<LanguageKey, { redirect: string }> = {
  en: {
    redirect: "Redirecting to ",
  },
  mk: {
    redirect: "Пренасочување кон ",
  },
  sq: {
    redirect: "Drejtimi për te ",
  },
};

const Redirect: React.FC = () => {
  const { option } = useParams<{ option: string }>();
  const {language} = useContext(LanguageContext);

  return (
    <div className='redirect-div'>
      <p >{translations[language.language].redirect} A1-{option} ...</p>
    </div>
  );
};

export default Redirect;
