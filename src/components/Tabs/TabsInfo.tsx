import {
  EXPERIENCE_EN,
  PROJECTS_EN,
  TECHNOLOGIES_EN,
} from '@/constants/english';
import {
  EXPERIENCE_ES,
  PROJECTS_ES,
  TECHNOLOGIES_ES,
} from '@/constants/spanish';
import { useAppContext } from '@/context/AppContext';

export const TabsInfo = () => {
  const { english, selectedTab, setSelectedTab } = useAppContext();

  return (
    <div className="flex flex-col sm:flex-row justify-center">
      <button
        role="tab"
        type="button"
        className={`${selectedTab === 1 && 'custom-transition-force'} relative p-3 hover:dark:bg-primaryLight hover:dark:bg-opacity-5 hover:bg-secondaryLight hover:bg-opacity-5 after:h-1 after:w-1 after:bg-primary after:dark:bg-secondary custom-transition rounded-lg`}
        onClick={() => setSelectedTab(1)}
      >
        {english ? EXPERIENCE_EN : EXPERIENCE_ES}
      </button>
      <button
        role="tab"
        type="button"
        className={`${selectedTab === 2 && 'custom-transition-force'} relative p-3 hover:dark:bg-primaryLight hover:dark:bg-opacity-5 hover:bg-secondaryLight hover:bg-opacity-5 after:h-1 after:w-1 after:bg-primary after:dark:bg-secondary custom-transition rounded-lg`}
        onClick={() => setSelectedTab(2)}
      >
        {english ? PROJECTS_EN : PROJECTS_ES}
      </button>
      <button
        role="tab"
        type="button"
        className={`${selectedTab === 3 && 'custom-transition-force'} relative p-3 hover:dark:bg-primaryLight hover:dark:bg-opacity-5  hover:bg-secondaryLight hover:bg-opacity-5 after:h-1 after:w-1 after:bg-primary after:dark:bg-secondary custom-transition rounded-lg`}
        onClick={() => setSelectedTab(3)}
      >
        {english ? TECHNOLOGIES_EN : TECHNOLOGIES_ES}
      </button>
    </div>
  );
};
