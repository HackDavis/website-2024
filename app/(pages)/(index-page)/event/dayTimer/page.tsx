'use client';

import LandingEvent from '../_components/LandingEvent/LandingEvent';

export default function DayTimer() {
  return (
    <main style={{ backgroundColor: 'white', scrollBehavior: 'smooth' }}>
      <div style={{ height: '150px', background: '#7ACCDA' }}></div>
      <div id="landing">
        <LandingEvent />
      </div>
    </main>
  );
}
