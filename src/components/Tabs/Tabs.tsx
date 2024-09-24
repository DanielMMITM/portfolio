import { useAppContext } from '@/context/AppContext';
import { TabsInfo } from './TabsInfo';
import { Experience } from './Experience';

export const Tabs = () => {
  const { selectedTab } = useAppContext();

  return (
    <section>
      <TabsInfo />
      {selectedTab === 1 && <Experience />}
    </section>
  );
};
