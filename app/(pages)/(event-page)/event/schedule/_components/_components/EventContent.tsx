import type { Event } from '@/public/types/Schedule.types';
import { TiLocation } from 'react-icons/ti';

export default function EventContent(event: Event) {
  return (
    <main className="tw-text-HD-blue tw-flex tw-flex-col tw-justify-center tw-text-xs tw-font-semibold md:tw-text-base">
      <div className="">
        <span>{event.title}</span>
      </div>
      {event.type !== 'Hacking' && (
        <div className="tw-flex tw-flex-col tw-gap-2">
          <div className="tw-flex tw-gap-2">
            <span>
              {event.startTime.getHours()}:{event.startTime.getMinutes()}
            </span>
            -
            <span>
              {event.endTime.getHours()}:{event.endTime.getMinutes()}
            </span>
          </div>
          <div className="tw-flex tw-items-start">
            <TiLocation size={20} />
            <span>{event.location}</span>
          </div>
        </div>
      )}
    </main>
  );
}
