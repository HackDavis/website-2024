'use client';
import WhatIsHackdavis from './_components/Hero/WhatIsHackdavis/WhatIsHackdavis';
import Landing from './_components/Landing/Landing';

export default function Home() {
  return (
    <main style={{ backgroundColor: 'white' }}>
      <Landing />
      <WhatIsHackdavis />
    </main>
  );
}
