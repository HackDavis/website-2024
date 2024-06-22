import { LucideCalendar } from 'lucide-react';
import { addEmail } from '@/app/(api)/_actions/mailingList/mailingList25';
import { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      await addEmail(email); // Call the addEmail function with the email state
      setEmail(''); // Reset the email state
    } catch (error) {
      // Handle any errors that occur during the email addition
      console.error('Error adding email:', error);
    }
  };

  return (
    <main className="tw-flex tw-w-330px tw-text-blue-950 sm:tw-w-500px">
      <div className="">
        <h1 className="tw-font-bold">HackDavis 2025!</h1>
        <div className="tw-flex tw-flex-col tw-gap-5">
          <p className="sm:tw-text-xl">
            Welcome! with 900+ participants, HackDavis is the one of the largest
            collegiate hackathon in California.{' '}
          </p>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <div className="tw-flex tw-items-center tw-gap-2">
              <LucideCalendar size={20} />
              <p className="sm:tw-text-xl">
                Be the first to know about our next event!
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="tw-flex tw-gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hackdavis@ucdavis.com"
                  className="tw-w-full tw-rounded-2xl tw-border-2  tw-border-blue-950 tw-px-6 tw-py-2 tw-font-bold tw-text-slate-400"
                />
                <button
                  type="submit"
                  className="tw-rounded-3xl tw-bg-blue-950 tw-p-2 tw-px-8 tw-text-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
