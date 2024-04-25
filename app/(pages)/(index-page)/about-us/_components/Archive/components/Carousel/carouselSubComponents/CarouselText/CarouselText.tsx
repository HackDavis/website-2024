import styles from './CarouselText.module.scss';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '../CarouselArrowButtons/CarouselArrowButtons';

export type CarouselTextProps = {
  emblaApi: any;
};

export const CarouselText = ({ props }: { props: CarouselTextProps }) => {
  const { emblaApi } = props;

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
