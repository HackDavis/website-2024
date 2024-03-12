'use client';
import React, { useState, useEffect } from 'react';
import styles from './Sponsor.module.scss';
import Image, { StaticImageData } from 'next/image';
import Cow_and_duck from '/public/about-us-icon/Cow_and_duck.svg';
import Polaroid1 from '/public/about-us-icon/Polaroid1.png';
import Polaroid2 from '/public/about-us-icon/Polaroid2.png';
import Polaroid3 from '/public/about-us-icon/Polaroid3.png';
import Polaroid4 from '/public/about-us-icon/Polaroid4.png';
import Polaroid5 from '/public/about-us-icon/Polaroid5.png';

const images = [Polaroid1, Polaroid2, Polaroid3, Polaroid4, Polaroid5];

interface PolaroidStackProps {
  images: StaticImageData[];
  index: number;
}

const PolaroidStack = ({ images }: PolaroidStackProps) => {
  const [stack, setStack] = useState<StaticImageData[]>(images);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    // This interval will highlight and then move the top image to the back every 5 seconds
    const interval = setInterval(() => {
      if (stack.length > 1) {
        // Ensure there are at least 2 images to cycle through
        setActiveIndex(0); // Highlight the top image

        // Wait for a short delay before moving the image to simulate highlight effect
        setTimeout(() => {
          const newStack = [...stack];
          const removed = newStack.splice(0, 1); // Remove the first element
          newStack.push(removed[0]); // Add it to the end
          setStack(newStack); // Update the stack
          setActiveIndex(null); // Reset active index
        }, 2000); // Adjust this delay based on your highlight duration
      }
    }, 1500); // Increase interval to account for highlight delay

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [stack]); // Depend on 'stack' so the interval uses the latest state

  useEffect(() => {
    // Reset stack on scroll away
    const handleScroll = () => {
      setStack(images);
      setActiveIndex(null);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images]); // Depend on 'images' to reset stack to initial images

  // handleImageClick remains the same, used for onClick events if needed

  return (
    <div className={styles.stack}>
      {stack.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Polaroid ${index}`}
          className={styles.polaroid}
          style={{
            zIndex: activeIndex === index ? 999 : stack.length - index,
            transform:
              activeIndex === index ? 'translateY(-20px) scale(1.1)' : '',
            transition: 'transform 0.9s ease, z-index 0s',
          }}
        />
      ))}
    </div>
  );
};

const Sponsor = () => {
  console.log('photo carousel?');
  return (
    <div className={styles['sponsor-container']}>
      <PolaroidStack images={images} index={0} />
      <div className={styles['numbers-words-container']}>
        <div className={styles['number-word-pair']}>
          <span className={styles.number}>140+</span>
          <span className={styles.word}>projects</span>
        </div>
        <div className={styles['number-word-pair']}>
          <span className={styles.number}>750+</span>
          <span className={styles.word}>hackers</span>
        </div>
        <div className={styles['number-word-pair']}>
          <span className={styles.number}>$15k+</span>
          <span className={styles.word}>prizes</span>
        </div>
        <div className={styles['number-word-pair']}>
          <span className={styles.number}>36</span>
          <span className={styles.word}>hours</span>
        </div>
      </div>
      <button className={styles.button}>
        <span className={styles['button-words']}>Sponsor 2024</span>
      </button>
      <div className={styles.cow_duck}>
        <Image
          src={Cow_and_duck}
          alt="Cow and duck"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            marginTop: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default Sponsor;
