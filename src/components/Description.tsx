import { SELF_DESCRIPTION_EN } from '../constants/english';
import { SELF_DESCRIPTION_ES } from '../constants/spanish';
import { useAppContext } from '../context/AppContext';
import Profile from '../assets/images/profile.webp';

export const Description = () => {
  const { english } = useAppContext();

  return (
    <section className="flex flex-col md:flex-row items-center min-h-[30dvh] mt-15 justify-evenly gap-6 border-b-2 border-b-primary dark:border-b-secondary">
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
        <p className="min-w-[30dvw] mb-20">
          {english ? SELF_DESCRIPTION_EN : SELF_DESCRIPTION_ES}
        </p>
      </div>
    </section>
  );
};
