import React from 'react';
import styles from './Sponsor.module.scss';
import Image from 'next/image';

type CardProps = {
  imageUrl: string;
  frameImageUrl: string;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  frameImageUrl,
  title,
  description,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.frame}>
        <Image
          src={frameImageUrl}
          alt="Polaroid frame"
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
        <Image
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: 'auto', position: 'relative' }}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
