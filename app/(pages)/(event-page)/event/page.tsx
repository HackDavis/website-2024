'use client';
import { LoadingProvider } from '@contexts/LoadingContext';
import Loader from '@components/Loader/Loader';
import Landing from '../../(index-page)/_components/Landing/Landing';
import WhatIsHackdavis from '../../(index-page)/_components/WhatIsHackdavis/WhatIsHackdavis';
import PrizeList from './_components/Prizes/PrizeList';
import RiverCow from '../../(index-page)/_components/RiverCow/RiverCow';
import BottomSection from '../../(index-page)/_components/BottomSection/BottomSection';
import Sponsors from '../../(index-page)/_components/Sponsors/Sponsors';
import Resources from '../../(index-page)/_components/Resources/Resources';
// import Schedule from '../event/schedule/_components/Schedule';
import { resourcePackDOE } from '../../_data/resourceData';
// import Link from 'next/link';

export default function Home() {
  return (
    <LoadingProvider>
      <Loader />
      <main
        style={{
          backgroundColor: 'white',
          scrollBehavior: 'smooth',
        }}
      >
        <div id="landing">
          <Landing />
        </div>
        <div id="resources">
          <Resources resourcePack={resourcePackDOE} />
        </div>
        {/* <div
          id="schedule"
          className="tw-w-full tw-overflow-clip tw-border tw-border-red-300"
          style={{ height: '900px' }}
        >
          <Link target="_blank" href="/event/schedule">
            <Schedule />
          </Link>
        </div> */}
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
