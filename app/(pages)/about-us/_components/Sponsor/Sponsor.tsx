'use client';
import React, { useState, useEffect } from 'react';
import styles from './Sponsor.module.scss';
import Image, { StaticImageData } from 'next/image';
import Cow_and_duck from '/public/about-us-icon/cow_and_duck.png';
import Polaroid1 from '/public/about-us-icon/Polaroid1.png';
import Polaroid2 from '/public/about-us-icon/Polaroid2.png';
import Polaroid3 from '/public/about-us-icon/Polaroid3.png';
import Polaroid4 from '/public/about-us-icon/Polaroid4.png';
import Polaroid5 from '/public/about-us-icon/Polaroid5.png';

const images = [Polaroid1, Polaroid2, Polaroid3, Polaroid4, Polaroid5];
// const images = [Polaroid1, Polaroid2];

const hdStats = [
  {
    number: '140+',
    word: 'projects',
  },
  {
    number: '750+',
    word: 'hackers',
  },
  {
    number: '$15k+',
    word: 'prizes',
  },
  {
    number: '36',
    word: 'hours',
  },
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
                <div key={item.word} className={styles['number-word-pair']}>
                  <span className={styles.number}>{item.number}</span>
                  <span className={styles.word}>{item.word}</span>
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
