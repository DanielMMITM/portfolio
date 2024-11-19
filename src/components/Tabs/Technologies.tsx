import { technologies } from '@/data/technologies';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import { swiperParams } from '@/data/swiper';
import { MagicCard } from '@/components/MagicCard';
import { useAppContext } from '@/context/AppContext';
import { TECHNOLOGIES_DESC_EN } from '@/constants/english';
import { TECHNOLOGIES_DESC_ES } from '@/constants/spanish';
import screenSize from '@/helpers/screenSize';

export const Technologies = () => {
  const { darkMode, english } = useAppContext();
  const isSmallScreen = screenSize('sm');

  return (
    <section className="mt-10">
      <p className="mb-10">
        {english ? TECHNOLOGIES_DESC_EN : TECHNOLOGIES_DESC_ES}
      </p>
      <Swiper slidesPerView={isSmallScreen ? 4 : 2} {...swiperParams}>
        {technologies.map(({ id, icon, name }) => (
          <SwiperSlide key={id} className="flex h-auto">
            <MagicCard
              key={id}
              className="flex-col shadow-2xl py-4 w-full"
              gradientColor={darkMode ? '#f4619755' : '#2364aa50'}
            >
              <div className="flex flex-col items-center justify-center">
                <img alt="" src={icon} className="w-10 h-10 sm:w-16 sm:h-16" />
                <figcaption className="text-sm font-medium dark:text-white mt-2">
                  {name}
                </figcaption>
              </div>
            </MagicCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
