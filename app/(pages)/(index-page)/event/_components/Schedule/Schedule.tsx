import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';
import type { Event, TimeChunk } from './_components/Schedule.types';
import { createTimeChunks } from './_components/TimeChunks';

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

const timeChunks: TimeChunk[] = createTimeChunks(mockEvents);

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
      <div className="">
        {timeChunks.map((timeChunk) => (
          <div key={timeChunk.startTime.getTime()} className="tw-p-3">
            <h2>{timeChunk.startTime.toLocaleTimeString()}</h2>
            <div className="tw-flex tw-gap-3">
              {timeChunk.eventBlocks.map((event) => (
                <div
                  key={event.title}
                  className="tw-rounded-lg tw-border tw-border-black tw-p-3"
                >
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                  <p>{event.startTime.getHours()}</p>
                  <p>{event.endTime.getHours()}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
