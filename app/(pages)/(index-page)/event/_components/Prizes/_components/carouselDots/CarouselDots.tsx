import styles from './CarouselDots.module.scss';

interface CarouselDotsProps {
  moveDot: boolean;
}
export default function CarouselDots({ moveDot }: CarouselDotsProps) {
  return (
    <div className={styles.dotContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="4"
        viewBox="0 0 4 4"
        fill="none"
      >
        <circle
          cx="2"
          cy="2"
          r="2"
          fill="#123041"
          fillOpacity={moveDot ? '0.5' : '1'}
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="4"
        viewBox="0 0 4 4"
        fill="none"
      >
        <circle
          cx="2"
          cy="2"
          r="2"
          fill="#123041"
          fillOpacity={moveDot ? '1' : '0.5'}
        />
      </svg>
    </div>
  );
}
