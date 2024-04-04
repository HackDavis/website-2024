import Image from 'next/image';
import Trophy from 'public/index/PrizeList/trophy.png';
import Plus from 'public/index/PrizeList/plus.png';
import styles from './PrizeCard.module.scss';

interface PrizeCardProps {
  name: string;
}

export default function PrizeCard({ name }: PrizeCardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageBackground}>{/* <Image /> */}</div>
        <div className={styles.info}>
          <div>
            <h3 className={styles.header}>{name}</h3>
            <div className={styles.prizes}>
              <div className={styles.place}>
                <Image src={Trophy} alt="Trophy" className={styles.trophy} />
                <p className={styles.placeText}>1st Place</p>
              </div>
              <div className={styles.place}>
                <Image src={Trophy} alt="Trophy" className={styles.trophy} />
                <p className={styles.placeText}>2nd Place</p>
              </div>
            </div>
          </div>
          <div className={styles.eligibility}>
            <p className={styles.eligibilityText}>ELIGIBILITY CRITERIA</p>
            <Image src={Plus} alt="Plus" className={styles.plus} />
          </div>
        </div>
      </div>
    </div>
  );
}
