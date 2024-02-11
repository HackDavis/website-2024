import Image from 'next/image';

import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.clouds}>
        <Image
          src="/index/Hero/hero_left-backcloud.png"
          alt="serene forest scene in the night"
          fill
          className={styles.clouds_image}
          z-index={0}
        />
        <Image
          src="/index/Hero/hero_right-backcloud.png"
          alt="serene forest scene in the night"
          fill
          className={styles.clouds_image}
          z-index={0}
        />
        <Image
          src="/index/Hero/hero_left-cloud.png"
          alt="serene forest scene in the night"
          fill
          className={styles.clouds_image}
          z-index={1}
        />
        <Image
          src="/index/Hero/hero_right-cloud.png"
          alt="serene forest scene in the night"
          fill
          className={styles.clouds_image}
          z-index={1}
        />
      </div>
      <div className={styles.grass}>
        <Image
          src="/index/Hero/hero_far-grass.png"
          alt="serene forest scene in the night"
          fill
          className={styles.grass_image}
          z-index={2}
          style={{ border: '2px solid red', marginTop: '-10%' }}
        />
        <Image
          src="/index/Hero/hero_mid-grass.png"
          alt="serene forest scene in the night"
          fill
          className={styles.grass_image}
          z-index={3}
          style={{ border: '2px solid blue' }}
        />
        <Image
          src="/index/Hero/hero_front-grass.png"
          alt="serene forest scene in the night"
          fill
          className={styles.grass_image}
          z-index={4}
          style={{ border: '2px solid black', marginTop: '14%' }}
        />
      </div>
    </div>
  );
}
