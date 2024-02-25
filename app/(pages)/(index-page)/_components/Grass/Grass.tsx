import Image from 'next/image';
import styles from './Grass.module.scss';

export default function Grass() {
  return (
    <div className={styles.container}>
      <div className={styles.grass}>
        <div className={styles.grass_far}>
          <Image
            src="/index/Hero/hero_far-grass.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.grasses_image}
            z-index={2}
          />
        </div>
        <div className={styles.grass_medium}>
          <Image
            src="/index/Hero/hero_mid-grass.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.grasses_image}
            z-index={3}
          />
        </div>
      </div>
    </div>
  );
}
