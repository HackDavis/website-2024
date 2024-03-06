//'use client';
import styles from './Everyone.module.scss';
//import React, { useState, useEffect } from 'react';

/*const Parallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles['background-container']}>
      <div className={styles['parallax-container']}>
        <div
          className={styles['parallax-item leaves']}
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        />
        <div
          className="parallax-item shadow"
          style={{ transform: `translateY(${offset * 0.2}px)` }}
        />
        <div
          className="parallax-item reflection"
          style={{ transform: `translateY(${offset * 0.1}px)` }}
        />
      </div>
    </div>
  );
};*/
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
      <div className={styles['top-leaf']}>
        <img src="/index/Everyone/river_rightside-combined.png" alt="topleaf" />
      </div>
      <div className={styles['cowsit']}>
        <img src="/index/Everyone/cowsit.png" alt="cowsit" />
      </div>
      <div className={styles['bottom-leaf']}></div>
    </div>
  );
};
export default Everyone;
//export { Parallax };
