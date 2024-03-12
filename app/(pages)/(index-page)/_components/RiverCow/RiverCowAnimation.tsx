import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import styles from './RiverCowAnimation.module.scss';
import riverCow from 'public/index/RiverCow/river-cow.png';
import riverCow2 from 'public/index/RiverCow/river-cow-2.png';
import riverCow3 from 'public/index/RiverCow/river-cow-3.png';

const cowFrames = [riverCow, riverCow2, riverCow3];

export default function RiverCowAnimation() {
  const [cowIndex, setCowIndex] = useState(0);

  const handleNextFrame = () => {
    setCowIndex((prev) => (prev + 1) % cowFrames.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextFrame();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.river_cow_container}>
      <Image
        src={cowFrames[cowIndex]}
        alt="Cow sitting on rock reminiscing on past adventures by looking at polaroids."
        placeholder="blur"
        className={styles.river_cow}
        sizes="(min-width: 780px) 600px, 300px"
      />
    </div>
  );
}
