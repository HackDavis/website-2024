'use client';
import React, { useState, useEffect } from 'react';
import styles from './Sponsor.module.scss';
import Image, { StaticImageData } from 'next/image';
import Cow_and_duck from '/public/about-us-icon/cow_and_duck.png';
import CountUp from '@components/CountUp/CountUp';
import Polaroid1 from '/public/about-us-icon/Polaroid1.png';
import Polaroid2 from '/public/about-us-icon/Polaroid2.png';
import Polaroid3 from '/public/about-us-icon/Polaroid3.png';
import Polaroid4 from '/public/about-us-icon/Polaroid4.png';
import Polaroid5 from '/public/about-us-icon/Polaroid5.png';

const images = [Polaroid1, Polaroid2, Polaroid3, Polaroid4, Polaroid5];

const hdStats = [
  { stat: 140, text: 'projects', duration: 2000 },
  { stat: 750, text: 'hackers', suffix: '+', duration: 2000 },
  { stat: 10, text: 'prizes', prefix: '$', suffix: 'k+', duration: 2000 },
  { stat: 24, text: 'hours', duration: 2000 },
];

interface PolaroidStackProps {
  images: StaticImageData[];
  index: number;
}

const PolaroidStack = ({ images }: PolaroidStackProps) => {
  const [zIndices, setZIndices] = useState<number[]>([5, 4, 3, 2, 1]);
  const [swipe, setSwipe] = useState<boolean>(false);

  const swipeCard = (swipe: boolean, index: number) => {
    if (swipe && index == 5) {
      return `${styles.swipe} ${styles.polaroid}`;
    } else {
      return `${styles.polaroid}`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newZIndices = [...zIndices];
      const removed = newZIndices.splice(4, 1);
      newZIndices.unshift(removed[0]);

      setTimeout(() => {
        setSwipe(true);
      }, 1000);
      setTimeout(() => {
        setZIndices(newZIndices);
        setSwipe(false);
      }, 3000);
    }, 3000);

    return () => clearInterval(interval);
  }, [zIndices, swipe]);

  return (
    <div className={styles.stack}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Polaroid ${index}`}
          className={swipeCard(swipe, zIndices[index])}
          style={{
            zIndex: zIndices[index],
          }}
        />
      ))}
    </div>
  );
};

export default function Sponsor() {
  return (
    <div className={styles['sponsor-container']}>
      <div className={styles.content}>
        <div className={styles['info-container']}>
          <div className={styles['text-container']}>
            <div className={styles['numbers-words-container']}>
              {hdStats.map((item) => (
                <div key={item.text} className={styles['number-word-pair']}>
                  <span className={styles.number}>
                    <CountUp
                      end={item.stat}
                      duration={item.duration}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  </span>
                  <span className={styles.word}>{item.text}</span>
                </div>
              ))}
            </div>
            <button className={styles.button}>
              <span className={styles['button-words']}>Sponsor 2024</span>
            </button>
          </div>
          <div className={styles.cow_duck}>
            <Image src={Cow_and_duck} alt="Cow and duck" layout="responsive" />
          </div>
        </div>
        <PolaroidStack images={images} index={0} />
      </div>
    </div>
  );
}
