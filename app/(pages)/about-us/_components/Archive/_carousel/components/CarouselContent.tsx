import { ReactNode } from 'react';
import styles from '../carousel.module.scss';

export type CarouselContentProps = {
  slides: ReactNode[];
  emblaRef: any;
};

export const CarouselContent = ({ props }: { props: CarouselContentProps }) => {
  const { slides, emblaRef } = props;

  return (
    <div className={styles.embla__viewport} ref={emblaRef}>
      <div className={styles.embla__container}>
        {slides.map((image, index) => (
          <div className={styles.embla__slide} key={index}>
            {image}
          </div>
        ))}
      </div>
    </div>
  );
};
