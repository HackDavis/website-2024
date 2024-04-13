import TimeTable from './_components/TimeTable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { TimeChunk } from './_components/Schedule.types';
import { createTimeChunks } from './_components/Calculations';
import Filters from './_components/Filters';
import { getAllEvents } from '@/app/(api)/_actions/events/getEvents';

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

export default function Schedule() {
  const [currentDay, setCurrentDay] = useState(eventDays[0]);
  const [timeChunks, setTimeChunks] = useState<TimeChunk[]>([]);
  const startTime = new Date('2023-04-27T09:00:00');

  //fetching events from DB and creating time chunks
  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents();
      setTimeChunks(createTimeChunks(events));
    };
    fetchEvents();
  }, []);

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
      <TimeTable timeChunks={timeChunks} startTime={startTime} />
    </main>
  );
}
