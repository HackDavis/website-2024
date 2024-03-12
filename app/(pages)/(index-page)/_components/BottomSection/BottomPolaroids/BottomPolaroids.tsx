'use client';

import Image, { StaticImageData } from 'next/image';
import styles from './BottomPolaroids.module.scss';
import { useState, useEffect } from 'react';

// statically import polaroids
import img3 from 'public/index/Polaroids/final_footer-img3.jpg';
import img2 from 'public/index/Polaroids/final_footer-img2.jpg';
import img1 from 'public/index/Polaroids/final_footer-img.jpg';

export default function BottomPolaroids() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    updateWindowSize(); // Update window size initially

    // Add event listener to update window size on resize
    window.addEventListener('resize', updateWindowSize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  const [polaroidUrls, setPolaroidUrls] = useState([img3, img2, img1]);

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
    function rotateArray(arr: StaticImageData[]) {
      setPolaroidUrls([arr[2], arr[0], arr[1]]); // Update the state with the new array
    }
    let intervalId: any;

    if (!isHover && windowSize.width > 960) {
      intervalId = setInterval(() => {
        rotateArray(polaroidUrls); // Cycle through indices
      }, 3000); // Change interval to 5 seconds (5000 milliseconds)
    }

    return () => clearInterval(intervalId);
  }, [polaroidUrls, isHover, windowSize.width]);

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
            alt="Polaroid"
            placeholder="blur"
            sizes="(min-width: 2420px) 570px, (min-width: 1920px) calc(8.75vw + 360px), (min-width: 980px) 20.98vw, 50vw"
            className={
              isHover || windowSize.width <= 960
                ? polaroidClasses[index]
                : polaroidClassesStacked[index]
            }
          />
        ))}
      </div>
    </div>
  );
}
