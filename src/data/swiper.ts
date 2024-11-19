import { Autoplay } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const swiperParams: SwiperOptions = {
  spaceBetween: 15,
  loop: true,
  modules: [Autoplay],
  autoplay: {
    delay: 1000000,
  },
};
