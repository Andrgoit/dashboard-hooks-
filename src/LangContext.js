import { useState, createContext } from 'react';

export const langContext = createContext('en');

const LangContext = ({ children }) => {
  const [lang, setlang] = useState('en');

  const switchLang = () => {
    setlang(prevLang => (prevLang === 'en' ? 'ru' : 'en'));
  };
  return (
    <langContext.Provider value={{ lang, switchLang }}>
      {children}
    </langContext.Provider>
  );
};

export default LangContext;
