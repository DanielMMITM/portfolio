import { TASKS } from '@/constants/english';
import { TAREAS } from '@/constants/spanish';
import { useAppContext } from '@/context/AppContext';
import { experience } from '@/data/experience';

export const Experience = () => {
  const { english, darkMode } = useAppContext();

  const formatDate = (date: string) => {
    const dateObject = new Date(date);
    const day =
      dateObject.getDate() < 10
        ? `0${dateObject.getDate()}`
        : dateObject.getDate();

    const month =
      dateObject.getMonth() + 1 < 10
        ? `0${dateObject.getMonth() + 1}`
        : dateObject.getMonth() + 1;

    const year = dateObject.getFullYear();

    return english ? `${year}/${month}/${day}` : `${day}/${month}/${year}`;
  };

  return (
    <section>
      {experience?.map((data) => (
        <div className="flex mt-10" key={data.id}>
          <div>
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
          </div>
          <div className="flex flex-col ml-10 basis-9/12">
            <div className="flex flex-col">
              <h1 className="dark:text-secondary text-secondaryLight font-bold">
                {data.employer}
              </h1>
              <h2 className="dark:text-secondary text-primary opacity-90 font-semibold">
                {data.jobTitle}
              </h2>
            </div>
            <h3 className="opacity-70 dark:text-slate-100 text-slate-900 font-semibold">{`${formatDate(data.startDate)} - ${formatDate(data.endDate)}`}</h3>
            <p className="font-semibold my-2">
              {english ? data.descEn : data.descES}
            </p>
            <h3 className="font-bold dark:text-secondary text-secondaryLight">
              {english ? TASKS : TAREAS}
            </h3>
            <ul className="list-disc">
              {data.tasks.map((task) => (
                <li key={task.id} className="list-item">
                  {english ? task.taskDescEN : task.taskDescES}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
