import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="bg-primaryLight text-font_primaryLight dark:bg-primary dark:text-font_primary border-3 min-h-[100dvh]">
      <div className="flex flex-col p-6 mx-10 md:mx-44 gap-y-7 border-2">
        <Header />
        <h1>Edgar Martinez</h1>
      </div>
    </div>
  );
};

export default App;
