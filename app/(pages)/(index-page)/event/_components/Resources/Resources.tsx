import styles from './Resources.module.scss';
import { SiNotion, SiSpotify, SiProtoncalendar } from 'react-icons/si';
import safetyIcon from 'public/event/safetyIcon.svg';
import mapIcon from 'public/event/mapIcon.svg';
import Image from 'next/image';
import { CalendarCheck2 } from 'lucide-react';

const resourcePack = [
  { icon: <SiNotion />, title: 'STARTER PACK' },
  { icon: <SiProtoncalendar />, title: 'HACKDAVIS 2024 CALENDAR' },
];

const resourcePackDOE = [
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
      <div
        className="tw-grid tw-gap-6"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        }}
      >
        {resourcePack.map((resource, index) => {
          return (
            <div
              key={index}
              className="tw-text-dark-blue sm:tw-aspect-content tw-flex tw-cursor-pointer tw-flex-col tw-items-center tw-justify-center tw-gap-6 tw-rounded-3xl tw-border tw-p-9 md:tw-aspect-auto lg:tw-aspect-auto"
            >
              <div className={styles.card_icons}>{resource.icon}</div>
              <h4 className={styles.card_titles}>{resource.title}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
