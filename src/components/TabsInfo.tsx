import { EXPERIENCE, PROJECTS, TECHNOLOGIES } from '../constants/english';
import { EXPERIENCIA, PROYECTOS, TECNOLOGIAS } from '../constants/spanish';
import { useAppContext } from '../context/AppContext';

export const TabsInfo = () => {
  const { english } = useAppContext();

  return (
    <div className="flex justify-center">
      <button
        role="tab"
        type="button"
        className="relative p-3 hover:bg-primaryLight hover:bg-opacity-5 after:h-1 after:w-1 after:bg-primary after:dark:bg-secondary custom-transition rounded-lg"
      >
        {english ? EXPERIENCE : EXPERIENCIA}
      </button>
      <button
        role="tab"
        type="button"
        className="relative p-3 hover:bg-primaryLight hover:bg-opacity-5 after:h-1 after:w-1 after:bg-primary after:dark:bg-secondary custom-transition rounded-lg"
      >
        {english ? PROJECTS : PROYECTOS}
      </button>
      <button
        role="tab"
        type="button"
        className="relative p-3 hover:bg-primaryLight hover:bg-opacity-5 after:h-1 after:w-1 after:bg-primary after:dark:bg-secondary custom-transition rounded-lg"
      >
        {english ? TECHNOLOGIES : TECNOLOGIAS}
      </button>
    </div>
  );
};
