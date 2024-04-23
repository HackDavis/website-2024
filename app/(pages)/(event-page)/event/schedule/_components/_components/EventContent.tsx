import type { Event } from '@/public/types/Schedule.types';
import { MapPin } from 'lucide-react';

export default function EventContent(event: Event) {
  return (
    <main className="tw-flex tw-flex-col tw-justify-center">
      <div className="tw-font-semibold">
        <span>{event.title}</span>
      </div>
      <div className="tw-flex tw-gap-2">
        <span>
          {event.startTime.getHours()}:{event.startTime.getMinutes()}
        </span>
        -
        <span>
          {event.endTime.getHours()}:{event.endTime.getMinutes()}
        </span>
        <div className="tw-flex">
          <MapPin size={15} />
          <span>{event.location}</span>
        </div>
      </div>
    </main>
  );
}
