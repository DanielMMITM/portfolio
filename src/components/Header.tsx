import { useAppContext } from '../context/AppContext';

export const Header = () => {
  const { english, toggleLanguage, darkMode, toggleDarkMode } = useAppContext();

  return (
    <header>
      <nav className="flex justify-center md:justify-end items-center">
        <ul className="flex gap-x-6">
          <li>
            <button type="button" onClick={toggleLanguage}>
              {english ? 'ES' : 'EN'}
            </button>
          </li>
          <li>
            <button type="button" onClick={toggleDarkMode}>
              {darkMode ? 'Clear mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
