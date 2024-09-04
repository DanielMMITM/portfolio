import { Description } from './components/Description';
import { Header } from './components/Header';
import { AppContextProvider } from './context/AppContext';

document.documentElement.classList.toggle('dark');

export const App = () => {
  return (
    <AppContextProvider>
      <div className="bg-primaryLight text-tertiaryLight dark:bg-primary dark:text-tertiary border-3 min-h-[100dvh]">
        <div className="flex flex-col p-6 mx-10 md:mx-44 gap-y-7 border-2">
          <Header />
          <Description />
        </div>
      </div>
    </AppContextProvider>
  );
};

export default App;
