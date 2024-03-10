import React from 'react';
import styles from './Sponsor.module.scss';
import Image from 'next/image';
// import Card from './Card';

const Sponsor = () => {
  // const cards = [
  //   {
  //     imageUrl: '/about-us-icon/pol1.svg',
  //     frameImageUrl: '/about-us-icon/pol1a.svg',
  //     title: 'Pol 1',
  //     description: 'Description 1',
  //   },
  //   {
  //     imageUrl: '/about-us-icon/pol2.svg',
  //     frameImageUrl: '/about-us-icon/pol2a.svg',
  //     title: 'Title 2',
  //     description: 'Description 2',
  //   },
  //   {
  //     imageUrl: '/about-us-icon/pol3.svg',
  //     frameImageUrl: '/about-us-icon/pol3a.svg',
  //     title: 'Title 2',
  //     description: 'Description 2',
  //   },
  //   {
  //     imageUrl: '/about-us-icon/pol4.svg',
  //     frameImageUrl: '/about-us-icon/pol4a.svg',
  //     title: 'Title 2',
  //     description: 'Description 2',
  //   },
  //   {
  //     imageUrl: '/about-us-icon/pol5.svg',
  //     frameImageUrl: '/about-us-icon/pol5a.svg',
  //     title: 'Title 2',
  //     description: 'Description 2',
  //   },
  // ];
  return (
    <div className={styles['sponsor-container']}>
      {/* <div className={styles.carouselContainer}>
        {cards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.imageUrl}
            frameImageUrl={card.frameImageUrl}
            title={card.title}
            description={card.description}
          />
        ))}
      </div> */}
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
        <Image
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
