'use client';
import styles from './Everyone.module.scss';
import React, { useEffect, useState, useRef } from 'react';

interface ParallaxLayerProps {
  speed: number;
  image: string;
  zIndex: number;
}
const ParallaxLayer = ({ speed, image, zIndex }: ParallaxLayerProps) => {
  return (
    <div
      className={styles['parallax-layer']}
      style={{
        backgroundImage: `url(${image})`,
        transform: `translateY(${speed}%)`,
        zIndex,
      }}
    ></div>
  );
};

const ParallaxContainer = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateSpeed = (baseSpeed: number, offset: number): number => {
    const factor = baseSpeed * 0.01;
    return (factor * offset) / 100;
  };

  return (
    <div className="parallax-container">
      <div className={styles['top-leaf']}>
        <ParallaxLayer
          zIndex={3}
          speed={calculateSpeed(-120, offset)}
          image="/index/Everyone/river_rightside-leaves.png"
        />
        <ParallaxLayer
          zIndex={2}
          speed={calculateSpeed(-100, offset)}
          image="/index/Everyone/river_rightside-shadow.png"
        />
        <ParallaxLayer
          zIndex={1}
          speed={calculateSpeed(-90, offset)}
          image="/index/Everyone/river_rightside-reflxn.png"
        />
      </div>
    </div>
  );
};

const ParallaxComponent = () => {
  // Create a ref for the element
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Handle the scroll event
  const handleScroll = () => {
    const offset = window.pageYOffset;
    const speed = 3; // Adjust the speed as necessary
    if (parallaxRef.current) {
      parallaxRef.current.style.backgroundPositionY = `${offset * speed}px`;
    }
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div ref={parallaxRef} className={styles['bottom-leaf']}></div>;
};

const WaterRipple = () => {
  return (
    <div className="water-animation">
      <svg viewBox="0 0 400 400">
        <circle cx="300" cy="100" r="40" className="ripple" />
      </svg>
    </div>
  );
};

const Everyone = () => {
  return (
    <div className={styles['background-container']}>
      <ParallaxContainer />
      <WaterRipple />
      <h1 className={styles.title}>HackDavis is for everyone.</h1>
      <p className={styles.subtitle1}>
        Whether you are a seasoned hacker or exploring whether tech is a good
        fit for you, we invite you to join us!
      </p>
      <p className={styles.subtitle2}>
        Creators from all backgrounds are welcome at HackDavis— no coding or
        previous experience required.
      </p>
      <div className={styles['cowsit']}>
        <img src="/index/Everyone/cowsit.png" alt="cowsit" />
      </div>
      <div className={styles['bottom-leaf']}>
        <ParallaxComponent />
      </div>
    </div>
  );
};
export default Everyone;
