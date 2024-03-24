import styles from '../Carousel.module.scss';
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
    <div className={styles.carousel__text_section}>
      <h1 className={styles.text_content}>From the archive</h1>
      <div className={styles.controls}>
        <div className={styles.buttons}>
          {/*contains next and prev buttons that are only visible on desktop view */}
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};
