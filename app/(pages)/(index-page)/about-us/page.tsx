import About from './_components/About/About';
import Archive from './_components/Archive/Archive';
import Hello from './_components/Hello/Hello';
import OurTeam from './_components/OurTeam/OurTeam';
import RegisterNow from './_components/RegisterNow/RegisterNow';
// import Showcase from './_components/Showcase/Showcase';
import Sponsor from './_components/Sponsor/Sponsor';
import Sponsors from '../_components/Sponsors/Sponsors';

import LineBreak from './_components/LineBreak';
export default function Home() {
  return (
    <main style={{ overflow: 'hidden', backgroundColor: 'transparent' }}>
      <Hello />
      <Sponsor />
      <LineBreak />
      <About />
      <LineBreak />
      <OurTeam />
      <LineBreak />
      <Archive />
      <RegisterNow />
      <div id="sponsors">
        <Sponsors />
      </div>
    </main>
  );
}
