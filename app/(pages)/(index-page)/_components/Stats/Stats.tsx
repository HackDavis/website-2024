import styles from './Stats.module.scss';
import CountUp from '@components/CountUp/CountUp';

const statsData = [
  { stat: 140, text: 'projects', duration: 2000 },
  { stat: 750, text: 'hackers', suffix: '+', duration: 2000 },
  { stat: 20, text: 'prizes', prefix: '$', suffix: 'k+', duration: 2000 },
  { stat: 24, text: 'hours', duration: 2000 },
];

export default function Stats() {
  return (
    <div className={styles.container}>
      <div className={styles.stats}>
        {statsData.map((item) => (
          <div key={item.stat} className={styles.stats_inside}>
            <h1>
              <CountUp
                end={item.stat}
                duration={item.duration}
                prefix={item.prefix}
                suffix={item.suffix}
              />
            </h1>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.button_container}>
        <a href="mailto:team@hackdavis.io">
          <div className={styles.button}>
            <span>Sponsor 2025</span>
          </div>
        </a>
      </div>
    </div>
  );
}
