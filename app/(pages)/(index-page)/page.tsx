'use client';
import WhatIsHackdavis from './_components/Hero/WhatIsHackdavis/WhatIsHackdavis';
import Landing from './_components/Landing/Landing';
import BottomSection from './_components/BottomSection/BottomSection';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'white' }}>
      <Landing />
      <WhatIsHackdavis />
      <BottomSection />
    </main>
  );
}
