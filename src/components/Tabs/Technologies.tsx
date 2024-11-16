import { technologies } from '@/data/technologies';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { swiperParams } from '@/data/swiper';
import { MagicCard } from '../MagicCard';
import { useAppContext } from '@/context/AppContext';
import { TECHNOLOGIES_DESC_EN } from '@/constants/english';
import { TECHNOLOGIES_DESC_ES } from '@/constants/spanish';

export const Technologies = () => {
  const { darkMode, english } = useAppContext();

  return (
    <section className="mt-10">
      <p className="mb-10">
        {english ? TECHNOLOGIES_DESC_EN : TECHNOLOGIES_DESC_ES}
      </p>
      <Swiper {...swiperParams}>
        {technologies.map(({ id, icon, name }) => (
          <SwiperSlide key={id} className="flex h-auto">
            <MagicCard
              key={id}
              className="flex-col shadow-2xl justify-center items-center p-4 w-full text-center"
              gradientColor={darkMode ? '#f4619755' : '#2364aa50'}
            >
              <img width="64" height="64" alt="" src={icon} />
              <figcaption className="text-sm font-medium dark:text-white mt-2">
                {name}
              </figcaption>
            </MagicCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
