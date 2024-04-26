'use client';
import { LoadingProvider } from '@contexts/LoadingContext';
import Loader from '@components/Loader/Loader';
import LandingEvent from '../../(index-page)/event/_components/LandingEvent/LandingEvent';
import WhatIsHackdavis from '../../(index-page)/_components/WhatIsHackdavis/WhatIsHackdavis';
import PrizeList from './_components/Prizes/PrizeList';
import RiverCow from '../../(index-page)/_components/RiverCow/RiverCow';
import BottomSection from '../../(index-page)/_components/BottomSection/BottomSection';
import Sponsors from '../../(index-page)/_components/Sponsors/Sponsors';
import Resources from '../../(index-page)/_components/Resources/Resources';
import { resourcePackDOE } from '../../_data/resourceData';

export default function Home() {
  return (
    <LoadingProvider>
      <Loader />
      <main style={{ backgroundColor: 'white', scrollBehavior: 'smooth' }}>
        <div id="landing">
          <LandingEvent />
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
