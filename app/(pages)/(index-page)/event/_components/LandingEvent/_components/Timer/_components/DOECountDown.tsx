import { useState, useEffect } from 'react';

interface DOECountDownProps {
  endTime: Date;
}

type TimeType = {
  type: string;
  time: string;
};

function TimeContainer(time: TimeType) {
  return (
    <main
      className="tw-flex tw-aspect-square tw-w-36 tw-flex-col tw-items-center tw-justify-center tw-rounded-xl tw-bg-white tw-p-2 tw-text-center tw-text-dark-blue"
      style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
    >
      <span className="tw-text-7xl tw-font-semibold">{time.time}</span>
      <span>{time.type}</span>
    </main>
  );
}
export default function DOECountDown({ endTime }: DOECountDownProps) {
  const [timeLeft, setTimeLeft] = useState<number>(
    endTime.getTime() - Date.now()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(endTime.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const timeUnits = [
    { type: 'Hours', time: hours.toString() },
    { type: 'Minutes', time: minutes.toString() },
    { type: 'Seconds', time: seconds.toString() },
  ];

  return (
    <main className="">
      <div className="tw-flex tw-gap-4">
        {timeUnits.map((timeUnit, index) => (
          <TimeContainer key={index} {...timeUnit} />
        ))}
      </div>
    </main>
  );
}
