import styles from '../carousel.module.scss';
import { PrevButton, NextButton } from './CarouselArrowButtons';

export type CarouselProgressProps = {
  scrollProgress: number;
  moveProgressAmount: number;
  handleProgressBarClick: (event: any) => void;
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const CarouselProgress = ({
  props,
}: {
  props: CarouselProgressProps;
}) => {
  const {
    scrollProgress,
    moveProgressAmount,
    handleProgressBarClick,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = props;

  return (
    <div className={styles.embla__progress_section}>
      {/* displays a previous button next to the bar on mobile */}
      <div className={styles.prev_button_mobile}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      </div>

      {/* progress bar that is always displayed */}
      <div className={styles.embla__progress} onClick={handleProgressBarClick}>
        <div
          className={styles.embla__progress__bar}
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
