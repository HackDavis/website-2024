import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import { CarouselProgressSection } from './CarouselProgressSection';
import styles from './embla.module.scss';

type CarouselProps = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<CarouselProps> = (props) => {
  const { slides, options } = props;
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

  const myProps = {
    scrollProgress: scrollProgress,
    moveProgressAmount: moveProgressAmount,
    handleProgressBarClick: handleProgressBarClick,
    prevBtnDisabled: prevBtnDisabled,
    nextBtnDisabled: nextBtnDisabled,
    onPrevButtonClick: onPrevButtonClick,
    onNextButtonClick: onNextButtonClick,
  };

  return (
    <div className={styles.embla}>
      <div className={styles.embla__text_section}>
        <h1 className={styles.embla__text}>From the archive</h1>
        <div className={styles.embla__controls}>
          <div className={styles.embla__buttons}>
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>

      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((image, index) => (
            <div className={styles.embla__slide} key={index}>
              {image}
            </div>
          ))}
        </div>
      </div>

      <CarouselProgressSection props={myProps} />
    </div>
  );
};

export default EmblaCarousel;
