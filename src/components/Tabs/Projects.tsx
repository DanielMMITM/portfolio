import { projects } from '@/data/projects';
import { MagicCard } from '../MagicCard';
import { useAppContext } from '@/context/AppContext';

export const Projects = () => {
  const { darkMode, english } = useAppContext();
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-4 mt-10">
      {projects.map(({ id, banner, descEN, descES, technologies }) => (
        <MagicCard
          key={id}
          className="flex-col justify-start shadow-2xl"
          gradientColor={darkMode ? '#f4619725' : '#2364aa25'}
        >
          <img
            src={banner}
            alt=" Project banner"
            className="rounded-tl-xl rounded-tr-xl h-72 w-full object-cover object-left-top"
          />
          <div className="flex flex-wrap mt-4 px-4 text-gray-900 dark:text-gray-300">
            {technologies.map(({ id, name, icon }) => (
              <div
                key={id}
                className="flex m-1 p-2 border rounded-xl border-primary dark:border-white items-center"
              >
                <img src={icon} alt={`${name} icon`} className="w-4 h-4 mr-2" />
                <span className="text-inherit">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-inherit p-4">{english ? descEN : descES}</p>
        </MagicCard>
      ))}
    </div>
  );
};
