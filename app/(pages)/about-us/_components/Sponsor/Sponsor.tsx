'use client';
import React, { useState, useEffect } from 'react';
import styles from './Sponsor.module.scss';

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

  const handleImageClick = (index: number) => {
    // Set the active image to pop up
    setActiveIndex(index);
    document
      .querySelectorAll('.your-image-class')
      [index].classList.add('image-to-back');

    // Schedule the image to move to the back after a delay
    setTimeout(() => {
      document
        .querySelectorAll('.your-image-class')
        [index].classList.remove('image-to-back');
      // Only move to back if the image is still active
      setActiveIndex(null); // Optionally reset the active index, or handle it as per your logic
      const newStack = [...stack];
      const removed = newStack.splice(index, 1);
      newStack.push(removed[0]); // Move to the back of the stack
      setStack(newStack);
    }, 2000); // Delay of 1 second
  };

  // Reset stack on scroll away
  useEffect(() => {
    const handleScroll = () => {
      setStack(images);
      setActiveIndex(null); // Also reset the active index
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [images]);

  return (
    <div className={styles.stack}>
      {stack.map((image, index) => (
        <img
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
          onClick={() => handleImageClick(index)}
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
        <img
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
