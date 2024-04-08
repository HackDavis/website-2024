import { useState } from 'react';
import PrizeCard from './_components/PrizeCard';
import styles from './PrizeList.module.scss';
import Intel from 'public/index/Sponsors/intel.png';
import ucDavis from 'public/index/Sponsors/ucDavis.png';
import { StaticImageData } from 'next/image';

// statically importing prize images

// general prizes
import camcorder from 'public/index/PrizeList/General/camcorder.png';
import tv from 'public/index/PrizeList/General/tv.png';
import fitbit from 'public/index/PrizeList/General/fitbit.png';
import fujifilm from 'public/index/PrizeList/General/fujifilm.png';
import ipad from 'public/index/PrizeList/General/ipad.png';
import keyboard from 'public/index/PrizeList/General/keyboard.png';
import legocamera from 'public/index/PrizeList/General/legocamera.png';
import metaquest from 'public/index/PrizeList/General/metaquest3.png';
import moneybag from 'public/index/PrizeList/General/noto_money-bag.png';
import swagbag from 'public/index/PrizeList/General/swagbag.png';

const filters = [
  'General',
  'Technical',
  'Design',
  'Business',
  'MLH',
  'Non-Profit',
];

type PrizeCategory = {
  name: string;
  prizeImages: StaticImageData[];
  prizeNames: string[];
};

type PrizeCategories = {
  [key: string]: PrizeCategory[];
};

const prizeCategories: PrizeCategories = {
  General: [
    {
      name: 'Best Hack for Social Good',
      prizeImages: [metaquest, ipad],
      prizeNames: ['Meta Quest 3', 'IPad (9th gen)'],
    },
    {
      name: 'Best Beginner Hack',
      prizeImages: [tv],
      prizeNames: ['Insignia 42” smart tv'],
    },
    {
      name: 'HackBest Interdisciplinary',
      prizeImages: [fujifilm],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
    {
      name: 'HackBest Hardware',
      prizeImages: [keyboard],
      prizeNames: ['Mechanical Keyboard'],
    },
    {
      name: "Hacker's choice",
      prizeImages: [swagbag],
      prizeNames: ['HackDavis Swag Bag'],
    },
    {
      name: 'Beast Health HackBest',
      prizeImages: [fitbit],
      prizeNames: ['Fitbit'],
    },
    {
      name: 'Hack for Social Justice',
      prizeImages: [camcorder],
      prizeNames: ['Minolta camcorder'],
    },
    {
      name: 'Most Creative',
      prizeImages: [legocamera],
      prizeNames: ['Lego polaroid camera'],
    },
    {
      name: 'HackBest CyberSecurity Hack powered by Cloaked',
      prizeImages: [moneybag],
      prizeNames: ['$100'],
    },
  ],
  Technical: [
    {
      name: 'Best Hack for Social Good',
      prizeImages: [Intel, ucDavis],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
  ],
  Design: [
    {
      name: 'Best Hack for Social Good',
      prizeImages: [Intel, ucDavis],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
    {
      name: 'Best Beginner Hack',
      prizeImages: [Intel, ucDavis],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
    {
      name: 'Most Creative Hack',
      prizeImages: [Intel],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
  ],
  Business: [
    {
      name: 'Best Hack for Social Good',
      prizeImages: [Intel, ucDavis],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
    {
      name: 'Best Beginner Hack',
      prizeImages: [Intel, ucDavis],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
    {
      name: 'Most Creative Hack',
      prizeImages: [Intel],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
  ],
  MLH: [
    {
      name: 'Best Hack for Social Good',
      prizeImages: [Intel, ucDavis],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
    {
      name: 'Best Beginner Hack',
      prizeImages: [Intel, ucDavis],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
    {
      name: 'Most Creative Hack',
      prizeImages: [Intel],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
  ],
  'Non-Profit': [
    {
      name: 'Best Hack for Social Good',
      prizeImages: [Intel, ucDavis],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
    {
      name: 'Best Beginner Hack',
      prizeImages: [Intel, ucDavis],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
    {
      name: 'Most Creative Hack',
      prizeImages: [Intel],
      prizeNames: ['Fujifilm instax SQ40 camera'],
    },
  ],
};

export default function PrizeList() {
  const [activeFilter, setActiveFilter] = useState<string>('General');

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
        {prizeCategories[activeFilter].map((category) => (
          <PrizeCard
            key={category.name}
            name={category.name}
            prizeImages={category.prizeImages}
            prizeNames={category.prizeNames}
          />
        ))}
      </div>
    </div>
  );
}
