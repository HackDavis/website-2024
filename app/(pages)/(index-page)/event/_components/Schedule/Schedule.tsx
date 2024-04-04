import ScheduleBlock from './_components/ScheduleBlock';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';

type ScheduleDay = {
  dayString: string;
  day: Date;
};

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

export type ScheduleBlock = {
  dateTime: Date;
  dateTimeString: string;
  title: string;
  description: string;
  type: string;
  location: string;
};

export type TimeTable = {
  maxTimeSlots: number;
  scheduleBlocks: ScheduleBlock[];
  colors: Record<string, string>;
};

const Filters: string[] = ['Activity', 'Workshop', 'Menu'];

const timeTable: TimeTable = {
  maxTimeSlots: 24,
  scheduleBlocks: [],
  colors: {
    Activity: 'tw-bg-cyan-600',
    Workshop: 'tw-bg-yellow-400',
    Menu: 'tw-bg-green-400',
  },
};

export default function Schedule() {
  const [currentDay, setCurrentDay] = useState(eventDays[0]);

  return (
    <main className="tw-flex tw-flex-col tw-border tw-border-black tw-px-32">
      <div className="tw-flex tw-items-center tw-justify-between tw-py-10">
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
            className="tw-flex tw-gap-1 tw-rounded-3xl tw-bg-cyan-600 tw-p-3 tw-font-semibold tw-text-white"
          >
            <Check />
            {filter}
          </button>
        ))}
      </div>
    </main>
  );
}
