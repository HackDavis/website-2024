import { SiNotion, SiProtoncalendar, SiSpotify } from 'react-icons/si';
import { LuCalendarClock } from 'react-icons/lu';
import { FaCalendarDay } from 'react-icons/fa6';
import Image from 'next/image';
import safetyIcon from 'public/event/safetyIcon.svg';
import mapIcon from 'public/event/mapIcon.svg';
// import { CalendarClock } from 'lucide-react';

export type ResourceType = {
  icon: JSX.Element;
  title: string;
  url: string;
};

export const resourcePack: ResourceType[] = [
  {
    icon: <SiNotion />,
    title: 'STARTER PACK',
    url: 'https://hackdavis.notion.site/HackDavis-2024-Starter-Pack-bea21741698046e99e46f13c9b311039?pvs=4',
  },
  {
    icon: <SiProtoncalendar />,
    title: 'HACKDAVIS 2024 CALENDAR',
    url: 'https://drive.google.com/file/d/1AGBLnS55qNEuGNXh9VLSdx2PaHsGVgE7/view?usp=drive_link',
  },
];

export const resourcePackDOE: ResourceType[] = [
  {
    icon: <SiNotion />,
    title: 'STARTER PACK',
    url: 'https://hackdavis.notion.site/HackDavis-2024-Starter-Pack-bea21741698046e99e46f13c9b311039?pvs=4',
  },
  {
    icon: <SiSpotify />,
    title: 'CREATOR JAMS',
    url: 'https://open.spotify.com/playlist/5Izx2G67iaShHyLeShoOaK?si=LonAnRy-TXySP51NDfbZvw&pi=u-hA1Wp2ebTNWb',
  },

  {
    icon: <Image src={mapIcon} alt="event map logo." />,
    title: 'EVENT MAP',
    url: 'temp',
  },
  {
    icon: <Image src={safetyIcon} alt="safety info logo." />,
    title: 'SAFETY INFO',
    url: 'https://www.notion.so/hackdavis/HackDavis-Safety-42561065cd254194bc26bcf48432f36a',
  },
  {
    icon: <FaCalendarDay />,
    title: 'SCHEDULE',
    url: '/event/schedule',
  },
];
