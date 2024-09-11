import { useState } from 'react';
import { EXPERIENCE, PROJECTS, TECHNOLOGIES } from '../constants/english';
import { EXPERIENCIA, PROYECTOS, TECNOLOGIAS } from '../constants/spanish';
import { useAppContext } from '../context/AppContext';

export const TabsInfo = () => {
  const { english } = useAppContext();
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="flex justify-center">
      <button
        role="tab"
        type="button"
        className={`${selectedTab === 1 && 'custom-transition-force'} relative p-3 hover:bg-primaryLight hover:bg-opacity-5 after:h-1 after:w-1 after:bg-primary after:dark:bg-secondary custom-transition rounded-lg`}
        onClick={() => setSelectedTab(1)}
      >
        {english ? EXPERIENCE : EXPERIENCIA}
      </button>
      <button
        role="tab"
        type="button"
        className={`${selectedTab === 2 && 'custom-transition-force'} relative p-3 hover:bg-primaryLight hover:bg-opacity-5 after:h-1 after:w-1 after:bg-primary after:dark:bg-secondary custom-transition rounded-lg`}
        onClick={() => setSelectedTab(2)}
      >
        {english ? PROJECTS : PROYECTOS}
      </button>
      <button
        role="tab"
        type="button"
        className={`${selectedTab === 3 && 'custom-transition-force'} relative p-3 hover:bg-primaryLight hover:bg-opacity-5 after:h-1 after:w-1 after:bg-primary after:dark:bg-secondary custom-transition rounded-lg`}
        onClick={() => setSelectedTab(3)}
      >
        {english ? TECHNOLOGIES : TECNOLOGIAS}
      </button>
    </div>
  );
};