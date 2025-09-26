import { Header } from '@/components/Header';
import { AppContextProvider } from '@/context/AppContext';
import Meteors from '@/components/Meteors';
import companyDefaultLogo from '@/assets/images/defaultLogo.webp';
import BentoGrid from './components/Bento/BentoGrid';
import BentoCard from './components/Bento/BentoCard';

// document.documentElement.classList.toggle('dark');
const features = [
  {
    icon: companyDefaultLogo,
    name: 'About me',
    description: 'We automatically save your files as you type.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: 'lg:row-start-1 lg:row-end-5 lg:col-start-1 lg:col-end-2',
  },
  {
    icon: companyDefaultLogo,
    name: 'Experience',
    description: 'We automatically save your files as you type.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: 'lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-4',
  },
  {
    icon: companyDefaultLogo,
    name: 'Technologies',
    description:
      'Get notified when someone shares a file or mentions you in a comment.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: 'lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-5',
  },
  {
    icon: companyDefaultLogo,
    name: 'Projects',
    description: 'Use the calendar to filter your files by date.',
    href: '/',
    cta: 'Learn more',
    background: <img className="absolute -top-20 -right-20 opacity-60" />,
    className: 'lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-5',
  },
];

export const App = () => {
  return (
    <AppContextProvider>
      <div className="relative flex w-full flex-col overflow-hidden text-tertiaryLight dark:bg-primary dark:text-tertiary border-3 min-h-[100dvh]">
        <div className="flex flex-col p-6 mx-8 md:mx-20 gap-y-7">
          <Meteors number={20} />
          <Header />
          <BentoGrid className="lg:grid-rows-4 !min-h-[85dvh]">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </AppContextProvider>
  );
};

export default App;
