import styles from './Characters.module.scss';
import Image from 'next/image';

export default function Characters() {
  return (
    <div className={styles.characters}>
      <div className={styles.characters_duck}>
        <Image
          src="/index/Hero/hero_duck.png"
          alt="serene forest scene in the night"
          fill
          className={styles.characters_duck_image}
          z-index={5}
          style={{ border: '2px solid black' }}
        />
      </div>
      <div className={styles.characters_rabbit}>
        <Image
          src="/index/Hero/hero_rabbit.png"
          alt="serene forest scene in the night"
          fill
          className={styles.characters_rabbit_image}
          z-index={4}
          style={{
            border: '2px solid black',
          }}
        />
      </div>
    </div>
  );
}
