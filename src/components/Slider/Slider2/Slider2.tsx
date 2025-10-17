import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-ignore
import 'swiper/css';
import SliderStyles from '../Slider.module.scss';
import watchsmall from '@assets/images/watchsmall.png';
import blower2 from '@assets/images/blower2.png';
import Headphonesmall from '@assets/images/Headphonesmall.png';
import smartglass from '@assets/images/smartglass.png';
import Earcare from '@assets/images/Earcare.png';

const categories = [
  { name: 'Watch', image: watchsmall },
  { name: 'Headphones', image: Headphonesmall },
  { name: 'Driers', image: blower2 },
  { name: 'Smart Glass', image: smartglass },
  { name: 'Ear Care', image: Earcare },
];

const Slider2 = () => {
  return (
    <div className={SliderStyles.customSlider1}>
      <Swiper
        loop
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20, centeredSlides: true },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 32 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1440: { slidesPerView: 5, spaceBetween: 10 },
          2560: { slidesPerView: 5, spaceBetween: 50 },
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index} style={{ width: '249px' }}>
            <div
              className={SliderStyles.circleContent}
              id={'childSlideContent'}
            >
              <img src={cat.image} alt={cat.name} />
              <span>{cat.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Slider2;
