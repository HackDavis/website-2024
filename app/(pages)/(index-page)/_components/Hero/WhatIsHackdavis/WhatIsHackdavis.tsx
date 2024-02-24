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
            priority
            className={styles.logLayer0}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_layer1-left.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logLayer1Left}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_layer1-right.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logLayer1Right}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_layer2-left.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logLayer2Left}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_layer2-right.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logLayer2Right}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_gingko.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logGingko}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_left-rock.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logLeft}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_right-rock.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logRight}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_water-sheen.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logWaterSheen}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_rabbit.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logRabbit}
          />
        </div>

        <div>
          <Image
            src="/index/whatIsHackdavis/log_frog.png"
            alt="serene forest scene in the night"
            width={0}
            height={0}
            sizes="100vw"
            className={styles.logFrog}
          />
        </div>
      </div>
    </div>
  );
}
