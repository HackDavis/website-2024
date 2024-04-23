'use client';

import TimeTable from './TimeTable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { TimeChunk, Event } from '@/public/types/Schedule.types';
import { createTimeChunks } from './Calculations';
import Filters from './Filters';
import { getAllEvents } from '@/app/(api)/_actions/events/getEvents';

type ScheduleDay = {
  dayString: string;
  day: Date;
  startDay: Date;
};

const eventDays: ScheduleDay[] = [
  {
    dayString: 'Saturday, April 27',
    day: new Date('2023-04-27'),
    startDay: new Date('2023-04-27T12:00:00'),
    // day: new Date(Date.UTC(2023, 3, 27)), // Month is 0-indexed, 3 = April
    // startDay: new Date(Date.UTC(2023, 3, 27, 12, 0, 0)),
  },
  {
    dayString: 'Sunday, April 28',
    day: new Date('2023-04-28'),
    startDay: new Date('2023-04-28T00:00:00'),
    // day: new Date(Date.UTC(2023, 3, 28)),
    // startDay: new Date(Date.UTC(2023, 3, 28)),
  },
];

const FilterItems: string[] = [
  'General',
  'Activity',
  'Workshop',
  'Food',
  'Hacking',
];

function filterEventByDay(events: Event[], day: Date): Event[] {
  return events.filter((event) => {
    const eventDate = event.startTime.toISOString().split('T')[0];
    const targetDate = day.toISOString().split('T')[0];
    return eventDate === targetDate;
  });
}

function filterEventByType(events: Event[], types: string[]): Event[] {
  return events.filter((event) => types.includes(event.type));
}

export default function Schedule() {
  const [currentDay, setCurrentDay] = useState(eventDays[0]);
  const [timeChunks, setTimeChunks] = useState<TimeChunk[]>([]);
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [startTime, setStartTime] = useState(eventDays[0].startDay);
  const [selectedFilters, setSelectedFilters] = useState<string[]>(FilterItems);

  //fetching events from DB and creating time chunks
  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents();
      console.log(events);
      setAllEvents(events);
    };
    fetchEvents();
  }, []);

  //creating time chunks when currentDay or allEvents changes
  useEffect(() => {
    const eventsDay = filterEventByDay(allEvents, currentDay.day);
    const filteredEvents = filterEventByType(eventsDay, selectedFilters);
    setTimeChunks(createTimeChunks(filteredEvents));
    setStartTime(new Date(currentDay.startDay));
  }, [currentDay, allEvents, selectedFilters]);

  return (
    <main className="tw-flex tw-flex-col ">
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
      <Filters onFilterChange={setSelectedFilters} FilterItems={FilterItems} />
      <TimeTable timeChunks={timeChunks} startTime={startTime} />
    </main>
  );
}
