'use client';
import React, { useState, useEffect } from 'react';
import styles from './Sponsor.module.scss';
import Image from 'next/image';

const images = [
  '/about-us-icon/Polaroid1.png',
  '/about-us-icon/Polaroid2.png',
  '/about-us-icon/Polaroid3.png',
  '/about-us-icon/Polaroid4.png',
  '/about-us-icon/Polaroid5.png',
];

interface PolaroidStackProps {
  images: string[];
  index: number;
}

const PolaroidStack = ({ images }: PolaroidStackProps) => {
  const [stack, setStack] = useState<string[]>(images);
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
          src="/about-us-icon/cow and duck.svg"
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
