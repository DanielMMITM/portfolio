import { TASKS } from '@/constants/english';
import { TAREAS } from '@/constants/spanish';
import { useAppContext } from '@/context/AppContext';
import { experience } from '@/data/experience';
import { formatDate } from '@/helpers/formatDate';

export const Experience = () => {
  const { english, darkMode } = useAppContext();

  return experience?.map((data) => (
    <section
      className="flex flex-col justify-center items-center gap-10 sm:flex-row sm:justify-start sm:items-start sm:gap-0 mt-10"
      key={data.id}
    >
      <a href={data.branding.link} target="_blank">
        <img
          src={data.branding.logo}
          alt={data.branding.alt}
          width="120px"
          className={
            data.branding.lightModeHelp && !darkMode ? 'bg-primary' : ''
          }
        />
      </a>
      <div className="flex flex-col ml-10 basis-11/12">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex flex-col basis-6/12">
            <h1 className="dark:text-secondary text-secondaryLight font-bold">
              {data.employer}
            </h1>
            <h2 className="dark:text-secondary text-primary opacity-90 font-semibold">
              {data.jobTitle}
            </h2>
          </div>
          <h3 className="opacity-70 dark:text-slate-100 text-slate-900 font-semibold md:ml-auto">{`${formatDate(data.startDate)} - ${formatDate(data.endDate)}`}</h3>
        </div>
        <p className="font-semibold my-2">
          {english ? data.descEn : data.descES}
        </p>
        <h3 className="font-bold dark:text-secondary text-secondaryLight">
          {english ? TASKS : TAREAS}
        </h3>
        <ul className="list-disc pl-8">
          {data.tasks.map((task) => (
            <li key={task.id} className="list-item">
              {english ? task.taskDescEN : task.taskDescES}
            </li>
          ))}
        </ul>
      </div>
    </section>
  ));
};
