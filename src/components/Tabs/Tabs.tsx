import { useAppContext } from '@/context/AppContext';
import { TabsInfo } from './TabsInfo';
import { Experience } from './Experience';
import { Projects } from './Projects';

export const Tabs = () => {
  const { selectedTab } = useAppContext();

  return (
    <section>
      <TabsInfo />
      {selectedTab === 1 && <Experience />}
      {selectedTab === 2 && <Projects />}
    </section>
  );
};
