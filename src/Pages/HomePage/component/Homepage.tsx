import React, { Fragment, useEffect } from 'react';
import Slider from '@components/Slider';
import Slider2 from '@components/Slider/Slider2';
import HomepageStyles from './Homepage.module.scss';
import type { HomepageProps } from '../types/homePage';
import ProductSection from '@components/ProductsSection/ProductsSection.tsx';

const HomepageComponent: React.FC<HomepageProps> = (props: any) => {
  const { getProducts, products, productLoading } = props;
  console.log('home', productLoading);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Fragment>
      <div
        id={'section-slider'}
        style={{
          width: '100%',
          height: '100%',
        }}
        className={''}
      >
        <Slider />
      </div>
      <section className={HomepageStyles?.Slider2Section}>
        <div
          id={'section-slider2'}
          className={HomepageStyles?.Slider2Container}
        >
          <Slider2 />
        </div>
      </section>
      <ProductSection products={products} productLoading={productLoading} />
    </Fragment>
  );
};

export default HomepageComponent;
