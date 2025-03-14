import { Description } from '@/components/Description';
import { Header } from '@/components/Header';
import { AppContextProvider } from '@/context/AppContext';
import Meteors from '@/components/Meteors';
import { Tabs } from '@/components/Tabs/Tabs';

document.documentElement.classList.toggle('dark');

export const App = () => {
  return (
    <AppContextProvider>
      <div className="relative flex w-full flex-col overflow-hidden text-tertiaryLight dark:bg-primary dark:text-tertiary border-3 min-h-[100dvh]">
        <div className="flex flex-col p-6 mx-8 md:mx-40 gap-y-7">
          <Meteors number={20} />
          <Header />
          <Description />
          <Tabs />
        </div>
      </div>
    </AppContextProvider>
  );
};

export default App;
