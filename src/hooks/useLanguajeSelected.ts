import { useState } from 'react';

export const useLanguageSelected = () => {
  const [english, setEnglish] = useState(true);

  const languageHandler = () => {
    setEnglish(!english);
  };

  return { english, languageHandler };
};
