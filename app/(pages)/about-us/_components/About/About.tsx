import React from 'react';
import Image from 'next/image';
import styles from './About.module.scss';

const aboutData = [
  {
    title: 'Inclusivity',
    text: 'We invite individuals of all backgrounds to learn new skills and grow in an inclusive environment.',
    imagePath: '/about-us-icon/cow.png',
    imageName: 'Cow',
  },
  {
    title: 'Hands-on learning',
    text: 'No matter which prompt you choose, each project provides hands-on experience and an opportunity to explore a new discipline.',
    imagePath: '/about-us-icon/froggy.png',
    imageName: 'Froggy',
  },
  {
    title: 'Impactful projects',
    text: 'Create meaningful, impactful, and innovative solutions that benefit local and global communities.',
    imagePath: '/about-us-icon/bunny.png',
    imageName: 'Bunny',
  },
];

export default function About() {
  return (
    <div className={styles['hello-container']}>
      <div className={styles.content}>
        <h1 className={styles.header}>What we're all about</h1>
        <div className={styles.tiles}>
          {aboutData.map((item) => (
            <div key={item.title} className={styles.tile}>
              <div>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
              </div>
              <div className={styles.image}>
                <Image
                  src={item.imagePath}
                  width={100}
                  height={100}
                  layout="responsive"
                  alt={item.imageName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
