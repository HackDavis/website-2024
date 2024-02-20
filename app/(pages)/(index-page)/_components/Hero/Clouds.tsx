import Image from 'next/image';

import styles from './Clouds.module.scss';

export default function Clouds() {
  return (
    <div className={styles.container}>
      <div className={styles.clouds}>
        <Image
          src="/index/Hero/hero_left-backcloud.png"
          alt="Left Back Cloud"
          fill
          className={styles.clouds_image}
          z-index={0}
        />
        <Image
          src="/index/Hero/hero_right-backcloud.png"
          alt="Right Back Cloud"
          fill
          className={styles.clouds_image}
          z-index={0}
        />
        <Image
          src="/index/Hero/hero_left-cloud.png"
          alt="Left Cloud"
          fill
          className={styles.clouds_image}
          z-index={1}
        />
        <Image
          src="/index/Hero/hero_right-cloud.png"
          alt="Right Cloud"
          fill
          className={styles.clouds_image}
          z-index={1}
        />
      </div>
    </div>
  );
}
