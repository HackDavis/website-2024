import styles from './Hello.module.scss';
import React from 'react';
import Image from 'next/image';

const Hello = () => {
  return (
    <div className={styles.hello_container}>
      <div className={styles.title}>
        <h1>HackDavis</h1>
        <p>
          Bringing together 750+ students, creators, and leaders to create for
          social good
        </p>
      </div>
      <div className={styles.banner}>
        <Image
          src="/about-us-icon/bannerclouds1.png"
          alt="Banner"
          width={4000}
          height={100}
          className={styles.cloudRight}
        />

        <Image
          src="/about-us-icon/bannerclouds2.png"
          alt="Banner"
          width={4000}
          height={100}
          className={styles.cloud2}
        />

        <Image
          src="/index/Hero/hero_front-grass.png"
          alt="Banner"
          width={4000}
          height={100}
          className={styles.frontGrass}
        />
        <Image
          src="/index/Hero/hero_mid-grass.png"
          alt="Banner"
          width={4000}
          height={100}
          className={styles.midGrass}
        />
      </div>
    </div>
  );
};
export default Hello;
