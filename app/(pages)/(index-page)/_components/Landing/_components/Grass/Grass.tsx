'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import styles from './Grass.module.scss';
import Polaroids from './_components/Polaroids/Polaroids';
import Foreground from './_components/Foreground/Foreground';
import { useLoadCount } from '@hooks/useLoadCount';

export default function Grass() {
  const { incLoaded } = useLoadCount();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      setMousePosition({ x, y });
    };

    window?.addEventListener('mousemove', handleMouseMove);

    return () => {
      window?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.grass}>
        <div className={styles.grass_far}>
          <Image
            src="/index/Hero/hero_far-grass.png"
            alt="far_grass"
            width={4000}
            height={100}
            className={styles.grasses_image}
            z-index={2}
            priority={true}
            placeholder="blur"
            blurDataURL="/index/Hero/hero_far-grass.png"
            style={{
              transform: `translateX(${mousePosition.x / 150}px) translateY(${
                mousePosition.y / 150
              }px)`,
            }}
            onLoad={incLoaded}
          />
        </div>
        <div className={styles.grass_medium}>
          <Image
            src="/index/Hero/hero_mid-grass.png"
            alt="mid_grass"
            width={4000}
            height={100}
            className={styles.grasses_image}
            z-index={3}
            priority={true}
            placeholder="blur"
            blurDataURL="/index/Hero/hero_mid-grass.png"
            style={{
              transform: `translateX(${mousePosition.x / 120}px) translateY(${
                mousePosition.y / 120
              }px)`,
            }}
            onLoad={incLoaded}
          />
        </div>
      </div>
      <div className={styles.foreground}>
        <Foreground />
      </div>
      <div className={styles.polaroids}>
        <Polaroids />
      </div>
    </div>
  );
}
