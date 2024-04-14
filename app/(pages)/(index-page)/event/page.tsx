'use client';
import { LoadingProvider } from '@contexts/LoadingContext';
import Loader from '@components/Loader/Loader';
import Landing from '../_components/Landing/Landing';
import WhatIsHackdavis from '../_components/WhatIsHackdavis/WhatIsHackdavis';
import Schedule from './_components/Schedule/Schedule';
import PrizeList from './_components/Prizes/PrizeList';
import RiverCow from '../_components/RiverCow/RiverCow';
import BottomSection from '../_components/BottomSection/BottomSection';
import Sponsors from '../_components/Sponsors/Sponsors';

export default function Home() {
  return (
    <LoadingProvider>
      <Loader />
      <main style={{ backgroundColor: 'white', scrollBehavior: 'smooth' }}>
        <div id="landing">
          <Landing />
        </div>
        <div id="schedule" className="tw-border tw-border-purple-400">
          <Schedule />
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
