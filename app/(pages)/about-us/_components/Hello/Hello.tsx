import styles from './Hello.module.scss';
import React from 'react';

const Hello = () => {
  return (
    <div className={styles['hello-container']}>
      <header>
        <h1 className={styles.h1}>Hello, we're HackDavis</h1>
        <p className={styles.P}>
          Bringing together 750+ students, creators, and leaders to create for
          social good
        </p>
      </header>
      <div className={styles['banner-image']}>
        <img src="/about-us-icon/Banner image.svg" alt="Banner image" />
      </div>
    </div>
  );
};
export default Hello;
