import Logo from '../Marquee/Logo';
import Marquee from '../Marquee/Marquee';
import styles from './Sponsor.module.scss';

// Row 1: tier 1 sponsors
import Intel from 'public/index/Sponsors/intel.png';
import csDepartment from 'public/index/Sponsors/cs.png';
import asucd from 'public/index/Sponsors/asucd.png';
import ucDavis from 'public/index/Sponsors/ucDavis.png';
import whyNotBoba from 'public/index/Sponsors/whyNotBoba.webp';

// Row 2: tier 2 sponsors
import pepsi from 'public/index/Sponsors/pepsi.png';
import chevron from 'public/index/Sponsors/chevron.png';
import cfc from 'public/index/Sponsors/cfc.jpg';
import glico from 'public/index/Sponsors/Glico.png';
import guayaki from 'public/index/Sponsors/gym.png';
import ucdLS from 'public/index/Sponsors/ls.png';
import rhombus from 'public/index/Sponsors/rhombus.png';

// Row 3: IPO Sponsors
import aggieHouse from 'public/index/Sponsors/IPOs/aggieHouseCow.png';
import lifeOfKai from 'public/index/Sponsors/IPOs/lifeOfKai.png';
import dcmh from 'public/index/Sponsors/IPOs/dcmh.png';

export default function Sponsors() {
  return (
    <div className={styles.container}>
      <Marquee iterations={2} duration={50}>
        <Logo
          imgSrc={Intel}
          url="https://www.intel.com/content/www/us/en/homepage.html"
          alt="Intel Logo"
        />
        <Logo
          imgSrc={ucDavis}
          url="https://www.ucdavis.edu"
          alt="UC Davis Logo"
        />
        <Logo
          imgSrc={csDepartment}
          url="https://cs.ucdavis.edu/"
          alt="UC Davis Computer Science Department Logo"
        />
        <Logo
          imgSrc={asucd}
          url="https://asucd.ucdavis.edu/"
          alt="ASUCD Logo"
        />
        <Logo
          imgSrc={whyNotBoba}
          url="https://www.whynotboba.com/about-us"
          alt="Why Not Boba Logo"
        />
      </Marquee>

      <Marquee iterations={2} reverse duration={50}>
        <Logo imgSrc={pepsi} url="https://www.pepsi.com/" alt="Pepsi Logo" />
        <Logo
          imgSrc={chevron}
          url="https://www.chevron.com/"
          alt="Chevron Logo"
        />
        <Logo
          imgSrc={cfc}
          url="https://csi.ucdavis.edu/cfc/"
          alt="Club Financial Council Logo"
        />
        <Logo imgSrc={glico} url="https://www.glico.com/us/" alt="Glico Logo" />
        <Logo
          imgSrc={guayaki}
          url="https://guayaki.com/"
          alt="Guayaki Yerba Mate Logo"
        />
        <Logo
          imgSrc={ucdLS}
          url="https://lettersandscience.ucdavis.edu/"
          alt="UC Davis College of Letters & Science Logo"
        />
        <Logo
          imgSrc={rhombus}
          url="https://www.rhombus.com/"
          alt="Rhombus logo"
        />
      </Marquee>

      <Marquee iterations={2} duration={50}>
        <Logo
          imgSrc={aggieHouse}
          url="https://www.aggiehousedavis.org/"
          alt="Aggie House Logo"
        />
        <Logo
          imgSrc={lifeOfKai}
          url="https://www.thelifeofkai.org/"
          alt="Life Of Kai Logo"
        />
        <Logo
          imgSrc={dcmh}
          url="https://daviscommunitymeals.org/"
          alt="Davis Community Meals & Housing Logo"
        />
      </Marquee>
    </div>
  );
}
