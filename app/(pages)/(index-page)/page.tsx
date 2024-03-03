'use client';
import Everyone from './_components/Everyone/Everyone';
import Stats from './_components/Stats/Stats';
import WhatIsHackdavis from './_components/Hero/WhatIsHackdavis/WhatIsHackdavis';
import Landing from './_components/Landing/Landing';
import BottomSection from './_components/BottomSection/BottomSection';
import Sponsors from './_components/Sponsors/Sponsors';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'white' }}>
      <Landing />
      <WhatIsHackdavis />
      <Stats />
      <Everyone />
      <BottomSection />
      <Sponsors />
    </main>
  );
}
