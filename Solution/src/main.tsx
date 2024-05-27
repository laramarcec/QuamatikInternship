import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {LanguageProvider} from './context/languageContext.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
    
  </React.StrictMode>,
)
