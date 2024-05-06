import { useState, useEffect } from 'react';
import { useCallback } from 'react';

interface DOECountDownProps {
  startTime: Date;
  endTime: Date;
}

type TimeType = {
  type: string;
  time: string;
};

function TimeContainer(time: TimeType) {
  return (
    <main
      className="tw-flex tw-aspect-square tw-w-24 tw-flex-col tw-items-center tw-justify-center tw-rounded-xl tw-bg-white tw-p-2 tw-text-center tw-text-dark-blue md:tw-w-36"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <span className="tw-text-5xl tw-font-semibold md:tw-text-7xl">
        {time.time}
      </span>
      <span>{time.type}</span>
    </main>
  );
}
export default function DOECountDown({
  startTime,
  endTime,
}: DOECountDownProps) {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const start = new Date(startTime).getTime();
    const end = new Date(endTime).getTime();

    if (now < start) {
      return null;
    }

    return Math.max(end - now, 0);
  }, [startTime, endTime]);

  const [timeLeft, setTimeLeft] = useState<number | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft, endTime]);

  let hours, minutes, seconds;

  if (timeLeft === null) {
    hours = 24;
    minutes = 0;
    seconds = 0;
  } else {
    hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  }

  const timeUnits = [
    { type: 'Hours', time: hours.toString() },
    { type: 'Minutes', time: minutes.toString() },
    { type: 'Seconds', time: seconds.toString() },
  ];

  return (
    <main className="tw-flex tw-gap-4">
      {timeUnits.map((timeUnit, index) => (
        <TimeContainer key={index} {...timeUnit} />
      ))}
    </main>
  );
}
