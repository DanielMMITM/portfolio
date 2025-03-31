import { projects } from '@/data/projects';
import { MagicCard } from '@/components/MagicCard';
import { useAppContext } from '@/context/AppContext';

export const Projects = () => {
  const { darkMode, english } = useAppContext();
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch gap-4 mt-10">
      {projects.map(({ id, title, banner, descEN, descES, technologies }) => (
        <MagicCard
          key={id}
          className="col-span-1 flex-col justify-start shadow-2xl max-w-[70rem]"
          gradientColor={darkMode ? '#f4619755' : '#2364aa50'}
        >
          <img
            src={banner}
            alt=" Project banner"
            className="rounded-t-[.78rem] h-72 w-full object-cover object-left-top"
          />
          <h1 className="mt-4 px-4 text-lg font-bold dark:text-white">
            {title}
          </h1>
          <div className="flex flex-wrap mt-4 px-4">
            {technologies.map(({ id, name, icon }) => (
              <div
                key={id}
                className="flex m-1 py-1 px-2 border rounded-xl border-primary dark:border-white items-center"
              >
                <img src={icon} alt={`${name} icon`} className="w-4 h-4 mr-2" />
                <span className="text-inherit">{name}</span>
              </div>
            ))}
          </div>
          <p className="text-inherit p-4">{english ? descEN : descES}</p>
        </MagicCard>
      ))}
    </section>
  );
};
