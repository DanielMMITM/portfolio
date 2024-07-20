import { useDarkMode } from '../hooks/useDarkMode';
import { useLanguageSelected } from '../hooks/useLanguajeSelected';

export const Header = () => {
  const { dark, darkModeHandler } = useDarkMode();
  const { english, languageHandler } = useLanguageSelected();

  return (
    <header>
      <nav className="flex justify-center md:justify-end items-center">
        <ul className="flex gap-x-6">
          <li>
            <button type="button" onClick={languageHandler}>
              {english ? 'ES' : 'EN'}
            </button>
          </li>
          <li>
            <button type="button" onClick={darkModeHandler}>
              {dark ? 'Clear mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
