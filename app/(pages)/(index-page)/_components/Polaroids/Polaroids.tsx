import Image from 'next/image';

import styles from './Polaroids.module.scss';

export default function Polaroids() {
  return (
    <div className={styles.container}>
      <div className={styles.questionsText}>
        A hackathon is where you transform your crazy ideas into real projects.
        Hundreds of students from across California form teams around an idea
        and collaboratively create technical solutions to problems we face in
        our local communities. These ideas turn into websites, mobile apps,
        hardware, and more! Join HackDavis to make some of the most imaginative
        projects alongside fellow creators! You take care of building and we'll
        take care of you. We will be following the HackDavis Rules & Policies,
        and MLH's Code Of Conduct.
      </div>
      <div className={styles.allPolaroids}>
        <Image
          src="/index/Polaroids/middlePolaroid.png"
          alt="serene forest scene in the night"
          width={100}
          height={100}
          className={styles.backPolaroid}
        />
        <Image
          src="/index/Polaroids/middlePolaroid.png"
          alt="serene forest scene in the night"
          width={100}
          height={100}
          className={styles.middlePolaroid}
        />
        <Image
          src="/index/Polaroids/middlePolaroid.png"
          alt="serene forest scene in the night"
          width={100}
          height={100}
          className={styles.frontPolaroid}
        />
      </div>
    </div>
  );
}
