import styles from './Everyone.module.scss';
import React from 'react';
import AutoImage from '@components/AutoImage/AutoImage';

const Everyone = () => {
  return (
    <div className={styles['background-container']}>
      <h1 className={styles.title}>HackDavis is for everyone.</h1>
      <p className={styles.subtitle1}>
        Whether you are a seasoned hacker or exploring whether tech is a good
        fit for you, we invite you to join us!
      </p>
      <p className={styles.subtitle2}>
        Creators from all backgrounds are welcome at HackDavis— no coding or
        previous experience required.
      </p>
      <div className={styles['cowsit']}>
        <AutoImage src="/index/Everyone/cowsit.png" alt="cowsit" />
      </div>
      <div className={styles['top-leaf']}>
        <AutoImage
          src="/index/Everyone/river_rightside-combined.png"
          alt="topleaf"
        />
      </div>
      <div className={styles['bottom-leaf']}></div>
    </div>
  );
};
export default Everyone;
