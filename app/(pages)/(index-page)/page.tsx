'use client';
// import Everyone from './_components/Everyone/Everyone';
import Stats from './_components/Stats/Stats';
import WhatIsHackdavis from './_components/WhatIsHackdavis/WhatIsHackdavis';
import Landing from './_components/Landing/Landing';
import BottomSection from './_components/BottomSection/BottomSection';
import Sponsors from './_components/Sponsors/Sponsors';
import { LoadingProvider } from '@contexts/LoadingContext';
import Loader from '@components/Loader/Loader';
import RiverCow from './_components/RiverCow/RiverCow';
import PrizeList from './event/_components/Prizes/PrizeList';
import Resources from './event/_components/Resources/Resources';
import { SiNotion, SiProtoncalendar } from 'react-icons/si';

type ResourceType = {
  icon: JSX.Element;
  title: string;
};

const resourcePack: ResourceType[] = [
  { icon: <SiNotion />, title: 'STARTER PACK' },
  { icon: <SiProtoncalendar />, title: 'HACKDAVIS 2024 CALENDAR' },
];

export default function Home() {
  return (
    <LoadingProvider>
      <Loader />
      <main style={{ backgroundColor: 'white', scrollBehavior: 'smooth' }}>
        <div id="landing">
          <Landing />
        </div>
        <div className="">
          <Resources resourcePack={resourcePack} />
        </div>
        <div id="whatishackdavis">
          <WhatIsHackdavis />
        </div>
        <div id="stats">
          <Stats />
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
