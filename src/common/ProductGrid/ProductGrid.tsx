import productGridStyles from './ProductGrid.module.scss';
import image from '@assets/images/test.jpeg';
import { memo } from 'react';
import { HeartCardSvg, QuickViewSvg } from '@assets/svg';
import Button from '@components/Button/Button.tsx';
import Loader from '@components/Loader/Loader.tsx';
import { useNavigate } from 'react-router-dom';

const ProductGrid = (props: any) => {
  const navigate = useNavigate();
  const { products, productLoading } = props;
  return (
    <div className={productGridStyles?.product_container}>
      <div className={productGridStyles?.product_grid}>
        {productLoading ? (
          <Loader length={6} />
        ) : (
          products?.length > 0 &&
          products?.map((productItems: any, index: number) => {
            return (
              <div
                id={`test-product-${productItems._id + index}`}
                className={productGridStyles?.product_card}
                key={productItems._id}
              >
                <div className={productGridStyles?.product_image_wrapper}>
                  <div className={productGridStyles?.product_image}>
                    <img src={image} alt="Product 1" />
                    <div className={productGridStyles?.discount_badge}>
                      -15%
                    </div>
                    <div className={productGridStyles?.hover_icons}>
                      <div className={productGridStyles?.icon}>
                        <HeartCardSvg />
                      </div>
                      '
                      <div className={productGridStyles?.icon}>
                        <QuickViewSvg />
                      </div>
                    </div>
                  </div>
                  <Button
                    title={`🛒 Select Options`}
                    className={productGridStyles?.select_button}
                    onClickHandler={() =>
                      navigate(`/product/${productItems?._id}`)
                    }
                  />
                </div>

                <div className={productGridStyles?.product_title}>
                  {productItems?.name}
                </div>
                <div className={productGridStyles?.product_price}>
                  <span className={productGridStyles?.old_price}>
                    ${productItems?.price}
                  </span>
                  <span className={productGridStyles?.new_price}>
                    ${productItems?.price}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default memo(ProductGrid);
