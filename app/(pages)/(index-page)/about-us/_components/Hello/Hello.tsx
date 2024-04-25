import styles from './Hello.module.scss';
import React from 'react';
import Image from 'next/image';

const Hello = () => {
  return (
    <div className={styles.hello_container}>
      <div className={styles.title}>
        <h1>Hello, we're HackDavis</h1>
        <p>
          Bringing together 750+ students, creators, and leaders to create for
          social good
        </p>
      </div>
      <div className={styles.banner}>
        <Image
          src="/about-us-icon/Banner.svg"
          alt="Banner"
          width={4000}
          height={100}
          className={styles.banner_image}
        />
      </div>
    </div>
  );
};
export default Hello;
