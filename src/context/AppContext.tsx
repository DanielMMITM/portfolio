import { createContext, ReactNode, useContext, useState } from 'react';

interface AppContextProps {
  children: ReactNode;
}

type AppContextConfigType = {
  english: boolean;
  toggleLanguage: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const initialAppContextConfigType: AppContextConfigType = {
  english: true,
  toggleLanguage: () => {},
  darkMode: true,
  toggleDarkMode: () => {},
};

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [english, setEnglish] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const toggleLanguage = () => {
    setEnglish(!english);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <AppContext.Provider
      value={{
        english,
        toggleLanguage,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext<AppContextConfigType>(
  initialAppContextConfigType
);

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
