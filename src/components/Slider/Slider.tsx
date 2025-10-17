import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
// @ts-ignore
import 'swiper/css';
import SliderStyles from './Slider.module.scss';
import Button from '@components/Button/Button.tsx';
import Headphones from '../../assets/images/ImageHeadphone.png';
import watch from '@assets/images/watch.png';
import Dryer from '@assets/images/Dryer.png';

const slides = [
  {
    tag: 'NEW ARRIVAL',
    title: 'ANC C80D',
    desc: 'Bluetooth 5.0, detachable boom mic, 28‑hour battery, multipoint connectivity, soft foam cushions—perfect for remote work and calls',
    img: Headphones,
  },
  {
    tag: 'TRENDING',
    title: 'TG01/TGO5',
    desc:
      'Display: 1.39″, 360×360\n' +
      '\n' +
      'Chip & Memory: RTL8763EWE, ~578 KB RAM + 640 KB ROM + 128 MB flash \n' +
      'sztomstar.com\n' +
      '+15\n' +
      'sztomstar.com\n' +
      '+15\n' +
      'sztomstar.com\n' +
      '+15\n' +
      '\n' +
      'Sensor: HRS3605 heart rate; also includes compass and barometer, plus weather and sunrise/sunset via app \n' +
      '\n' +
      'Bluetooth: 5.2; pairs with Da Fit app \n' +
      '\n' +
      'Battery: 350 mAh',
    img: watch,
  },
  {
    tag: 'VIRAL',
    title: 'BM08',
    desc:
      'HighSpeed Brushless 52 Motor,' +
      '\n' +
      'Rotatory Speed: 80000 RPM, \n' +
      '\n' +
      'Body Material: Aluminium Alloy,',
    img: Dryer,
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const toggleExpanded = (index: number) => {
    setExpandedIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={SliderStyles.customSlider}>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        loop
        className={SliderStyles.swiperContainer}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div
              id={'slide-card' + idx}
              key={idx}
              className={SliderStyles.slideContent}
            >
              <div className={SliderStyles.textContent}>
                <span className={SliderStyles.badge}>{slide.tag}</span>
                <h2>{slide.title}</h2>
                <p
                  className={`${SliderStyles.description} ${
                    expandedIndices.includes(idx) ? SliderStyles.expanded : ''
                  }`}
                >
                  {slide.desc}
                </p>
                {slide.desc.length > 180 && (
                  <Button
                    title={
                      expandedIndices.includes(idx) ? 'SEE LESS' : 'SEE MORE'
                    }
                    onClickHandler={() => {
                      toggleExpanded(idx);
                    }}
                    className={` ${SliderStyles.readMoreButton}`}
                  />
                )}

                <div className={SliderStyles.buttons}>
                  <Button
                    title={'BUY NOW'}
                    onClickHandler={() => {
                      console.log('search clicked');
                    }}
                    className={` ${SliderStyles.buyNow}`}
                  />

                  <Button
                    title={'VIEW DETAILS'}
                    onClickHandler={() => {
                      console.log('search clicked');
                    }}
                    className={` ${SliderStyles.viewDetails}`}
                  />
                </div>
              </div>
              <div className={SliderStyles.imageContent}>
                <div className={SliderStyles.imageCircle}>
                  <img src={slide.img} alt="Product" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={SliderStyles.paginationDots}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`${SliderStyles.dot} ${idx === activeIndex ? SliderStyles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
