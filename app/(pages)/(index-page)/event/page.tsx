'use client';
import { LoadingProvider } from '@contexts/LoadingContext';
import Loader from '@components/Loader/Loader';
//import Timer from './_components/LandingEvent/_components/Timer/Timer';
//import Landing from '../_components/Landing/Landing';
import WhatIsHackdavis from '../_components/WhatIsHackdavis/WhatIsHackdavis';
import ScheduleBlock from './_components/Schedule/Schedule';
import PrizeList from './_components/Prizes/PrizeList';
import RiverCow from '../_components/RiverCow/RiverCow';
import BottomSection from '../_components/BottomSection/BottomSection';
import Sponsors from '../_components/Sponsors/Sponsors';
import LandingEvent from './_components/LandingEvent/LandingEvent';

export default function Home() {
  return (
    <LoadingProvider>
      <Loader />
      <main style={{ backgroundColor: 'white', scrollBehavior: 'smooth' }}>
        <div id="landing">
          <LandingEvent />
        </div>
        <div id="schedule">
          <ScheduleBlock />
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
