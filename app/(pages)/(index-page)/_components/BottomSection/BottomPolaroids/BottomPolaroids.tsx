'use client';

import Image from 'next/image';
import styles from './BottomPolaroids.module.scss';
import { useState, useEffect } from 'react';

export default function BottomPolaroids() {
  const [polaroidUrls, setPolaroidUrls] = useState([
    '/index/Polaroids/final_Footer-img3.jpg',
    '/index/Polaroids/final_Footer-img2.jpg',
    '/index/Polaroids/final_Footer-img.jpg',
  ]);

  const [isHover, setIsHover] = useState(false);

  const polaroidClasses = [
    styles.backPolaroid, // Class for the left polaroid (index 0)
    styles.middlePolaroid, // Class for the center polaroid (index 1)
    styles.frontPolaroid, // Class for the right polaroid (index 2)
  ];

  const polaroidClassesStacked = [
    styles.backPolaroidStacked, // Class for the left polaroid (index 0)
    styles.middlePolaroidStacked, // Class for the center polaroid (index 1)
    styles.frontPolaroidStacked, // Class for the right polaroid (index 2)
  ];

  useEffect(() => {
    function rotateArray(arr: string[]) {
      setPolaroidUrls([arr[2], arr[0], arr[1]]); // Update the state with the new array
    }
    let intervalId: any;

    if (!isHover && window && window.innerWidth > 960) {
      intervalId = setInterval(() => {
        rotateArray(polaroidUrls); // Cycle through indices
      }, 3000); // Change interval to 5 seconds (5000 milliseconds)
    }

    return () => clearInterval(intervalId);
  }, [polaroidUrls, isHover]);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={styles.container}
    >
      <div className={styles.allPolaroids}>
        {polaroidUrls.map((polaroidUrl, index) => (
          <Image
            key={index}
            src={polaroidUrl}
            alt="serene forest scene in the night"
            width={4000}
            height={4000}
            className={
              isHover || (window && window.innerWidth) <= 960
                ? polaroidClasses[index]
                : polaroidClassesStacked[index]
            }
          />
        ))}
      </div>
    </div>
  );
}
