import React from 'react';
import styles from './Sponsor.module.scss';

const cards = [
  {
    imageUrl: '/about-us-icon/pol1.svg',
    frameImageUrl: '/about-us-icon/pol1a.svg',
  },
  {
    imageUrl: '/about-us-icon/pol2.svg',
    frameImageUrl: '/about-us-icon/pol2a.svg',
  },
  {
    imageUrl: '/about-us-icon/pol3.svg',
    frameImageUrl: '/about-us-icon/pol3a.svg',
  },
  {
    imageUrl: '/about-us-icon/pol4.svg',
    frameImageUrl: '/about-us-icon/pol4a.svg',
  },
  {
    imageUrl: '/about-us-icon/pol5.svg',
    frameImageUrl: '/about-us-icon/pol5a.svg',
  },
];

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
      {cards.map((card, index) => (
        <div
          key={index}
          className="polaroid"
          style={{ zIndex: cards.length - index }}
        >
          <img
            src={card.imageUrl}
            alt={`Polaroid ${index + 1}`}
            className="photo"
          />
          <img
            src={card.frameImageUrl}
            alt={`Frame ${index + 1}`}
            className="frame"
          />
        </div>
      ))}
    </div>
  );
};

const Sponsor = () => {
  return (
    <div className={styles['sponsor-container']}>
      <div className={styles['numbers-words-container']}>
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
      <button className={styles.button}>
        <span className={styles['button-words']}>Sponsor 2024</span>
      </button>
      <div className={styles.cow_duck}>
        <img
          src="/about-us-icon/cow and duck.svg"
          alt="Cow and duck"
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            marginTop: 'auto',
          }}
        />
      </div>
    </div>
  );
};

export default Sponsor;
export { Carousel };
