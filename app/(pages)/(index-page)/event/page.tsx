'use client';
import { LoadingProvider } from '@contexts/LoadingContext';
import Loader from '@components/Loader/Loader';
import Landing from '../_components/Landing/Landing';
import WhatIsHackdavis from '../_components/WhatIsHackdavis/WhatIsHackdavis';
import PrizeList from './_components/Prizes/PrizeList';
import RiverCow from '../_components/RiverCow/RiverCow';
import BottomSection from '../_components/BottomSection/BottomSection';
import Sponsors from '../_components/Sponsors/Sponsors';
import Resources from './_components/Resources/Resources';

import { SiNotion, SiSpotify } from 'react-icons/si';
import safetyIcon from 'public/event/safetyIcon.svg';
import mapIcon from 'public/event/mapIcon.svg';
import Image from 'next/image';

type ResourceType = {
  icon: JSX.Element;
  title: string;
};

const resourcePackDOE: ResourceType[] = [
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

export default function Home() {
  return (
    <LoadingProvider>
      <Loader />
      <main style={{ backgroundColor: 'white', scrollBehavior: 'smooth' }}>
        <div id="landing">
          <Landing />
        </div>
        <div id="resources">
          <Resources resourcePack={resourcePackDOE} />
        </div>
        <div id="whatishackdavis">
          <WhatIsHackdavis />
        </div>
        <div id="prizes">
          <PrizeList />
        </div>
        <div id="everyone">
          <RiverCow />
        </div>
        <div id="faq">
          <BottomSection />
        </div>
        <div id="sponsors">
          <Sponsors />
        </div>
      </main>
    </LoadingProvider>
  );
}
