import TimeTable from './_components/TimeTable';
import ScheduleBlock from './_components/_components/ScheduleBlock';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';
import type {
  ScheduleBlockProp,
  TimeTableProps,
} from './_components/Schedule.types';

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

const Filters: string[] = ['Activity', 'Workshop', 'Menu'];

const mockScheduleBlocks: ScheduleBlockProp[] = [
  {
    startTime: new Date('2023-04-27T09:00:00'),
    endTime: new Date('2023-04-27T10:00:00'),
    title: 'Opening Ceremony',
    description: 'Welcome to HackDavis 2023!',
    type: 'Activity',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T09:00:00'),
    endTime: new Date('2023-04-27T11:00:00'),
    title: 'Opening Ceremony #2',
    description: 'Welcome to HackDavis 2023!',
    type: 'Activity',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T10:00:00'),
    endTime: new Date('2023-04-27T11:00:00'),
    title: 'Check In',
    type: 'Activity',
    location: 'Lobby',
  },
  {
    startTime: new Date('2023-04-27T13:00:00'),
    endTime: new Date('2023-04-27T15:00:00'),
    title: 'Dance Class',
    type: 'Workshop',
    location: 'ARC Pavilion',
  },
  {
    startTime: new Date('2023-04-27T13:00:00'),
    endTime: new Date('2023-04-27T14:00:00'),
    title: 'Music Class',
    type: 'Workshop',
    location: 'ARC Pavilion',
  },
  {
    startTime: new Date('2023-04-27T13:00:00'),
    endTime: new Date('2023-04-27T14:00:00'),
    title: 'Lunch Time',
    type: 'Menu',
    location: 'Lobby',
  },
  {
    startTime: new Date('2023-04-27T15:00:00'),
    endTime: new Date('2023-04-27T15:30:00'),
    title: '30 mins Interval',
    description: 'Welcome to HackDavis 2023!',
    type: 'Activity',
    location: 'Off Stage',
  },
];

const mockTimeTable: TimeTableProps = {
  maxTimeSlots: 24,
  scheduleBlocks: mockScheduleBlocks,
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
      <div className="tw-flex tw-gap-3 tw-py-5">
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
      <TimeTable
        timeTable={mockTimeTable}
        startDate={new Date('2023-04-27T09:00:00')}
      />
      <div className="tw-grid-cols-auto tw-relative tw-z-10 tw-grid">
        <div
          className="tw-col-span-full tw-flex tw-overflow-hidden tw-rounded-xl
              tw-bg-gray-600 tw-pl-5 tw-text-white"
        >
          <ScheduleBlock block={mockScheduleBlocks[0]} />
          <ScheduleBlock block={mockScheduleBlocks[0]} />
        </div>
      </div>
    </main>
  );
}
