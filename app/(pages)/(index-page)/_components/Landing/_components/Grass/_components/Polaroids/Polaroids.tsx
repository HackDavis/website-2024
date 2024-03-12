'use client';

import Image from 'next/image';
import styles from './Polaroids.module.scss';
import { useLoadCount } from '@hooks/useLoadCount';
import hd_pol1 from '/public/index/Hero/hd_pol1.png';
import hd_pol2 from '/public/index/Hero/hd_pol2.png';
import hd_pol3 from '/public/index/Hero/hd_pol3.png';

export default function Polaroids() {
  const { incLoaded } = useLoadCount();
  return (
    <div className={styles.polaroids}>
      <div className={styles.polaroids_container}>
        <div className={styles.polaroids_container_img1}>
          <Image
            src={hd_pol1}
            alt="polaroid"
            sizes="(min-width: 2620px) 123px, (min-width: 2540px) calc(-21.67vw + 686px), (min-width: 1960px) calc(3.39vw + 51px), (min-width: 1520px) calc(8.81vw + 23px), (min-width: 1060px) calc(8.41vw + 20px), 101px"
            className={styles.polaroids_container_img1_image}
            priority={true}
            placeholder="blur"
            onLoad={incLoaded}
          />
        </div>
        <div className={styles.polaroids_container_lower}>
          <div className={styles.polaroids_container_lower_img3}>
            <Image
              src={hd_pol2}
              alt="polaroid"
              sizes="(min-width: 2620px) 178px, (min-width: 2540px) calc(-31.67vw + 1001px), (min-width: 1960px) calc(4.82vw + 76px), (min-width: 1520px) calc(10vw + 28px), (min-width: 1020px) 10.83vw, 129px"
              className={styles.polaroids_container_lower_img3_image}
              priority={true}
              placeholder="blur"
              onLoad={incLoaded}
            />
          </div>
          <div className={styles.polaroids_container_lower_img2}>
            <Image
              src={hd_pol3}
              alt="polaroid"
              sizes="(min-width: 2580px) 261px, (min-width: 2340px) 289px, (min-width: 1520px) calc(11.13vw + 31px), (min-width: 1060px) calc(10.91vw + 23px), 129px"
              className={styles.polaroids_container_lower_img2_image}
              priority={true}
              placeholder="blur"
              onLoad={incLoaded}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
