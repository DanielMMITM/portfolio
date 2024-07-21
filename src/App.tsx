import { Description } from './components/Description';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="bg-primaryLight text-tertiaryLight dark:bg-primary dark:text-tertiary border-3 min-h-[100dvh]">
      <div className="flex flex-col p-6 mx-10 md:mx-44 gap-y-7 border-2">
        <Header />
        <Description />
      </div>
    </div>
  );
};

export default App;
