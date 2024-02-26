import styles from './WhatIsHackdavis.module.scss';
import Image from 'next/image';

export default function WhatIsHackdavis() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.heading}>What is Hackdavis?</h1>
        <p className={styles.paragraph}>
          HackDavis is the largest collegiate hackathon in California where over
          750 students, creators, and leaders come together for 36 hours to
          create for social good.
        </p>
      </div>
      <div className={styles.logStuff}>
        <div className={styles.logLeftSection}>
          <Image
            src="/index/whatIsHackdavis/log_left-rock.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logLeft}
          />
        </div>

        <div className={styles.logRightSection}>
          <Image
            src="/index/whatIsHackdavis/log_layer0.png"
            alt="serene forest scene in the night"
            width={4000}
            height={1000}
            className={styles.logLayer0}
          />

          <Image
            src="/index/whatIsHackdavis/log_layer1-left.png"
            alt="serene forest scene in the night"
            width={4000}
            height={1000}
            className={styles.logLayer1Left}
          />

          <Image
            src="/index/whatIsHackdavis/log_layer2-left.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logLayer2Left}
          />

          <Image
            src="/index/whatIsHackdavis/log_right-rock.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logRight}
          />

          <Image
            src="/index/whatIsHackdavis/log_layer1-right.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logLayer1Right}
          />

          <Image
            src="/index/whatIsHackdavis/log_layer2-right.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logLayer2Right}
          />

          <Image
            src="/index/whatIsHackdavis/log_rabbit.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logRabbit}
          />

          <Image
            src="/index/whatIsHackdavis/log_frog.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logFrog}
          />

          <Image
            src="/index/whatIsHackdavis/log_gingko.png"
            alt="serene forest scene in the night"
            width={4000}
            height={100}
            className={styles.logGingko}
          />
        </div>

        <Image
          src="/index/whatIsHackdavis/log_water-sheen.png"
          alt="serene forest scene in the night"
          width={4000}
          height={100}
          className={styles.logWaterSheen}
        />
      </div>
    </div>
  );
}
