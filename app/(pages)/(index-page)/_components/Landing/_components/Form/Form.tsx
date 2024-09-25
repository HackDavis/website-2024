import { LucideCalendar } from 'lucide-react';
import { addEmail } from '@/app/(api)/_actions/mailingList/mailingList25';
import { useState } from 'react';

export default function Form() {
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState('Submit');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    // prevent empty email
    if (!email.trim()) {
      return;
    }

    try {
      await addEmail(email); // Call the addEmail function with the email state
      setEmail(''); // Reset the email state
      setSubmit('Sent!');
    } catch (error) {
      // Handle any errors that occur during the email addition
      console.error('Error adding email:', error);
    }
  };

  return (
    <main className="tw-flex tw-w-330px tw-max-w-full tw-text-blue-950 sm:tw-w-500px">
      <div className="tw-relative">
        <h1 className="tw-text-3xl tw-font-bold md:tw-text-5xl">
          HackDavis 2025!
        </h1>
        <div className="tw-right-6 tw-flex tw-flex-col tw-gap-5 tw-text-base md:tw-text-xl">
          <p className="">
            Welcome! With 900+ participants, HackDavis is one of the largest
            collegiate hackathons in California.{' '}
          </p>
          {/* <div className="tw-flex tw-flex-col tw-gap-2">
            <div className="tw-flex tw-items-start tw-gap-2 md:tw-items-center">
              <LucideCalendar size={20} />
              <p className="sm:tw-text-xl">
                Be the first to know about our event!
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="tw-flex tw-gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="tw-w-full tw-rounded-2xl tw-border-2 tw-border-blue-950 tw-px-6 tw-py-2 tw-text-sm tw-font-bold tw-text-slate-400 md:tw-text-xl"
                  // style={{ outline: 'none' }}
                />
                <button
                  type="submit"
                  className="tw-rounded-3xl tw-bg-blue-950 tw-p-2 tw-px-8 tw-text-white"
                >
                  {submit}
                </button>
              </div>
            </form>
          </div> */}
          <div className="">
            <a 
              href="https://form.typeform.com/to/WhphTCxw?utm_source=xxxxx"
              target='_blank'
            >
              <button
                type="button"
                className="tw-rounded-3xl tw-bg-blue-950 tw-p-2 tw-px-8 tw-text-white"
              >
                Apply to be a director!
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
