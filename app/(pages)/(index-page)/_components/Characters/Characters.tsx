import styles from './Characters.module.scss';
import Image from 'next/image';

export default function Characters() {
  return (
    <div className={styles.characters}>
      <div className={styles.background_characters}>
        <div className={styles.background_characters_duck}>
          <Image
            src="/index/Hero/hero_duck.png"
            alt="serene forest scene in the night"
            fill
            className={styles.background_characters_duck_image}
            // z-index={5}
          />
        </div>
        <div className={styles.background_characters_rabbit}>
          <Image
            src="/index/Hero/hero_rabbit.png"
            alt="serene forest scene in the night"
            fill
            className={styles.background_characters_rabbit_image}
            // z-index={4}
          />
        </div>
      </div>
      <div className={styles.foreground_characters}>
        <div className={styles.foreground_characters_cowHead}>
          <Image
            src="/index/Hero/hero_cow-head.png"
            alt="serene forest scene in the night"
            fill
            className={styles.foreground_characters_cowHead_image}
            // sizes="100vw"
            style={{ border: '1px solid red' }}
            // z-index={3}
          />
        </div>
        <div className={styles.foreground_characters_cowTorso}>
          <Image
            src="/index/Hero/hero_cow-torso.png"
            alt="serene forest scene in the night"
            fill
            className={styles.foreground_characters_cowTorso_image}
            style={{ border: '1px solid red' }}
            // z-index={3}
          />
        </div>
        <div className={styles.foreground_characters_cowCam}>
          <Image
            src="/index/Hero/hero_cow-cam.png"
            alt="serene forest scene in the night"
            fill
            className={styles.foreground_characters_cowCam_image}
            style={{ border: '1px solid red' }}
            // z-index={3}
          />
        </div>
      </div>
    </div>
  );
}
