'use client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import styles from './Grass.module.scss';
import { useLoadCount } from '@hooks/useLoadCount';
// import Far_Grass from '/public/index/Hero/hero_far-grass.png';
import Edit_Far_Grass from '/public/index/Hero/hero_far-grass-edit.png';
import Mid_Grass from '/public/index/Hero/hero_mid-grass.png';
import { usePathname } from 'next/navigation';

export default function Grass() {
  const { incLoaded } = useLoadCount();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const pathname = usePathname();
  const isDayTimer = pathname.includes('dayTimer');

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
            src={Edit_Far_Grass}
            alt="far_grass"
            sizes="(min-width: 1080px) 100.99vw, 996px"
            className={styles.grasses_image}
            z-index={2}
            priority={true}
            placeholder="blur"
            style={{
              transform: `translateX(${mousePosition.x / 150}px) translateY(${
                mousePosition.y / 150
              }px)`,
            }}
            onLoad={incLoaded}
          />
        </div>
        <div
          className={styles.grass_medium}
          style={isDayTimer ? { marginTop: '15%' } : {}}
        >
          {!isDayTimer && (
            <Image
              src={Mid_Grass}
              alt="mid_grass"
              className={styles.grasses_image}
              z-index={3}
              priority={true}
              placeholder="blur"
              style={{
                transform: `translateX(${mousePosition.x / 120}px) translateY(${
                  mousePosition.y / 120
                }px)`,
              }}
              onLoad={incLoaded}
            />
          )}
        </div>
      </div>
    </div>
  );
}
