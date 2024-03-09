'use client';

import Image from 'next/image';
import styles from './Polaroids.module.scss';
import { useLoadCount } from '@hooks/useLoadCount';

export default function Polaroids() {
  const { incLoaded } = useLoadCount();
  return (
    <div className={styles.polaroids}>
      <div className={styles.polaroids_container}>
        <div className={styles.polaroids_container_img1}>
          <Image
            src="/index/Hero/hd_pol1.png"
            alt="polaroid"
            width={4000}
            height={100}
            className={styles.polaroids_container_img1_image}
            priority={true}
            placeholder="blur"
            blurDataURL="/index/Hero/hd_pol1.png"
            onLoad={incLoaded}
          />
        </div>
        <div className={styles.polaroids_container_lower}>
          <div className={styles.polaroids_container_lower_img3}>
            <Image
              src="/index/Hero/hd_pol3.png"
              alt="polaroid"
              width={4000}
              height={100}
              className={styles.polaroids_container_lower_img3_image}
              priority={true}
              placeholder="blur"
              blurDataURL="/index/Hero/hd_pol3.png"
              onLoad={incLoaded}
            />
          </div>
          <div className={styles.polaroids_container_lower_img2}>
            <Image
              src="/index/Hero/hd_pol2.png"
              alt="polaroid"
              width={4000}
              height={100}
              className={styles.polaroids_container_lower_img2_image}
              priority={true}
              placeholder="blur"
              blurDataURL="/index/Hero/hd_pol2.png"
              onLoad={incLoaded}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
