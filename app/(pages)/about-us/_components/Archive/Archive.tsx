'use client';
import styles from './Archive.module.scss';
import Image from 'next/image';
import { useState } from 'react';

export default function Archive() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const moveLeft = () => {
    setScrollPosition(scrollPosition - 127.57); // max is 893
  };

  const startScrool = 290;

  return (
    <div className={styles.container} onClick={moveLeft}>
      <div>
        <Image
          className={styles.folder}
          src="/archive/2023.png"
          alt="thing"
          width={247}
          height={206}
          style={{ transform: `translateX(${scrollPosition + startScrool}px)` }}
        />
        <Image
          className={styles.folder}
          src="/archive/2023.png"
          alt="thing"
          width={247}
          height={206}
          style={{ transform: `translateX(${scrollPosition + startScrool}px)` }}
        />
        <Image
          className={styles.folder}
          src="/archive/2023.png"
          alt="thing"
          width={247}
          height={206}
          style={{ transform: `translateX(${scrollPosition + startScrool}px)` }}
        />
        <Image
          className={styles.folder}
          src="/archive/2023.png"
          alt="thing"
          width={247}
          height={206}
          style={{ transform: `translateX(${scrollPosition + startScrool}px)` }}
        />
        <Image
          className={styles.folder}
          src="/archive/2023.png"
          alt="thing"
          width={247}
          height={206}
          style={{ transform: `translateX(${scrollPosition + startScrool}px)` }}
        />
        <Image
          className={styles.folder}
          src="/archive/2023.png"
          alt="thing"
          width={247}
          height={206}
          style={{ transform: `translateX(${scrollPosition + startScrool}px)` }}
        />
      </div>

      <div className={styles.bar}>
        <div
          className={styles.progress}
          style={{ transform: `translateX(${scrollPosition * -1}px)` }}
        ></div>
      </div>
    </div>
  );
}
