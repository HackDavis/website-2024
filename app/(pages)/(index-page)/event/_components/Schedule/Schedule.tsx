import TimeTable from './_components/TimeTable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { Event, TimeChunk } from './_components/Schedule.types';
import { createTimeChunks } from './_components/Calculations';
import Filters from './_components/Filters';

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

const mockEvents: Event[] = [
  {
    startTime: new Date('2023-04-27T09:00:00'),
    endTime: new Date('2023-04-27T10:00:00'),
    title: 'Opening Ceremony',
    description: 'Welcome to HackDavis 2023!',
    type: 'Activity',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T09:45:00'),
    endTime: new Date('2023-04-27T10:00:00'),
    title: 'Opening Ceremony',
    description: 'Welcome to HackDavis 2023!',
    type: 'Activity',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T10:00:00'),
    endTime: new Date('2023-04-27T11:30:00'),
    title: 'Opening Ceremony',
    description: 'Welcome to HackDavis 2023!',
    type: 'Activity',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T11:00:00'),
    endTime: new Date('2023-04-27T12:45:00'),
    title: 'Opening Ceremony',
    description: 'Welcome to HackDavis 2023!',
    type: 'Activity',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T17:15:00'),
    endTime: new Date('2023-04-27T18:00:00'),
    title: 'Weird 45 Mins Interval',
    description: 'Welcome to HackDavis 2023!',
    type: 'Menu',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T17:00:00'),
    endTime: new Date('2023-04-27T17:15:00'),
    title: 'Weird 45 Mins Interval',
    description: 'Welcome to HackDavis 2023!',
    type: 'Workshop',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T17:15:00'),
    endTime: new Date('2023-04-27T18:00:00'),
    title: 'Weird 45 Mins Interval',
    description: 'Welcome to HackDavis 2023!',
    type: 'Menu',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T17:45:00'),
    endTime: new Date('2023-04-27T18:00:00'),
    title: 'Weird 45 Mins Interval',
    description: 'Welcome to HackDavis 2023!',
    type: 'Menu',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T17:30:00'),
    endTime: new Date('2023-04-27T18:30:00'),
    title: 'Weird 45 Mins Interval',
    description: 'Welcome to HackDavis 2023!',
    type: 'Menu',
    location: 'Main Stage',
  },
  {
    startTime: new Date('2023-04-27T18:00:00'),
    endTime: new Date('2023-04-27T19:00:00'),
    title: 'Weird 45 Mins Interval',
    description: 'Welcome to HackDavis 2023!',
    type: 'Menu',
    location: 'Main Stage',
  },
];

const mockTimeChunks: TimeChunk[] = createTimeChunks(mockEvents);

const startTime = new Date('2023-04-27T09:00:00');

export default function Schedule() {
  const [currentDay, setCurrentDay] = useState(eventDays[0]);

  return (
    <main className="tw-flex tw-flex-col tw-border tw-border-black tw-px-32">
      <div className="tw-flex tw-items-center tw-justify-between tw-py-10">
        <h1 className="tw-font-semibold">Schedule</h1>
        <div className="tw-flex">
          <span>{currentDay.dayString}</span>
          <ChevronLeft
            className="hover:tw-cursor-pointer"
            onClick={() => setCurrentDay(eventDays[0])}
          />
          <ChevronRight
            className="hover:tw-cursor-pointer"
            onClick={() => setCurrentDay(eventDays[1])}
          />
        </div>
      </div>
      <Filters />
      <TimeTable timeChunks={mockTimeChunks} startTime={startTime} />
    </main>
  );
}
