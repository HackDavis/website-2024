import Image from 'next/image';
import styles from './Polaroids.module.scss';
import hd_pol1 from '/public/index/Hero/hd_pol1.png';
import hd_pol2 from '/public/index/Hero/hd_pol2.png';
import hd_pol3 from '/public/index/Hero/hd_pol3.png';

export default function Polaroids() {
  return (
    <div className={styles.polaroids}>
      <div className={styles.polaroids_container}>
        <div className={styles.polaroids_container_img1}>
          <Image
            src={hd_pol1}
            alt="polaroid"
            className={styles.polaroids_container_img1_image}
            priority={true}
            placeholder="blur"
          />
        </div>
        <div className={styles.polaroids_container_lower}>
          <div className={styles.polaroids_container_lower_img3}>
            <Image
              src={hd_pol3}
              alt="polaroid"
              className={styles.polaroids_container_lower_img3_image}
              priority={true}
              placeholder="blur"
            />
          </div>
          <div className={styles.polaroids_container_lower_img2}>
            <Image
              src={hd_pol2}
              alt="polaroid"
              className={styles.polaroids_container_lower_img2_image}
              priority={true}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
