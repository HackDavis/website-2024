import Image from 'next/image';
import Trophy from 'public/index/PrizeList/trophy.png';
import Plus from 'public/index/PrizeList/plus.png';
import styles from './PrizeCard.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import useEmblaCarousel from 'embla-carousel-react';

interface PrizeCardProps {
  name: string;
  prizeImages: StaticImport[];
}

export default function PrizeCard({ name, prizeImages }: PrizeCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      dragFree: false,
      skipSnaps: false,
      watchDrag: false,
    },
    []
  );

  const handleMouseEnter = () => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  };

  const handleMouseLeave = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageBackground}>
          <div className={styles.emblaWrapper} ref={emblaRef}>
            <div
              className={styles.emblaContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {prizeImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt="Trophy"
                  className={styles.prizeImage}
                />
              ))}
            </div>
          </div>
          <div className={styles.dotContainer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#123041" fillOpacity="1" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="none"
            >
              <circle cx="2" cy="2" r="2" fill="#123041" fillOpacity="0.5" />
            </svg>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <h3 className={styles.header}>{name}</h3>
            <div className={styles.prizes}>
              <div className={styles.place}>
                <Image src={Trophy} alt="Trophy" className={styles.trophy} />
                <p className={styles.placeText}>1st Place</p>
              </div>
              <div className={styles.place}>
                <Image src={Trophy} alt="Trophy" className={styles.trophy} />
                <p className={styles.placeText}>2nd Place</p>
              </div>
            </div>
          </div>
          <div className={styles.eligibility}>
            <p className={styles.eligibilityText}>ELIGIBILITY CRITERIA</p>
            <Image src={Plus} alt="Plus" className={styles.plus} />
          </div>
        </div>
      </div>
    </div>
  );
}
