import Image from 'next/image';
import styles from './BottomPolaroids.module.scss';

export default function BottomPolaroids() {
  return (
    <div className={styles.container}>
      <div className={styles.allPolaroids}>
        <Image
          src="/index/Polaroids/middlePolaroid.png"
          alt="serene forest scene in the night"
          width={100}
          height={100}
          className={styles.backPolaroid}
        />
        <Image
          src="/index/Polaroids/middlePolaroid.png"
          alt="serene forest scene in the night"
          width={100}
          height={100}
          className={styles.middlePolaroid}
        />
        <Image
          src="/index/Polaroids/middlePolaroid.png"
          alt="serene forest scene in the night"
          width={100}
          height={100}
          className={styles.frontPolaroid}
        />
      </div>
    </div>
  );
}
