import Link from 'next/link';
import { CiCalendar } from 'react-icons/ci';

type FormLink = {
  title: string;
  url: string;
};

const FormLinks: { [key: string]: FormLink } = {
  Register: {
    title: 'Register Now',
    url: 'https://form.typeform.com/to/umWSVW9i',
  },
  Sponsor: {
    title: 'Sponsor',
    url: '#',
  },
  Volunteer: {
    title: 'Volunteer',
    url: 'https://form.typeform.com/to/MY8EI47D',
  },
  Mentor: { title: 'Mentor', url: 'https://form.typeform.com/to/cvy9LlyR' },
  Teams: { title: 'Team Descriptions', url: 'https://hackdavis.io/#teams' },
  Calendar: {
    title: 'HackDavis 2024 Calendar',
    url: 'https://drive.google.com/file/d/1AGBLnS55qNEuGNXh9VLSdx2PaHsGVgE7/view?usp=drive_link',
  },
  StarterPack: {
    title: 'Starter Pack',
    url: 'https://hackdavis.notion.site/HackDavis-2024-Starter-Pack-bea21741698046e99e46f13c9b311039?pvs=4',
  },
  Location: {
    title: 'UCenter',
    url: 'https://www.google.com/maps/place/University+Credit+Union+Center/@38.5418238,-121.7596385,17z/data=!3m1!4b1!4m6!3m5!1s0x808529d4ce160f1d:0x813925c4c65f6bb1!8m2!3d38.5418238!4d-121.7596385!16zL20vMDluZmh0?hl=en-US&entry=ttu',
  },
};

export default function NewForm() {
  return (
    <main className="tw-font-metropolis tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-4  tw-text-dark-blue">
      <div className="tw-w-fit">
        <span className="tw-flex tw-items-baseline tw-whitespace-nowrap tw-text-left tw-text-[42px] tw-font-extrabold tw-leading-[103%] tw-tracking-[2px] tw-text-[#173A52] sm:tw-text-[32px] md:tw-text-center md:tw-text-[36px] md:tw-leading-[115%] lg:tw-text-[31.5px]">
          <span className="tw-font-metropolis tw-text-5xl">
            Ready to create for social good?
          </span>
        </span>
      </div>
      <div className="tw-flex tw-gap-4 tw-font-semibold tw-tracking-[1px]">
        <p>Join us for HackDavis 2024</p>
        <div className="tw-flex tw-items-center tw-gap-2">
          <CiCalendar className="tw-text-2xl" />
          <p>April 27 - 28, 2024 @ UCenter</p>
        </div>
      </div>
      <div className="tw-mt-2 tw-flex tw-w-1/2 tw-cursor-pointer tw-items-center tw-justify-center tw-gap-4">
        <Link
          href={FormLinks.Register.url}
          className="tw-flex tw-h-12 tw-items-center tw-justify-center tw-gap-2.5 tw-rounded-full tw-bg-[#173A52] tw-px-[1.3vw] tw-py-[0.75vw] tw-transition-colors tw-duration-200 hover:tw-bg-[#005271] md:tw-w-[85%]"
        >
          <p className="tw-font-metropolis tw-text-center tw-text-base tw-font-bold tw-capitalize tw-tracking-[0.48px] tw-text-white md:tw-text-lg">
            {FormLinks.Register.title}
          </p>
        </Link>

        <Link
          href={FormLinks.Sponsor.url}
          className="tw-flex tw-h-12 tw-items-center tw-justify-center tw-gap-2.5 tw-rounded-full tw-bg-white/75 tw-px-[1.3vw] tw-py-[0.75vw] tw-opacity-85 tw-backdrop-blur-[2px] tw-transition-opacity tw-duration-200 hover:tw-opacity-100 md:tw-w-[85%]"
        >
          <p className="tw-font-metropolis tw-text-center tw-text-base tw-font-bold tw-tracking-[0.48px] tw-text-[#173A52] md:tw-text-lg">
            {FormLinks.Sponsor.title}
          </p>
        </Link>
      </div>
      <div className="tw-flex tw-w-1/2 tw-items-center tw-justify-center tw-gap-4 ">
        <Link href={FormLinks.Volunteer.url}>
          <p className="tw-font-bold">Volunteer</p>
        </Link>
        <p>or</p>
        <Link href={FormLinks.Mentor.url}>
          <div className="tw-flex tw-items-center tw-justify-center">
            <p className="tw-font-bold">Mentor</p>
            <svg
              className="tw-inline-block tw-h-4 tw-w-4 tw-translate-x-[2px] tw-translate-y-[-2px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </Link>
      </div>
    </main>
  );
}
