import { SELF_DESCRIPTION_EN } from '../constants/english';
import { SELF_DESCRIPTION_ES } from '../constants/spanish';
import { useAppContext } from '../context/AppContext';

export const Description = () => {
  const { english } = useAppContext();

  return (
    <section className="flex min-h-[30dvh] mt-15">
      <div>
        <img src="" alt="" />
      </div>
      <div className="flex flex-col gap-y-10 md:max-w-[50dvw]">
        <h1 className="min-h-20 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-secondaryLight to-tertiaryLight dark:from-secondary dark:to-tertiary">
          Edgar Daniel Martínez Morales
        </h1>
        <p className="min-w-[30dvw]">
          {english ? SELF_DESCRIPTION_EN : SELF_DESCRIPTION_ES}
        </p>
      </div>
    </section>
  );
};
