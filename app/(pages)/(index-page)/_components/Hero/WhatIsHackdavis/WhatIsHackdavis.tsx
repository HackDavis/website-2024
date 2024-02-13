import styles from './WhatIsHackdavis.module.scss';
import Image from 'next/image';

export default function WhatIsHackdavis() {
  return (
    <div className={styles.container}>
      <div className={styles.logSection}>
        <div>
          <Image
            src="/index/whatIsHackdavis/log_layer0.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logLayer0} // optional
          />
        </div>

        {/* <div>
          <Image
            src="/index/whatIsHackdavis/log_left-rock.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logLeft} // optional
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_right-rock.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logRight} // optional
          />
        </div> */}
      </div>
    </div>
  );
}
