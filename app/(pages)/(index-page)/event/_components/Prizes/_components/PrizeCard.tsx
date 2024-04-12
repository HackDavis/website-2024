'use client';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import Trophy from 'public/index/PrizeList/trophy.png';
import styles from './PrizeCard.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import useEmblaCarousel from 'embla-carousel-react';
import CarouselDots from './carouselDots/CarouselDots';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

interface PrizeCardProps {
  name: string;
  prizeImages: StaticImport[];
  prizeNames: string[];
  criteria: string;
}

export default function PrizeCard({
  name,
  prizeImages,
  prizeNames,
  criteria,
}: PrizeCardProps) {
  const [moveDot, setMoveDot] = useState<boolean>(false);

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      dragFree: false,
      skipSnaps: false,
      watchDrag: width > 760 ? false : true,
    },
    []
  );

  const changeDots = useCallback((emblaApi: any) => {
    setMoveDot(!Math.round(emblaApi.scrollProgress()));
  }, []);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', changeDots);
    }
  }, [changeDots, emblaApi]);

  const handleMouseEnter = () => {
    if (emblaApi && width > 760) {
      emblaApi.scrollNext();
    }
  };

  const handleMouseLeave = () => {
    if (emblaApi && width > 760) {
      emblaApi.scrollPrev();
    }
  };

  return (
    <Accordion sx={{ padding: '0px', borderRadius: '10px' }}>
      <AccordionSummary sx={{ padding: '0px', borderRadius: '100px' }}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.info}>
              <div>
                <h3 className={styles.header}>{name}</h3>
                <div className={styles.prizes}>
                  {prizeNames.map((name, index) => (
                    <div key={index} className={styles.place}>
                      <Image
                        src={Trophy}
                        alt="Trophy"
                        className={styles.trophy}
                      />
                      {prizeNames.length > 1 && index == 0 && (
                        <p
                          className={styles.placeText}
                        >{`1st place: ${name}`}</p>
                      )}
                      {prizeNames.length > 1 && index == 1 && (
                        <p
                          className={styles.placeText}
                        >{`2nd place: ${name}`}</p>
                      )}
                      {prizeNames.length == 1 && (
                        <p className={styles.placeText}>{name}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.eligibility}>
                <Image
                  src="/index/PrizeList/arrowRight.svg"
                  alt="arrow up"
                  width={4.5}
                  height={9}
                />
                <p className={styles.eligibilityText}>ELIGIBILITY CRITERIA</p>
              </div>
            </div>
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
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '0px 24px 24px 24px' }}>
        <div className={styles.criteriaContainer}>
          <p className={styles.criteriaContent}>{criteria}</p>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
