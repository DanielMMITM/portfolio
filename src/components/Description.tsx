import { CONTACT_EN, SELF_DESCRIPTION_EN } from '@/constants/english';
import { CONTACT_ES, SELF_DESCRIPTION_ES } from '@/constants/spanish';
import { useAppContext } from '@/context/AppContext';
import Profile from '@/assets/images/profile.webp';
import { contactInfo } from '@/data/contactInfo';

export const Description = () => {
  const { english } = useAppContext();

  return (
    <section className="flex flex-col md:flex-row items-center min-h-[30dvh] mt-15 justify-evenly gap-6 border-b-2 border-b-primary dark:border-b-secondary z-10">
      <div className="flex shrink-0 md:self-start">
        <img
          src={Profile}
          alt="Edgar Profile Picture"
          className="rounded-full w-40 h-40 object-cover object-top"
        />
      </div>
      <div className="flex flex-col gap-y-10 md:max-w-[50dvw]">
        <h1 className="min-h-14 text-5xl font-extrabold bg-clip-text text-transparent text-center md:text-start bg-gradient-to-r from-secondaryLight to-tertiaryLight dark:from-secondary dark:to-tertiary">
          Edgar Daniel Martínez Morales
        </h1>
        <div className="-mt-4">
          <h2 className="text-md font-bold">
            {english ? CONTACT_EN : CONTACT_ES}
          </h2>
          <div className="flex gap-2 mt-2">
            {contactInfo?.map(({ id, icon, name, link, mailFlag }) => (
              <a
                key={id}
                className="flex gap-2 py-1 px-2 rounded-lg dark:bg-secondary/25  dark:hover:bg-secondary/65 bg-secondaryLight/25 hover:bg-secondaryLight/55 shadow-inner"
                href={mailFlag ? `mailto:${link}` : link}
                target="_blank"
              >
                <img src={icon} alt="" className="w-3" />
                <span className="text-sm">{name}</span>
              </a>
            ))}
          </div>
        </div>
        <p className="min-w-[30dvw] mb-20">
          {english ? SELF_DESCRIPTION_EN : SELF_DESCRIPTION_ES}
        </p>
      </div>
    </section>
  );
};
