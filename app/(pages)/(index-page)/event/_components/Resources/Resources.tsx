import styles from './Resources.module.scss';
import { SiNotion, SiSpotify } from 'react-icons/si';
import safetyIcon from 'public/event/safetyIcon.svg';
import mapIcon from 'public/event/mapIcon.svg';
import Image from 'next/image';

const data = [
  { icon: <SiNotion />, title: 'STARTER PACK' },
  { icon: <SiSpotify />, title: 'CREATOR JAMS' },
  {
    icon: <Image src={mapIcon} alt="event map logo." />,
    title: 'EVENT MAP',
  },
  {
    icon: <Image src={safetyIcon} alt="safety info logo." />,
    title: 'SAFETY INFO',
  },
];

export default function Resources() {
  return (
    <div className={styles.main_container}>
      <h1 className="tw-font-semibold">Resources</h1>
      <div className="tw-grid tw-grid-cols-4">
        {data.map((resource, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.card_icons}>{resource.icon}</div>
              <h4 className={styles.card_titles}>{resource.title}</h4>
            </div>
          );
        })}
      </div>
      <div className={styles.resource_cards}>
        {data.map((resource, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.card_icons}>{resource.icon}</div>
              <h4 className={styles.card_titles}>{resource.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
