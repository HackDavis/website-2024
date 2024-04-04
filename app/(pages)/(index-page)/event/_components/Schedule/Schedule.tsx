import ScheduleBlock from './_components/ScheduleBlock';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';

type ScheduleDay = {
  dayString: string;
  day: Date;
};

const Filters: string[] = ['Activity', 'Workshop', 'Menu'];

const eventDays: ScheduleDay[] = [
  {
    dayString: 'Saturday, April 27',
    day: new Date('2023-04-27'),
  },
  {
    dayString: 'Sunday, April 28',
    day: new Date('2023-04-28'),
  },
];

export default function Schedule() {
  const [currentDay, setCurrentDay] = useState(eventDays[0]);

  return (
    <main className="tw-flex tw-flex-col tw-border tw-border-black tw-px-32">
      <div className="tw-flex tw-items-center tw-justify-between">
        <h1 className="tw-font-semibold">Schedule</h1>
        <div className="tw-flex">
          <span>{currentDay.dayString}</span>
          <ChevronLeft onClick={() => setCurrentDay(eventDays[0])} />
          <ChevronRight onClick={() => setCurrentDay(eventDays[1])} />
        </div>
      </div>
      <div className="tw-flex tw-gap-3">
        {Filters.map((filter) => (
          <button
            key={filter}
            className="flex tw-rounded tw-bg-gray-200 tw-p-2"
          >
            <Check />
            {filter}
          </button>
        ))}
      </div>
    </main>
  );
}
