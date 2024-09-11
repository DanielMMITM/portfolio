import { Description } from '@/components/Description';
import { Header } from '@/components/Header';
import { TabsInfo } from '@/components/TabsInfo';
import { AppContextProvider } from '@/context/AppContext';
import Meteors from '@/components/Meteors';

document.documentElement.classList.toggle('dark');

export const App = () => {
  return (
    <AppContextProvider>
      <div className="relative flex w-full flex-col overflow-hidden  text-tertiaryLight dark:bg-primary dark:text-tertiary border-3 min-h-[100dvh] ">
        <div className="">
          <div className="flex flex-col p-6 mx-8 md:mx-40 gap-y-7 border-2">
            <Meteors number={30} />
            <Header />
            <Description />
            <TabsInfo />
          </div>
        </div>
      </div>
    </AppContextProvider>
  );
};

export default App;
