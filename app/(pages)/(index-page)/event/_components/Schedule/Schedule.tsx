import TimeTable from './_components/TimeTable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { Event, TimeChunk } from './_components/Schedule.types';
import { createTimeChunks } from './_components/TimeChunks';
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
    startTime: new Date('2023-04-27T15:00:00'),
    endTime: new Date('2023-04-27T16:00:00'),
    title: 'Foood Food',
    type: 'Menu',
    location: 'Canteen',
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
  {
    startTime: new Date('2023-04-27T15:15:00'),
    endTime: new Date('2023-04-27T16:00:00'),
    title: '15 mins Interval',
    description: 'Welcome to HackDavis 2023!',
    type: 'Activity',
    location: 'Off Stage',
  },
];

const timeChunks: TimeChunk[] = createTimeChunks(mockEvents);

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
      <TimeTable timeChunks={timeChunks} />
    </main>
  );
}
