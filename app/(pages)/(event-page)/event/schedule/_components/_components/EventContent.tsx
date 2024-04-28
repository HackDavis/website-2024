import type { Event } from '@/public/types/Schedule.types';
import Link from 'next/link';
import { TiLocation } from 'react-icons/ti';

export default function EventContent(event: Event) {
  return (
    <main className="tw-flex tw-flex-col tw-justify-center tw-text-xs tw-font-semibold tw-text-dark-blue md:tw-text-base">
      <div className="">
        <span>{event.title}</span>
      </div>
      {event.type !== 'Hacking' && (
        <div className="tw-flex tw-flex-col tw-gap-2">
          <div className="tw-flex tw-gap-2 tw-font-normal">
            <span>
              {((event.startTime.getHours() + 11) % 12) + 1}:
              {event.startTime.getMinutes().toString().padStart(2, '0')}
              {event.startTime.getHours() >= 12 ? ' PM' : ' AM'}
            </span>
            -
            <span>
              {((event.endTime.getHours() + 11) % 12) + 1}:
              {event.endTime.getMinutes().toString().padStart(2, '0')}
              {event.endTime.getHours() >= 12 ? ' PM' : ' AM'}
            </span>
          </div>
          <div className="tw-flex tw-items-start tw-gap-1">
            <TiLocation size={20} />
            {event.url ? (
              <Link target="_blank" href={event.url}>
                <span className="tw-underline tw-underline-offset-2">
                  {event.location}
                </span>
              </Link>
            ) : (
              <span>{event.location}</span>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
