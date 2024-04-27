'use client';
import Image from 'next/image';
import styles from './Clouds.module.scss';
import { useLoadCount } from '@/app/(pages)/_hooks/useLoadCount';
import Left_Back_Cloud from '/public/index/Hero/hero_left-backcloud.png';
import Right_Back_Cloud from '/public/index/Hero/hero_right-backcloud.png';
import Left_Cloud from '/public/index/Hero/hero_left-cloud.png';
import Right_Cloud from '/public/index/Hero/hero_right-cloud.png';
import { usePathname } from 'next/navigation';

export default function Clouds() {
  const { incLoaded } = useLoadCount();

  const pathname = usePathname();
  const isDayTimer = pathname.includes('dayTimer');

  return (
    <div
      className={styles.container}
      style={isDayTimer ? { paddingTop: '150px' } : {}}
    >
      <div className={styles.cloud_back}>
        <div className={styles.cloud_back_left}>
          <Image
            src={Left_Back_Cloud}
            alt="Left Back Cloud"
            sizes="(min-width: 1080px) 100.99vw, 996px"
            className={styles.clouds_image}
            z-index={0}
            priority={true}
            onLoad={incLoaded}
          />
        </div>
        <div className={styles.cloud_back_right}>
          <Image
            src={Right_Back_Cloud}
            alt="Right Back Cloud"
            sizes="(min-width: 1080px) 100.99vw, 996px"
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
            src={Left_Cloud}
            alt="Left Cloud"
            sizes="(min-width: 1080px) 110vw, 1085px"
            className={styles.clouds_image}
            z-index={1}
            priority={true}
            onLoad={incLoaded}
          />
        </div>
        <div className={styles.cloud_front_right}>
          <Image
            src={Right_Cloud}
            alt="Right Cloud"
            sizes="(min-width: 1080px) 110vw, 1085px"
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
