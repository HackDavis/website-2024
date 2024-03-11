import About from './_components/About/About';
import Archive from './_components/Archive/Archive';
import Hello from './_components/Hello/Hello';
import OurTeam from './_components/OurTeam/OurTeam';
import RegisterNow from './_components/RegisterNow/RegisterNow';
import Showcase from './_components/Showcase/Showcase';
import Sponsors from '../(index-page)/_components/Sponsors/Sponsors';

export default function Home() {
  return (
    <main style={{ overflow: 'hidden' }}>
      <Hello />
      <Showcase />
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
