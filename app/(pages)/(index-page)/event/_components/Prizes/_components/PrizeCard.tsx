import Image from 'next/image';
import { useState } from 'react';
import Trophy from 'public/index/PrizeList/trophy.png';
import Plus from 'public/index/PrizeList/plus.png';
import styles from './PrizeCard.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselDots from './carouselDots/CarouselDots';

interface PrizeCardProps {
  name: string;
  prizeImages: StaticImport[];
  prizeNames: string[];
}

export default function PrizeCard({
  name,
  prizeImages,
  prizeNames,
}: PrizeCardProps) {
  const [moveDot, setMoveDot] = useState<boolean>(false);

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
    setMoveDot(true);
  };

  const handleMouseLeave = () => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
    setMoveDot(false);
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

          {prizeImages.length > 1 && ( // adds dots only for multiple prizes
            <CarouselDots moveDot={moveDot} />
          )}
        </div>
        <div className={styles.info}>
          <div>
            <h3 className={styles.header}>{name}</h3>
            <div className={styles.prizes}>
              {prizeNames.map((name, index) => (
                <div key={index} className={styles.place}>
                  <Image src={Trophy} alt="Trophy" className={styles.trophy} />
                  {prizeNames.length > 1 && index == 0 && (
                    <p className={styles.placeText}>{`1st place: ${name}`}</p>
                  )}
                  {prizeNames.length > 1 && index == 1 && (
                    <p className={styles.placeText}>{`2nd place: ${name}`}</p>
                  )}
                  {prizeNames.length == 1 && (
                    <p className={styles.placeText}>{name}</p>
                  )}
                </div>
              ))}
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
