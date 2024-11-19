import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '#/tailwind.config.js';

import { useEffect, useState } from 'react';

const fullConfig = resolveConfig(tailwindConfig) as any;
const { theme: screens } = fullConfig;
export default (query: keyof typeof screens): boolean => {
  const mediaQuery = `(min-width: ${screens[query]})`;
  const matchQueryList = window.matchMedia(mediaQuery);
  const [isMatch, setMatch] = useState<boolean>(false);
  const onChange = (e: MediaQueryListEvent) => setMatch(e.matches);
  useEffect(() => {
    setMatch(matchQueryList.matches);
    matchQueryList.addEventListener('change', onChange);
    return () => matchQueryList.removeEventListener('change', onChange);
  }, [query]);
  return isMatch;
};
