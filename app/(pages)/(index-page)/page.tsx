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
import PrizeList from '../(event-page)/event/_components/Prizes/PrizeList';
import Resources from './_components/Resources/Resources';
import { resourcePackDOE } from '../_data/resourceData';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the new URL
    router.push('/event');
  }, [router]);

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
