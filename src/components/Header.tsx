import { useAppContext } from '@/context/AppContext';
import darkModeIcon from '@/assets/icons/darkMode.svg';
import lightModeIcon from '@/assets/icons/lightMode.svg';

export const Header = () => {
  const { english, toggleLanguage, darkMode, toggleDarkMode } = useAppContext();

  return (
    <header>
      <nav className="flex justify-center md:justify-end items-center z-10">
        <ul className="flex gap-x-6 items-center">
          <li>
            <button type="button" onClick={toggleLanguage}>
              {english ? 'ES' : 'EN'}
            </button>
          </li>
          <li>
            <button className="flex" type="button" onClick={toggleDarkMode}>
              <img
                src={darkMode ? lightModeIcon : darkModeIcon}
                alt={`${darkMode ? 'Light mode' : 'Dark mode'} icon`}
                className={`${darkMode && 'invert'} icon w-5`}
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
