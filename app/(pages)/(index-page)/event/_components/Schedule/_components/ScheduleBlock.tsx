import { useState } from 'react';

type ScheduleData = {
  date: string;
  events: { time: string }[];
};

const schedules: ScheduleData[] = [
  {
    date: 'Saturday, April 27',
    events: [],
  },
  {
    date: 'Sunday, April 28',
    events: [{ time: '8:00' }],
  },
];

export default function ScheduleBlock() {
  const [scheduleIndex, setScheduleIndex] = useState(0);
  const incIndex = () => {
    setScheduleIndex((prev) => (prev + 1) % schedules.length);
  };

  const decIndex = () => {
    setScheduleIndex(
      (prev) => (schedules.length + prev - 1) % schedules.length
    );
  };

  return (
    <div className="tw-flex tw-border tw-border-black">
      <div className="tw-flex tw-bg-slate-500 tw-border tw-border-black"></div>
    </div>
  );
}
