import styles from './Hello.module.scss';
import React from 'react';

const Hello = () => {
  return (
    <div className={styles['hello-container']}>
      <img
        className={styles['mlh-badge']}
        src="/about-us-icon/MLH Badge.svg"
        alt="MLH Badge"
      />
      <nav className={styles.nav}>
        <ul className={styles.words}>
          <li>
            <svg className={styles.logo} />
            <img src="/about-us-icon/logo.svg" alt="logo" />
          </li>
          <li className="words-item">
            <div>Impact</div>
          </li>
          <li className="words-item">
            <div>FAQ</div>
          </li>
          <li className="words-item">
            <div>Sponsors</div>
          </li>
          <li className="words-item">
            <div>About</div>
          </li>
        </ul>
      </nav>
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
