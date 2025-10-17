import { Fragment, memo } from 'react';
import LoaderStyles from './Loader.module.scss';

const Loader = (props: any) => {
  const { length } = props;

  return (
    <Fragment>
      {Array.from({ length }).map((_, idx) => (
        <div key={idx} className={`${LoaderStyles?.skeletonCard}`}>
          <div className={`${LoaderStyles?.skeleton_image}`} />
          <div
            className={`${LoaderStyles?.skeleton_line} ${LoaderStyles?.short}`}
          />
          <div
            className={`${LoaderStyles?.skeleton_line} ${LoaderStyles?.long}`}
          />
          <div className={`${LoaderStyles?.skeleton_price}`} />
        </div>
      ))}
    </Fragment>
  );
};

export default memo(Loader);
