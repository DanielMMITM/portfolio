import { useAppContext } from '@/context/AppContext';
import { experience } from '@/data/experience';

export const Experience = () => {
  const { english } = useAppContext();

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
    <section className="mt-8">
      {experience?.map((data) => (
        <div className="flex" key={data.id}>
          <div>
            <img src={data.logo} alt="employer logo" />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <h1 className="dark:text-secondary text-secondaryLight font-bold">
                {data.employer} |
              </h1>
              <h2 className="dark:text-secondary text-primary opacity-90 font-semibold">
                {data.jobTitle}
              </h2>
            </div>
            <h3 className="opacity-70 dark:text-slate-100 text-slate-900 font-semibold">{`${formatDate(data.startDate)} - ${formatDate(data.endDate)}`}</h3>
          </div>
        </div>
      ))}
    </section>
  );
};
