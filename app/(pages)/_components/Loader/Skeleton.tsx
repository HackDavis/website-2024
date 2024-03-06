import Image from 'next/image';

import styles from './Skeleton.module.scss';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Skeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <Image
            src="/navbar/logo.svg"
            alt="logo"
            width={100}
            height={100}
            className={styles.logo}
          ></Image>
          <div className={styles.rectangles}>
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className={styles.mlh}>
          <Image
            src="/navbar/MLH_Badge.svg"
            alt="MLH badge"
            width={200}
            height={200}
            className={styles.mlh_image}
          />
        </div>
        <div className={styles.mobile_menu}>
          <RxHamburgerMenu size={40} />
        </div>
      </div>
      <div className={styles.form_container}>
        <div className={styles.main_text}>
          <div></div>
          <div></div>
        </div>
        <div className={styles.secondary_text}>
          <div></div>
          <div></div>
        </div>
        <div className={styles.buttons}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
