import Image from 'next/image';
import styles from './Grass.module.scss';

export default function Grass() {
  return (
    <div className={styles.grass}>
      <Image
        src="/index/Hero/hero_far-grass.png"
        alt="serene forest scene in the night"
        fill
        className={styles.grass_image}
        z-index={2}
        style={{ marginTop: '-11%' }}
      />
      <Image
        src="/index/Hero/hero_mid-grass.png"
        alt="serene forest scene in the night"
        fill
        className={styles.grass_image}
        z-index={3}
        // style={{ border: '2px solid blue', marginTop: '-12%' }}
      />
    </div>
  );
}
