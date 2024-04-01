'use client';
import { useEffect, useState } from 'react';

import styles from './Foreground.module.scss';
import Image from 'next/image';
import { useLoadCount } from '@hooks/useLoadCount';
import Hero_Duck from '/public/index/Hero/hero_duck.png';
import Hero_Rabbit from '/public/index/Hero/hero_rabbit.png';
import Hero_CowHead from '/public/index/Hero/hero_cow-head.png';
import Hero_CowCam from '/public/index/Hero/hero_cow-cam.png';
import Hero_CowTorso from '/public/index/Hero/hero_cow-torso.png';
import Hero_FrontGrass from '/public/index/Hero/hero_front-grass.png';

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
                src={Hero_Duck}
                alt="hero_duck"
                // sizes="(min-width: 2580px) 261px, (min-width: 2340px) 289px, (min-width: 1520px) calc(11.13vw + 31px), (min-width: 1060px) calc(10.91vw + 23px), 129px"
                className={styles.foreground_characters_behind_duck_image}
                priority={true}
                placeholder="blur"
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
                src={Hero_Rabbit}
                alt="hero_rabbit"
                className={styles.foreground_characters_behind_rabbit_image}
                // sizes="(min-width: 2960px) 123px, (min-width: 1900px) 124px, (min-width: 1200px) 77px, 66px"
                priority={true}
                placeholder="blur"
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
                src={Hero_CowHead}
                sizes="(min-width: 1060px) 15vw, 148px"
                alt="hero_cow-head"
                className={styles.foreground_characters_front_cowHead_image}
                priority={true}
                placeholder="blur"
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
                  src={Hero_CowCam}
                  alt="hero_cow-cam"
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
                  src={Hero_CowTorso}
                  alt="hero_cow-torso"
                  priority={true}
                  placeholder="blur"
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
          src={Hero_FrontGrass}
          alt="hero_front-grass"
          sizes="(min-width: 1080px) 110vw, 1085px"
          className={styles.foreground_grass_image}
          priority={true}
          placeholder="blur"
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
