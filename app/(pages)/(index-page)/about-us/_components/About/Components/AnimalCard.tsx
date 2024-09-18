import styles from './AnimalCard.module.scss';

import Image from 'next/image';

export type AnimalCardProps = {
  title: string;
  text: string;
  imagePath: string;
  imageName: string;
  color: string;
};

export default function AnimalCard(props: AnimalCardProps) {
  const { title, text, imagePath, imageName, color } = props;

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.text}>{text}</p>
      <Image
        src={imagePath}
        width={100}
        height={100}
        alt={imageName}
        className={styles.animalImage}
      />
    </div>
  );
}
