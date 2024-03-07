'use client';
import { useEffect, useState, useRef } from 'react';
import styles from './WhatIsHackdavis.module.scss';
import Image from 'next/image';
import { useLoadCount } from '@hooks/useLoadCount';

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
          750 students, creators, and leaders come together for 24 hours to
          create for social good.
        </p>
      </div>
      <div className={styles.logStuff}>
        <div className={styles.logLeftSection}>
          <Image
            src="/index/whatIsHackdavis/log_left-rock.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logLeft}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
          />
        </div>

        <div className={styles.logRightSection}>
          <Image
            src="/index/whatIsHackdavis/log_layer0.png"
            alt="serene forest scene in the night"
            width={4000}
            height={1000}
            className={styles.logLayer0}
            style={{
              transform: `translateX(${mousePosition.x / 90}px) translateY(${
                mousePosition.y / 90
              }px)`,
            }}
            onLoad={incLoaded}
          />

          <Image
            src="/index/whatIsHackdavis/log_layer1-left.png"
            alt="serene forest scene in the night"
            width={4000}
            height={1000}
            className={styles.logLayer1Left}
            style={{
              transform: `translateX(${mousePosition.x / 70}px) translateY(${
                mousePosition.y / 70
              }px)`,
            }}
            onLoad={incLoaded}
          />

          <Image
            src="/index/whatIsHackdavis/log_layer2-left.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logLayer2Left}
            style={{
              transform: `translateX(${mousePosition.x / 40}px) translateY(${
                mousePosition.y / 40
              }px)`,
            }}
            onLoad={incLoaded}
          />

          <Image
            src="/index/whatIsHackdavis/log_right-rock.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logRight}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
          />

          <Image
            src="/index/whatIsHackdavis/log_layer1-right.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logLayer1Right}
            style={{
              transform: `translateX(${mousePosition.x / 70}px) translateY(${
                mousePosition.y / 70
              }px)`,
            }}
            onLoad={incLoaded}
          />

          <Image
            src="/index/whatIsHackdavis/log_layer2-right.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logLayer2Right}
            style={{
              transform: `translateX(${mousePosition.x / 40}px) translateY(${
                mousePosition.y / 40
              }px)`,
            }}
            onLoad={incLoaded}
          />

          <Image
            src="/index/whatIsHackdavis/log_rabbit.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logRabbit}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
          />

          <Image
            src="/index/whatIsHackdavis/log_frog.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logFrog}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
          />

          <Image
            src="/index/whatIsHackdavis/log_gingko.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logGingko}
            style={{
              transform: `translateX(${mousePosition.x / 30}px) translateY(${
                mousePosition.y / 30
              }px)`,
            }}
            onLoad={incLoaded}
          />
        </div>

        <Image
          src="/index/whatIsHackdavis/log_water-sheen.png"
          alt="serene forest scene in the night"
          width={4000}
          height={4000}
          className={styles.logWaterSheen}
          onLoad={incLoaded}
        />
      </div>
    </div>
  );
}
