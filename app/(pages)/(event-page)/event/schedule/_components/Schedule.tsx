'use client';

import TimeTable from './TimeTable';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { TimeChunk, Event } from '@/public/types/Schedule.types';
import { createTimeChunks } from './Calculations';
import Filters from './Filters';
import { getAllEvents } from '@/app/(api)/_actions/events/getEvents';
import { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import styles from './Schedule.module.scss';

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
  const startOfDay = new Date(day);
  startOfDay.setUTCHours(7, 0, 0, 0); // Start of day in Pacific Time (00:00 PDT)

  const endOfDay = new Date(day);
  endOfDay.setUTCHours(31, 0, 0, 0); // End of day in Pacific Time (00:00 PDT of the next day)

  return events.filter((event) => {
    const eventStartTimeUTC = new Date(event.startTime);

    return eventStartTimeUTC >= startOfDay && eventStartTimeUTC < endOfDay;
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
  const timetableRef = useRef<HTMLDivElement>(null);

  //fetching events from DB and creating time chunks
  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getAllEvents();
      // console.log(events);
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

  const [emblaRef, _] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      dragFree: true,
      skipSnaps: true,
      watchDrag: true,
    },
    [WheelGesturesPlugin()]
  );
  return (
    <main className="tw-flex tw-flex-col">
      <div
        className={`${styles.scheduleContainer} tw-sticky tw-top-0 tw-z-40 tw-bg-white tw-px-1/10 tw-pt-24`}
      >
        <div className=" tw-flex tw-flex-wrap tw-items-center tw-justify-between ">
          <h1 className="tw-pr-8 tw-text-4xl tw-font-semibold md:tw-text-5xl ">
            Schedule
          </h1>
          <div className="tw-flex tw-gap-4">
            <span>{currentDay.dayString}</span>
            <div className="tw-flex">
              <ChevronLeft
                className="hover:tw-cursor-pointer"
                onClick={() => setCurrentDay(eventDays[0])}
                style={{
                  color: currentDay === eventDays[0] ? 'gray' : 'black',
                }}
              />
              <ChevronRight
                className="hover:tw-cursor-pointer"
                onClick={() => setCurrentDay(eventDays[1])}
                style={{
                  color: currentDay === eventDays[1] ? 'gray' : 'black',
                }}
              />
            </div>
          </div>
        </div>
        <div ref={emblaRef} className="tw-flex tw-flex-wrap">
          <Filters
            onFilterChange={setSelectedFilters}
            FilterItems={FilterItems}
          />
        </div>
      </div>
      <div className="tw-px-1/10 tw-py-8">
        <TimeTable
          timeChunks={timeChunks}
          startTime={startTime}
          timetableRef={timetableRef}
        />
      </div>
    </main>
  );
}
