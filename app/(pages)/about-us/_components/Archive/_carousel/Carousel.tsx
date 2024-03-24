import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import useEmblaCarousel from 'embla-carousel-react';

import styles from './Carousel.module.scss';

// imports defined from other files to modularize code
import { usePrevNextButtons } from './components/CarouselArrowButtons/CarouselArrowButtons';
import { CarouselProgress } from './components/CarouselProgress/CarouselProgress';
import { CarouselText } from './components/CarouselText/CarouselText';
import { CarouselContent } from './components/CarouselContent/CarouselContent';
import type { CarouselProgressProps } from './components/CarouselProgress/CarouselProgress';
import type { CarouselTextProps } from './components/CarouselText/CarouselText';
import type { CarouselContentProps } from './components/CarouselContent/CarouselContent';

type CarouselProps = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
};

const Carousel = (props: CarouselProps) => {
  const { slides, options } = props;

  // everything below until the props is pasted from an online template
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    WheelGesturesPlugin({}),
  ]);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  const moveProgressAmount = windowSize.width > 768 ? 63 : 54;

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
    prevBtnDisabled: prevBtnDisabled,
    nextBtnDisabled: nextBtnDisabled,
    onPrevButtonClick: onPrevButtonClick,
    onNextButtonClick: onNextButtonClick,
  };

  const carouselTextProps: CarouselTextProps = {
    prevBtnDisabled: prevBtnDisabled,
    nextBtnDisabled: nextBtnDisabled,
    onPrevButtonClick: onPrevButtonClick,
    onNextButtonClick: onNextButtonClick,
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
