import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import '../styles/App.css';
import { LanguageContext, LanguageKey } from '../context/languageContext';

const translations: Record<LanguageKey, { button1: string; button2: string; header: string; footer: string }> = {
  en: {
    button1: "Printed queue number ticket",
    button2: "SMS queue number notification",
    header: "Please select how you would like to get your queue number",
    footer: "Let's protect the environment",
  },
  mk: {
    button1: "Билет со печатен реден број",
    button2: "SMS известување за реден број",
    header: "Ве молиме одберете како сакате да го добиете вашиот реден број",
    footer: "Да ја заштитиме животната средина",
  },
  sq: {
    button1: "Bilet me numër të printuar të radhës",
    button2: "Njoftim për numrin e radhës me SMS",
    header: "Ju lutemi zgjidhni se si dëshironi të merrni numrin tuaj të radhës",
    footer: "Le të mbrojmë mjedisin",
  },
};

const Home: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className='home-div'>
      <p className='home-header-p'>{translations[language.language].header}</p>
      <div className='home-buttons'>
        <Link to='/A1/Printed-queue-number-ticket' className='home-button'>
          <div className='button-number-background'>
            <p className='button-number'>1</p>
          </div>
          <p className='button-text'>{translations[language.language].button1}</p>
        </Link>
        <Link to='/A1/SMS-queue-number-notification' className='home-button'>
          <div className='button-number-background'>
            <p className='button-number'>2</p>
          </div>
          <p className='button-text'>{translations[language.language].button2}</p>
        </Link>
      </div>
      <p className='home-footer-p'>
        <Link to='/A1/environment'>{translations[language.language].footer}</Link>
      </p>
    </div>
  );
};

export default Home;
