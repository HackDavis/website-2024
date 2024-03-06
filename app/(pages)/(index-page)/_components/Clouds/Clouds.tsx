'use client';
import Image from 'next/image';
import styles from './Clouds.module.scss';
import { useLoadCount } from '@/app/(pages)/_hooks/useLoadCount';

export default function Clouds() {
  const { incLoaded } = useLoadCount();
  return (
    <div className={styles.container}>
      <div className={styles.cloud_back}>
        <div className={styles.cloud_back_left}>
          <Image
            src="/index/Hero/hero_left-backcloud.png"
            alt="Left Back Cloud"
            width={4000}
            height={100}
            className={styles.clouds_image}
            z-index={0}
            priority={true}
            onLoad={incLoaded}
          />
        </div>
        <div className={styles.cloud_back_right}>
          <Image
            src="/index/Hero/hero_right-backcloud.png"
            alt="Right Back Cloud"
            width={4000}
            height={100}
            className={styles.clouds_image}
            z-index={0}
            priority={true}
            onLoad={incLoaded}
          />
        </div>
      </div>
      <div className={styles.cloud_front}>
        <div className={styles.cloud_front_left}>
          <Image
            src="/index/Hero/hero_left-cloud.png"
            width={4000}
            height={100}
            alt="Left Cloud"
            className={styles.clouds_image}
            z-index={1}
            priority={true}
            onLoad={incLoaded}
          />
        </div>
        <div className={styles.cloud_front_right}>
          <Image
            src="/index/Hero/hero_right-cloud.png"
            alt="Right Cloud"
            width={4000}
            height={100}
            className={styles.clouds_image}
            z-index={1}
            priority={true}
            onLoad={incLoaded}
          />
        </div>
      </div>
    </div>
  );
}
