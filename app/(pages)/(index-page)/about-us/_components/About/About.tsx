import React from 'react';
import styles from './About.module.scss';
import AnimalCard from './Components/AnimalCard';

const aboutData = [
  {
    title: 'Inclusivity',
    text: 'We invite individuals of all backgrounds to learn new skills and grow in an inclusive environment.',
    imagePath: '/about-us-icon/hd_cow.png',
    imageName: 'Cow',
    color: 'rgba(158, 231, 229, 0.75)',
  },
  {
    title: 'Hands-on learning',
    text: 'No matter which prompt you choose, each project provides hands-on experience and an opportunity to explore a new discipline.',
    imagePath: '/about-us-icon/log_frog.png',
    imageName: 'Froggy',
    color: 'rgba(194, 229, 103, 0.75)',
  },
  {
    title: 'Impactful projects',
    text: 'Create meaningful, impactful, and innovative solutions that benefit local and global communities.',
    imagePath: '/about-us-icon/log_rabbit.png',
    imageName: 'Bunny',
    color: 'rgba(255, 197, 171, 0.75)',
  },
];

export default function About() {
  return (
    <div className={styles['hello-container']}>
      <div className={styles.content}>
        <h1 className={styles.header}>What we're all about</h1>
        <div className={styles.tiles}>
          {aboutData.map((item, index) => (
            <AnimalCard {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
