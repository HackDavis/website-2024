import Clouds from '@landingComponents/Clouds/Clouds';
import Grass from '@landingComponents/Grass/Grass';
import styles from './LandingEvent.module.scss';
import { usePathname } from 'next/navigation'; // Import useRouter

import Timer from './_components/Timer/Timer';

export default function LandingEvent() {
  const pathname = usePathname();
  const isDayTimer = pathname.includes('dayTimer');

  return (
    <main className={styles.landing}>
      <div className={styles.landing_container}>
        {isDayTimer ? (
          <div
            className="tw-absolute tw-left-1/2 tw-top-1/2 tw-z-10"
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <Timer />
          </div>
        ) : (
          <div className={styles.form}>
            <Timer />
          </div>
        )}
        <div className={styles.clouds}>
          <Clouds />
        </div>
        <div
          className={styles.grass}
          style={isDayTimer ? { marginTop: '-28vw' } : {}}
        >
          <Grass />
        </div>
      </div>
    </main>
  );
}
// .grass{
//   position: relative;
//   z-index: 2;
//   margin-top: -12vw;
//   @media(max-width: $tablet-breakpoint){
//     margin-top: -130px;
//   }

//   @media(max-width: $mobile-breakpoint){
//     margin-top: -250px;
//   }
// }
