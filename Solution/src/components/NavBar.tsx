import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext, LanguageKey } from "../context/languageContext";
import '../styles/navbar.css';

const translations : Record<LanguageKey, {welcome:string}> =  {
  en: {
    welcome: "Welcome to A1",
  },
  mk: {
    welcome: "Добредојдовте во А1",
  },
  sq: {
    welcome: "Mirë se vini në A1", 
  },
};

const Navbar: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (l: LanguageKey) => {
    setLanguage({ language: l });
  };

  return (
    <div className="navbar-div">
      <div className="navbar-buttons">
        <button
          id="mk"
          onClick={() => handleLanguageChange("mk")}
          className={language.language === "mk" ? "active" : "notactive"}
        >
          MK
        </button>

        <button
          id="sq"
          onClick={() => handleLanguageChange("sq")}
          className={language.language === "sq" ? "active" : "notactive"}
        >
          SQ
        </button>

        <button
          id="en"
          onClick={() => handleLanguageChange("en")}
          className={language.language === "en" ? "active" : "notactive"}
        >
          EN
        </button>
      </div>
      <p className="navbar-p">{translations[language.language].welcome}</p>
      <div>
        <Link to="/">
          <img src="src/assets/A1_Logo.png" className="navbar-logo" alt="A1 Logo" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
