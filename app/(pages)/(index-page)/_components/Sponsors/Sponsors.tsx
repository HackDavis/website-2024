import Logo from '../Marquee/Logo';
import Marquee from '../Marquee/Marquee';
import styles from './Sponsor.module.scss';

import Intel from 'public/index/Sponsors/intel.png';

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
          imgSrc={Intel}
          url="https://www.intel.com/content/www/us/en/homepage.html"
          alt="Intel Logo"
        />
        <Logo
          imgSrc={Intel}
          url="https://www.intel.com/content/www/us/en/homepage.html"
          alt="Intel Logo"
        />
      </Marquee>

      <Marquee iterations={2} reverse duration={50}>
        <Logo
          imgSrc={Intel}
          url="https://www.intel.com/content/www/us/en/homepage.html"
          alt="Intel Logo"
        />
        <Logo
          imgSrc={Intel}
          url="https://www.intel.com/content/www/us/en/homepage.html"
          alt="Intel Logo"
        />
        <Logo
          imgSrc={Intel}
          url="https://www.intel.com/content/www/us/en/homepage.html"
          alt="Intel Logo"
        />
      </Marquee>
    </div>
  );
}
