import { Autoplay, Navigation } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

export const swiperParams: SwiperOptions = {
  spaceBetween: 15,
  slidesPerView: 3,
  loop: true,
  modules: [Autoplay, Navigation],
  autoplay: {
    delay: 1500,
  },
};
