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
          style={{ border: '2px solid red', marginTop: '-23%' }}
        />
        <Image
          src="/index/Hero/hero_mid-grass.png"
          alt="serene forest scene in the night"
          fill
          className={styles.grass_image}
          z-index={3}
          style={{ border: '2px solid blue', marginTop: '-12%' }}
        />
      </div>
      <div className={styles.characters}>
        <div className={styles.characters_duck}>
          <Image
            src="/index/Hero/hero_rabbit.png"
            alt="serene forest scene in the night"
            fill
            className={styles.characters_duck_image}
            z-index={4}
            style={{
              border: '2px solid black',
            }}
          />
        </div>
        <div className={styles.characters_rabbit}>
          <Image
            src="/index/Hero/hero_duck.png"
            alt="serene forest scene in the night"
            fill
            className={styles.characters_rabbit_image}
            z-index={4}
            style={{ border: '2px solid black' }}
          />
        </div>
      </div>
      {/* <Image
        src="/index/Hero/hero_front-grass.png"
        alt="serene forest scene in the night"
        fill
        className={styles.grass_image}
        z-index={4}
        style={{ border: '2px solid black', marginTop: '0' }}
      /> */}
    </div>
  );
}
