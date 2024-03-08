'use client';
import { useEffect, useState } from 'react';

import styles from './Foreground.module.scss';
import Image from 'next/image';
import { useLoadCount } from '@hooks/useLoadCount';

export default function Foreground() {
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
    <div className={styles.foreground}>
      <div className={styles.foreground_container}>
        <div className={styles.foreground_characters}>
          <div className={styles.foreground_characters_behind}>
            <div className={styles.foreground_characters_behind_duck}>
              <Image
                src="/index/Hero/hero_duck.png"
                alt="hero_duck"
                width={4000}
                height={100}
                className={styles.foreground_characters_behind_duck_image}
                priority={true}
                placeholder="blur"
                blurDataURL="/index/Hero/hero_duck.png"
                style={{
                  transform: `translateX(${
                    mousePosition.x / 80
                  }px) translateY(${mousePosition.y / 80}px)`,
                }}
                onLoad={incLoaded}
              />
            </div>
            <div className={styles.foreground_characters_behind_rabbit}>
              <Image
                src="/index/Hero/hero_rabbit.png"
                alt="hero_rabbit"
                width={4000}
                height={100}
                className={styles.foreground_characters_behind_rabbit_image}
                priority={true}
                placeholder="blur"
                blurDataURL="/index/Hero/hero_rabbit.png"
                style={{
                  transform: `translateX(${
                    mousePosition.x / 80
                  }px) translateY(${mousePosition.y / 80}px)`,
                }}
                onLoad={incLoaded}
              />
            </div>
          </div>
          <div className={styles.foreground_characters_front}>
            <div className={styles.foreground_characters_front_cowHead}>
              <Image
                src="/index/Hero/hero_cow-head.png"
                alt="hero_cow-head"
                width={4000}
                height={100}
                className={styles.foreground_characters_front_cowHead_image}
                priority={true}
                placeholder="blur"
                blurDataURL="/index/Hero/hero_cow-head.png"
                style={{
                  transform: `translateX(${
                    mousePosition.x / 50
                  }px) translateY(${mousePosition.y / 50}px)`,
                }}
                onLoad={incLoaded}
              />
            </div>
            <div className={styles.foreground_characters_front_cowBody}>
              <div
                className={styles.foreground_characters_front_cowBody_cowCam}
              >
                <Image
                  src="/index/Hero/hero_cow-cam.png"
                  alt="hero_cow-cam"
                  width={4000}
                  height={100}
                  priority={true}
                  placeholder="blur"
                  blurDataURL="/index/Hero/hero_cow-cam.png"
                  className={
                    styles.foreground_characters_front_cowBody_cowCam_image
                  }
                  style={{
                    transform: `translateX(${
                      mousePosition.x / 50
                    }px) translateY(${mousePosition.y / 50}px)`,
                  }}
                  onLoad={incLoaded}
                />
              </div>
              <div
                className={styles.foreground_characters_front_cowBody_cowTorso}
              >
                <Image
                  src="/index/Hero/hero_cow-torso.png"
                  alt="hero_cow-torso"
                  width={4000}
                  height={100}
                  priority={true}
                  placeholder="blur"
                  blurDataURL="/index/Hero/hero_cow-torso.png"
                  className={
                    styles.foreground_characters_front_cowBody_cowTorso_image
                  }
                  style={{
                    transform: `translateX(${
                      mousePosition.x / 50
                    }px) translateY(${mousePosition.y / 50}px)`,
                  }}
                  onLoad={incLoaded}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.foreground_grass}>
        <Image
          src="/index/Hero/hero_front-grass.png"
          alt="hero_cow-front"
          width={4000}
          height={100}
          className={styles.foreground_grass_image}
          priority={true}
          placeholder="blur"
          blurDataURL="/index/Hero/hero_front-grass.png"
          style={{
            transform: `translateX(${mousePosition.x / 50}px) translateY(${
              mousePosition.y / 50
            }px)`,
          }}
          onLoad={incLoaded}
        />
      </div>
    </div>
  );
}
