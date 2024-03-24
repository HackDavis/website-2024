import styles from '../carousel.module.scss';
import { PrevButton, NextButton } from './CarouselArrowButtons';

export type CarouselTextProps = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const CarouselText = ({ props }: { props: CarouselTextProps }) => {
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = props;

  return (
    <div className={styles.embla__text_section}>
      <h1 className={styles.embla__text}>From the archive</h1>
      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          {/*contains next and prev buttons that are only visible on desktop view */}
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};
