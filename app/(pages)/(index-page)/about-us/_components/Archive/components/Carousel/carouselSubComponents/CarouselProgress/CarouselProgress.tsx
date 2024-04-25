'use client';
import { useState, useEffect } from 'react';
import styles from './CarouselProgress.module.scss';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '../CarouselArrowButtons/CarouselArrowButtons';
import { useProgress } from './useProgress';

export type CarouselProgressProps = {
  emblaApi: any;
};

export const CarouselProgress = ({
  props,
}: {
  props: CarouselProgressProps;
}) => {
  const { emblaApi } = props;

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const { scrollProgress, handleProgressBarClick } = useProgress(emblaApi);

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

  return (
    <div className={styles.carousel__progress_section}>
      {/* displays a previous button next to the bar on mobile */}
      <div className={styles.prev_button_mobile}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>

      {/* progress bar that is always displayed */}
      <div
        className={styles.carousel__progress}
        onClick={handleProgressBarClick}
      >
        <div
          className={styles.carousel__progress__bar}
          onClick={(event) => event.stopPropagation()}
          style={{
            transform: `translateX(${scrollProgress * moveProgressAmount}vw`,
          }}
        />
      </div>

      {/* displays a next button next to the bar on mobile */}
      <div className={styles.next_button_mobile}>
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};
