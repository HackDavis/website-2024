'use client';
import Everyone from './_components/Everyone/Everyone';
import Stats from './_components/Stats/Stats';
import WhatIsHackdavis from './_components/Hero/WhatIsHackdavis/WhatIsHackdavis';
import Landing from './_components/Landing/Landing';
import BottomSection from './_components/BottomSection/BottomSection';
import Sponsors from './_components/Sponsors/Sponsors';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'white', scrollBehavior: 'smooth' }}>
      <div id="landing">
        <Landing />
      </div>
      <div id="whatishackdavis">
        <WhatIsHackdavis />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="everyone">
        <Everyone />
      </div>
      <div id="faq">
        <BottomSection />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
    </main>
  );
}
