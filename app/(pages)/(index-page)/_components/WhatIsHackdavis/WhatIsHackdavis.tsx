'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './WhatIsHackdavis.module.scss';
import Image from 'next/image';
import { useLoadCount } from '@hooks/useLoadCount';

// statically import images
import logLeftRock from 'public/index/whatIsHackdavis/log_left-rock.png';
import logLayer0 from 'public/index/whatIsHackdavis/log_layer0.png';
import logLayer1Left from 'public/index/whatIsHackdavis/log_layer1-left.png';
import logLayer2Left from 'public/index/whatIsHackdavis/log_layer2-left.png';
import logRightRock from 'public/index/whatIsHackdavis/log_right-rock.png';
import logLayer1Right from 'public/index/whatIsHackdavis/log_layer1-right.png';
import logLayer2Right from 'public/index/whatIsHackdavis/log_layer2-right.png';
import logRabbit from 'public/index/whatIsHackdavis/log_rabbit.png';
import logFrog from 'public/index/whatIsHackdavis/log_frog.png';
import logGingko from 'public/index/whatIsHackdavis/log_gingko.png';
import logWaterSheen from 'public/index/whatIsHackdavis/log_water-sheen.png';

export default function WhatIsHackdavis() {
  const { incLoaded } = useLoadCount();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (container && window.innerWidth > 425) {
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };

    container?.addEventListener('mousemove', handleMouseMove);

    return () => {
      container?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.heading}>What is HackDavis?</h1>
        <p className={styles.paragraph}>
          HackDavis is the largest collegiate hackathon in California where over
          750 students, creators, and leaders come together to create for social
          good.
        </p>
      </div>
      <div className={styles.logStuff}>
        <div className={styles.logLeftSection}>
          <Image
            src={logLeftRock}
            alt="log left rock"
            className={styles.logLeft}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="41vw"
          />
        </div>

        <div className={styles.logRightSection}>
          <Image
            src={logLayer0}
            alt="log layer 0"
            className={styles.logLayer0}
            style={{
              transform: `translateX(${mousePosition.x / 90}px) translateY(${
                mousePosition.y / 90
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="(min-width: 440px) 56.56vw, 70.83vw"
          />

          <Image
            src={logLayer1Left}
            alt="log layer 1 left"
            className={styles.logLayer1Left}
            style={{
              transform: `translateX(${mousePosition.x / 70}px) translateY(${
                mousePosition.y / 70
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="(min-width: 440px) 30.9vw, 39.17vw"
          />

          <Image
            src={logLayer2Left}
            alt="log layer 2 left"
            width={4000}
            height={100}
            className={styles.logLayer2Left}
            style={{
              transform: `translateX(${mousePosition.x / 40}px) translateY(${
                mousePosition.y / 40
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="(min-width: 440px) 29.14vw, 36.67vw"
          />

          <Image
            src={logRightRock}
            alt="log right rock"
            width={4000}
            height={100}
            className={styles.logRight}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="(min-width: 440px) 86.99vw, 110vw"
          />

          <Image
            src={logLayer1Right}
            alt="log layer 1 right"
            className={styles.logLayer1Right}
            style={{
              transform: `translateX(${mousePosition.x / 70}px) translateY(${
                mousePosition.y / 70
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="(min-width: 440px) 49.61vw, 62.5vw"
          />

          <Image
            src={logLayer2Right}
            alt="log layer 2 right"
            className={styles.logLayer2Right}
            style={{
              transform: `translateX(${mousePosition.x / 40}px) translateY(${
                mousePosition.y / 40
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="(min-width: 440px) 33.52vw, 42.5vw"
          />

          <Image
            src={logRabbit}
            alt="log rabbit"
            className={styles.logRabbit}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="(min-width: 440px) 9.57vw, 12.5vw"
          />

          <Image
            src={logFrog}
            alt="log frog"
            width={4000}
            height={100}
            className={styles.logFrog}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="(min-width: 440px) 8.28vw, 10.83vw"
          />

          <Image
            src={logGingko}
            alt="log ginkgo"
            className={styles.logGingko}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
            placeholder="blur"
            sizes="(min-width: 440px) 29.57vw, 37.5vw"
          />
        </div>

        <Image
          src={logWaterSheen}
          alt="log water sheen"
          className={styles.logWaterSheen}
          onLoad={incLoaded}
          placeholder="blur"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
