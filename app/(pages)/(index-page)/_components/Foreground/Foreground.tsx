import styles from './Foreground.module.scss';
import Image from 'next/image';

export default function Foreground() {
  return (
    <div className={styles.foreground}>
      <div className={styles.foreground_container}>
        <div className={styles.foreground_characters}>
          <div className={styles.foreground_characters_behind}>
            <div className={styles.foreground_characters_behind_duck}>
              <Image
                src="/index/Hero/hero_duck.png"
                alt="serene forest scene in the night"
                width={4000}
                height={100}
                className={styles.foreground_characters_behind_duck_image}
              />
            </div>
            <div className={styles.foreground_characters_behind_rabbit}>
              <Image
                src="/index/Hero/hero_rabbit.png"
                alt="serene forest scene in the night"
                width={4000}
                height={100}
                className={styles.foreground_characters_behind_rabbit_image}
              />
            </div>
          </div>
          <div className={styles.foreground_characters_front}>
            <div className={styles.foreground_characters_front_cowHead}>
              <Image
                src="/index/Hero/hero_cow-head.png"
                alt="serene forest scene in the night"
                width={4000}
                height={100}
                className={styles.foreground_characters_front_cowHead_image}
              />
            </div>
            <div className={styles.foreground_characters_front_cowBody}>
              <div
                className={styles.foreground_characters_front_cowBody_cowCam}
              >
                <Image
                  src="/index/Hero/hero_cow-cam.png"
                  alt="serene forest scene in the night"
                  width={4000}
                  height={100}
                  className={
                    styles.foreground_characters_front_cowBody_cowCam_image
                  }
                />
              </div>
              <div
                className={styles.foreground_characters_front_cowBody_cowTorso}
              >
                <Image
                  src="/index/Hero/hero_cow-torso.png"
                  alt="serene forest scene in the night"
                  width={4000}
                  height={100}
                  className={
                    styles.foreground_characters_front_cowBody_cowTorso_image
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.foreground_characters}>
        <div className={styles.foreground_characters_behind}>
          <div className={styles.foreground_characters_behind_duck}>
            <Image
              src="/index/Hero/hero_duck.png"
              alt="serene forest scene in the night"
              width={4000}
              height={100}
              className={styles.foreground_characters_behind_duck_image}
            />
          </div>
          <div className={styles.foreground_characters_behind_rabbit}>
            <Image
              src="/index/Hero/hero_rabbit.png"
              alt="serene forest scene in the night"
              width={4000}
              height={100}
              className={styles.foreground_characters_behind_rabbit_image}
            />
          </div>
        </div>
        <div className={styles.foreground_characters_front}>
          <div className={styles.foreground_characters_front_cowHead}>
            <Image
              src="/index/Hero/hero_cow-head.png"
              alt="serene forest scene in the night"
              width={4000}
              height={100}
              className={styles.foreground_characters_front_cowHead_image}
            />
          </div>
          <div className={styles.foreground_characters_front_cowBody}>
            <div className={styles.foreground_characters_front_cowBody_cowCam}>
              <Image
                src="/index/Hero/hero_cow-cam.png"
                alt="serene forest scene in the night"
                width={4000}
                height={100}
                className={
                  styles.foreground_characters_front_cowBody_cowCam_image
                }
              />
            </div>
            <div
              className={styles.foreground_characters_front_cowBody_cowTorso}
            >
              <Image
                src="/index/Hero/hero_cow-torso.png"
                alt="serene forest scene in the night"
                width={4000}
                height={100}
                className={
                  styles.foreground_characters_front_cowBody_cowTorso_image
                }
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.foreground_grass}>
        <Image
          src="/index/Hero/hero_front-grass.png"
          alt="serene forest scene in the night"
          width={4000}
          height={100}
          className={styles.foreground_grass_image}
        />
      </div>
    </div>
  );
}
