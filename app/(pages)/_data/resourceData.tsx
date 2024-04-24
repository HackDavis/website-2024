import { SiNotion, SiProtoncalendar, SiSpotify } from 'react-icons/si';
import Image from 'next/image';
import safetyIcon from 'public/event/safetyIcon.svg';
import mapIcon from 'public/event/mapIcon.svg';

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
  { icon: <SiNotion />, title: 'STARTER PACK', url: 'temp' },
  { icon: <SiSpotify />, title: 'CREATOR JAMS', url: 'temp' },

  {
    icon: <Image src={mapIcon} alt="event map logo." />,
    title: 'EVENT MAP',
    url: 'temp',
  },
  {
    icon: <Image src={safetyIcon} alt="safety info logo." />,
    title: 'SAFETY INFO',
    url: 'temp',
  },
];