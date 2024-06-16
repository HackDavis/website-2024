import { LucideCalendar } from 'lucide-react';
export default function Form() {
  /*
   * takes the current url and assigns it to the teams section of the page
   * enables the "Team Descriptions" button to scroll to teams on click, similar to navbar
   */

  return (
    <main className="sm:tw-w-500px tw-w-330px tw-flex tw-text-blue-950">
      <div className="">
        <h1 className="tw-font-bold">HackDavis 2025!</h1>
        <div className="tw-flex tw-flex-col tw-gap-5">
          <p className="sm:tw-text-xl">
            Welcome! with 900+ participants, HackDavis is the one of the largest
            collegiate hackathon in California.{' '}
          </p>
          <div className="tw-flex tw-items-center tw-gap-2">
            <LucideCalendar size={20} />
            <p className="sm:tw-text-xl">
              Be the first to know about our next event!
            </p>
          </div>
          <div className="tw-flex tw-gap-2">
            <input
              type="email"
              placeholder="hackdavis@ucdavis.com"
              className="tw-w-full tw-rounded-3xl tw-border tw-px-6 tw-py-2 tw-font-bold"
            />
            <button className="tw-rounded-3xl tw-bg-blue-950 tw-p-2 tw-px-8 tw-text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
