import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
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

  // used to move the progress bar as the user moves through the carousel
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
  }, []);

  const handleProgressBarClick = (event: any) => {
    const progressBarWidth = event.target.offsetWidth;
    const clickedProgressPixels = event.nativeEvent.offsetX;
    const clickedProgressPercent = clickedProgressPixels / progressBarWidth;

    if (!emblaApi) return;
    const snapList = emblaApi.scrollSnapList();
    const indexToMoveTo = Math.floor(snapList.length * clickedProgressPercent);
    emblaApi.scrollTo(indexToMoveTo);
  };

  // used to acheive different behaviors based on screen width
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize(); // Update window size initially

    // Add event listener to update window size on resize
    window.addEventListener('resize', updateWindowSize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  // determines how much the progress bar moves per button click
  const moveProgressAmount = windowSize.width > 768 ? 63 : 54;

  // *** everything below until the props is pasted from an online template ***
  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('scroll', onScroll);
  }, [emblaApi, onScroll]);

  const carouselProgressProps: CarouselProgressProps = {
    scrollProgress: scrollProgress,
    moveProgressAmount: moveProgressAmount,
    handleProgressBarClick: handleProgressBarClick,
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
