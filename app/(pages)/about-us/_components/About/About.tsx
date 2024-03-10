import React from 'react';
import styles from './About.module.scss'; // The name of your CSS module file
import Image from 'next/image';

const About = () => {
  return (
    <div className={styles['hello-container']}>
      <h1 className={styles.h1}>What we're all about</h1>
      <div className={styles.tiles}>
        <div className={styles.inclusivity}>
          <div className={styles.inclusivity_title}>Inclusivity</div>
          <div className={styles.inclusivity_text}>
            We invite individuals of all backgrounds to learn new skills and
            grow in an inclusive environment.
          </div>
          <div className={styles.inclusivity_cow}>
            <Image
              src="/about-us-icon/cow.svg"
              alt="Cow"
              style={{
                maxWidth:
                  '100%' /* Ensure the image doesn't exceed the container's width */,
                maxHeight:
                  '100%' /* Ensure the image doesn't exceed the container's height */,
                objectFit:
                  'contain' /* Maintain aspect ratio and fit within the container */,
                marginTop: 'auto' /* Align to the bottom of the tile */,
              }}
            />
          </div>
        </div>
        <div className={styles.Handson}>
          <div className={styles.Handson_title}>Hands-on learning</div>
          <div className={styles.Handson_text}>
            No matter which prompt you choose, each project provides hands-on
            experience and an opportunity to explore a new discipline.
          </div>
          <div className={styles.Handson_froggy}>
            <Image src="/about-us-icon/froggy.svg" alt="Froggy" />
          </div>
        </div>
        <div className={styles.Impactful}>
          <div className={styles.Impactful_title}>Impactful projects</div>
          <div className={styles.Impactful_text}>
            Create meaningful, impactful, and innovative solutions that benefit
            local and global communities.
          </div>
          <div className={styles.Impactful_bunny}>
            <Image src="/about-us-icon/bunny.svg" alt="Bunny" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
