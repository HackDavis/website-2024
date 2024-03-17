// CountUp.tsx
import React, { useEffect, useState, useRef } from 'react';

interface CountUpProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({
  end,
  duration,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);
  const countUpRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isCentered = (ref: React.RefObject<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        const windowHeight = window.innerHeight;
        return (
          rect.top >= 0 &&
          rect.bottom <= (windowHeight || document.documentElement.clientHeight)
        );
      }
      return false;
    };

    const handleScroll = () => {
      if (countUpRef.current && isCentered(countUpRef) && !start) {
        setStart(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [start]);

  useEffect(() => {
    if (start) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = timestamp - startTimestamp;
        const currentCount = Math.min(end, (progress / duration) * end);
        setCount(currentCount);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [start, end, duration]);

  return (
    <div ref={countUpRef} style={{ fontFamily: 'Metropolis' }}>
      {start && (
        <>
          {prefix}
          {Math.floor(count)}
          {suffix}
        </>
      )}
    </div>
  );
};

export default CountUp;
