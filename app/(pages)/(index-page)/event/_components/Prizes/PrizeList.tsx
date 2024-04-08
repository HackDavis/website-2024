import { useState } from 'react';
import PrizeCard from './_components/PrizeCard';
import styles from './PrizeList.module.scss';
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

// technical prizes
import beats from 'public/index/PrizeList/Technical/beatsstudiopro.png';
import chatgpt from 'public/index/PrizeList/Technical/chatgptplus.png';
import lenovolaptop from 'public/index/PrizeList/Technical/lenovolaptop.png';

// design prizes
import question from 'public/index/PrizeList/Design/_.png';
import creativecloud from 'public/index/PrizeList/Design/creativecloud.png';
import instax from 'public/index/PrizeList/Design/instax.png';

// business prizes
import akasocamera from 'public/index/PrizeList/Business/akasocamera.png';
import beatspro from 'public/index/PrizeList/Business/beatspro.png';
import embermug from 'public/index/PrizeList/Business/embermug.png';
import waterbottle from 'public/index/PrizeList/Business/larqwaterbottle.png';

// mlh prizes
import pen from 'public/index/PrizeList/MLH/3dprintingpen.png';
import microphone from 'public/index/PrizeList/MLH/bluesnowballmicrophone.png';
import breadboard from 'public/index/PrizeList/MLH/breadboardkit.png';
import saucelabs from 'public/index/PrizeList/MLH/saucelabs.png';
import tablet from 'public/index/PrizeList/MLH/wacometablet.png';
import wirelesscharger from 'public/index/PrizeList/MLH/wirelesscharger.png';

// non-profit prizes
import camping from 'public/index/PrizeList/NonProfit/owlcamping.png';
import stuffle from 'public/index/PrizeList/NonProfit/smokoanimals4.png';

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
      name: 'Best AI/ML Hack',
      prizeImages: [chatgpt],
      prizeNames: ['ChatGPT subscription'],
    },
    {
      name: 'Most Technically Challenging Hack',
      prizeImages: [beats],
      prizeNames: ['Beats Studio Pro'],
    },
    {
      name: 'Best use of Intel Developer Cloud',
      prizeImages: [lenovolaptop],
      prizeNames: ['Lenovo Laptops', 'IDC Credit'],
    },
  ],
  Design: [
    {
      name: 'Best UI/UX Prototyping',
      prizeImages: [creativecloud],
      prizeNames: ['Adobe Creative Cloud of 1 year'],
    },
    {
      name: 'Best User Research',
      prizeImages: [instax],
      prizeNames: ['Instax mini'],
    },
    {
      name: 'Best Overall Design',
      prizeImages: [question],
      prizeNames: ['?'],
    },
  ],
  Business: [
    {
      name: 'Best Interactive Media Hack',
      prizeImages: [beatspro],
      prizeNames: ['Beats Studio Pro'],
    },
    {
      name: 'Best Finance & Tech',
      prizeImages: [embermug],
      prizeNames: ['Ember Smart Mug'],
    },
    {
      name: 'Best Entrepreneurship Hack',
      prizeImages: [waterbottle],
      prizeNames: ['Larq self cleaning water bottle'],
    },
    {
      name: 'Best Statistical Model',
      prizeImages: [akasocamera],
      prizeNames: ['AKASO brave'],
    },
  ],
  MLH: [
    {
      name: 'Best DEI Hack Sponsored by Fidelity',
      prizeImages: [wirelesscharger],
      prizeNames: ['Fidelity branded wireless charger'],
    },
    {
      name: 'Best Use of .Tech Domain Name',
      prizeImages: [microphone],
      prizeNames: ['FREE domain name for life & blue snowball microphone '],
    },
    {
      name: 'Best Use of Kintone',
      prizeImages: [breadboard],
      prizeNames: ['Breadboard IoT kit'],
    },
    {
      name: 'Best Use of TinyMCE',
      prizeImages: [pen],
      prizeNames: ['3d Printing Pen'],
    },
    {
      name: 'Best Use of Propel',
      prizeImages: [tablet],
      prizeNames: ['Wacom Tablets'],
    },
    {
      name: 'AuthSauce Labs Raffle',
      prizeImages: [saucelabs],
      prizeNames: ['Swag Bag'],
    },
  ],
  'Non-Profit': [
    {
      name: 'Life of Kai',
      prizeImages: [stuffle, camping],
      prizeNames: ['1 Stuffle & 1 Camping Hammock'],
    },
    {
      name: 'DCMH',
      prizeImages: [stuffle, camping],
      prizeNames: ['1 Stuffle & 1 Camping Hammock'],
    },
    {
      name: 'AggieHouse',
      prizeImages: [stuffle, camping],
      prizeNames: ['1 Stuffle & 1 Camping Hammock'],
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
