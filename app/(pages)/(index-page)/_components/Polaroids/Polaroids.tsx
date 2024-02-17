import Image from 'next/image';

import styles from './Polaroids.module.scss';

export default function Polaroids() {
  return (
    <div className={styles.container}>
      <div className={styles.middlePolaroid}>
        <Image
          src="/index/Polaroids/middlePolaroid.png"
          alt="serene forest scene in the night"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
