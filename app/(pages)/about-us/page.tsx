import About from './_components/About/About';
import Archive from './_components/Archive/Archive';
import Hello from './_components/Hello/Hello';
import OurTeam from './_components/OurTeam/OurTeam';
import RegisterNow from './_components/RegisterNow/RegisterNow';
import Sponsor from './_components/Sponsor/Sponsor';
import Sponsors from '../(index-page)/_components/Sponsors/Sponsors';

export default function Home() {
  return (
    <main>
      <Hello />
      <Sponsor />
      <About />
      <OurTeam />
      <Archive />
      <RegisterNow />
      <div id="sponsors">
        <Sponsors />
      </div>
    </main>
  );
}
