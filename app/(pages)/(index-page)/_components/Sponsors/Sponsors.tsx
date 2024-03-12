import Logo from '../Marquee/Logo';
import Marquee from '../Marquee/Marquee';
import styles from './Sponsor.module.scss';

// tier 1 sponsors
// import Intel from 'public/index/Sponsors/intel_logo.png';
import csDepartment from 'public/index/Sponsors/whiteLogos/cs_white.png';
import asucd from 'public/index/Sponsors/whiteLogos/asucd_white.png';

// tier 2 sponsors
import pepsi from 'public/index/Sponsors/whiteLogos/pepsi_white-new.png';
import chevron from 'public/index/Sponsors/whiteLogos/chevron_white.png';
import cfc from 'public/index/Sponsors/whiteLogos/cfc_white.png';
import glico from 'public/index/Sponsors/whiteLogos/Glico (White).png';
import guayaki from 'public/index/Sponsors/whiteLogos/gym_white.png';
import ucdLS from 'public/index/Sponsors/whiteLogos/ls_white.png';

export default function Sponsors() {
  return (
    <div className={styles.container}>
      <Marquee iterations={2} duration={50}>
        {/* <Logo
          imgSrc={Intel}
          url="https://www.intel.com/content/www/us/en/homepage.html"
          alt="Intel Logo"
        /> */}
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
      </Marquee>
    </div>
  );
}
