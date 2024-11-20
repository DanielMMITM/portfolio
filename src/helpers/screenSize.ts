import { useEffect, useState } from 'react';

const screens = {
  xs: '250px',
  sm: '600px',
  md: '900px',
};

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
