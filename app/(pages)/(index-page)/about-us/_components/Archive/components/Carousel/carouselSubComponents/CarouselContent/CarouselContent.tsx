import { ReactNode } from 'react';
import styles from './CarouselContent.module.scss';

export type CarouselContentProps = {
  slides: ReactNode[];
  emblaRef: any;
};

export const CarouselContent = ({ props }: { props: CarouselContentProps }) => {
  const { slides, emblaRef } = props;

  return (
    <div className={styles.carousel__viewport} ref={emblaRef}>
      <div className={styles.carousel__container}>
        {slides.map((image, index) => (
          <div className={styles.carousel__slide} key={index}>
            {image}
          </div>
        ))}
      </div>
    </div>
  );
};
