import React, { ReactNode } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import useEmblaCarousel from 'embla-carousel-react';

import styles from './Carousel.module.scss';

// imports defined from other files to modularize code
import { CarouselProgress } from './carouselSubComponents/CarouselProgress/CarouselProgress';
import { CarouselText } from './carouselSubComponents/CarouselText/CarouselText';
import { CarouselContent } from './carouselSubComponents/CarouselContent/CarouselContent';
import type { CarouselProgressProps } from './carouselSubComponents/CarouselProgress/CarouselProgress';
import type { CarouselTextProps } from './carouselSubComponents/CarouselText/CarouselText';
import type { CarouselContentProps } from './carouselSubComponents/CarouselContent/CarouselContent';

type CarouselProps = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel = (props: CarouselProps) => {
  const { slides, options } = props;

  // used to gain access to API for the library, also enables scroll movement
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin({}),
  ]);

  const carouselProgressProps: CarouselProgressProps = {
    emblaApi: emblaApi,
  };

  const carouselTextProps: CarouselTextProps = {
    emblaApi: emblaApi,
  };

  const carouselContentProps: CarouselContentProps = {
    slides: slides,
    emblaRef: emblaRef,
  };

  return (
    <div className={styles.carousel}>
      {/* contains text + arrow buttons*/}
      <CarouselText props={carouselTextProps} />

      <CarouselContent props={carouselContentProps} />

      {/* contains progres bar + arrow buttons*/}
      <CarouselProgress props={carouselProgressProps} />
    </div>
  );
};

export default Carousel;
