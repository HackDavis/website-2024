import { useState } from 'react';
import PrizeCard from './_components/PrizeCard';
import styles from './PrizeList.module.scss';
import Intel from 'public/index/Sponsors/intel.png';
import ucDavis from 'public/index/Sponsors/ucDavis.png';

const filters = ['All', 'Design', 'Development', 'Business'];

const prizeCategories = [
  {
    name: 'Best Hack for Social Good',
    prizeImages: [Intel, ucDavis],
  },
  {
    name: 'Best Beginner Hack',
    prizeImages: [Intel, ucDavis],
  },
  {
    name: 'Most Creative Hack',
    prizeImages: [Intel],
  },
];

export default function PrizeList() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Prizes</h3>
      <div className={styles.filters}>
        {filters.map((filter) => (
          <div
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={
              filter == activeFilter ? styles.filterActive : styles.filter
            }
          >
            {filter}
          </div>
        ))}
      </div>
      <div className={styles.prizes}>
        {prizeCategories.map((category) => (
          <PrizeCard
            key={category.name}
            name={category.name}
            prizeImages={category.prizeImages}
          />
        ))}
      </div>
    </div>
  );
}
