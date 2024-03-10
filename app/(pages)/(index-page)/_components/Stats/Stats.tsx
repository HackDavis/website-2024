import Link from 'next/link';
import styles from './Stats.module.scss';
import React from 'react';

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles['background-container']}>
        <div className={styles['numbers-words-container']}>
          {/* Each number-word-pair will be displayed in a column, but all pairs are in a row */}
          <div className={styles['number-word-pair']}>
            <span className={styles.number}>140+</span>
            <span className={styles.word}>projects</span>
          </div>
          <div className={styles['number-word-pair']}>
            <span className={styles.number}>750+</span>
            <span className={styles.word}>hackers</span>
          </div>
          <div className={styles['number-word-pair']}>
            <span className={styles.number}>$15k+</span>
            <span className={styles.word}>prizes</span>
          </div>
          <div className={styles['number-word-pair']}>
            <span className={styles.number}>36</span>
            <span className={styles.word}>hours</span>
          </div>
        </div>
        <Link target="_blank" href={'mailto:team@hackdavis.io'}>
          <div className={styles.button}>
            <div className={styles['button-words']}>Sponsor 2024</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Stats;
