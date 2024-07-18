import { useState } from 'react';

export const useDarkMode = () => {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return { dark, darkModeHandler };
};
