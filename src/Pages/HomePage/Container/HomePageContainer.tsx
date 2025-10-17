import HomepageComponent from '@pages/HomePage/component';
import { useAppDispatch, useAppSelector } from '@/store/reduxHook.ts';
import * as homepageSlice from '../slice/slice.ts';

const HomePageContainer = (props: any) => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state?.productData?.payload);
  const productLoading = useAppSelector((state) => state?.productData?.loading);

  props = { ...props, products, productLoading };
  const getProducts = () => {
    return dispatch(homepageSlice.getProducts());
  };

  return <HomepageComponent {...props} getProducts={getProducts} />;
};
export default HomePageContainer;
