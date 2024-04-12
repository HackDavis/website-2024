import { generateClock } from '../Calculations';
interface LeftClockProps {
  startTime: Date;
}

export default function LeftClock({ startTime }: LeftClockProps) {
  const endTime = new Date(startTime);
  endTime.setDate(startTime.getDate() + 1);

  const clockTimes = generateClock(startTime, endTime);

  return (
    <main className="">
      {clockTimes.map((time, index) => (
        <div
          key={index}
          className="tw-col-start-1 tw-border tw-border-purple-500"
        >
          {time}:00
        </div>
      ))}
    </main>
  );
}
