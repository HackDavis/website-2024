'use client';

import LandingEvent from '../_components/LandingEvent/LandingEvent';

export default function DayTimer() {
  return (
    <main style={{ backgroundColor: 'white', scrollBehavior: 'smooth' }}>
      <div style={{ height: '150px', background: '#7ACCDA' }}></div>
      <div id="landing">
        <LandingEvent />
      </div>
      <div
        className="tw-absolute tw-left-1/2 tw-z-40 tw-flex tw-gap-8 tw-font-semibold"
        style={{
          top: '65%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <span>WIFI: hackdavis2024</span>
        <span>Password: intel@HD2024</span>
      </div>
    </main>
  );
}
