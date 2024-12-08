import WordCycle from './_components/WordCycle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type FormLink = {
  title: string;
  url: string;
};

const FormLinks: { [key: string]: FormLink } = {
  Register: {
    title: 'Director Applications',
    url: 'https://form.typeform.com/to/umWSVW9i',
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
    url: 'https://www.google.com/maps/place/University+Credit+Union+Center/@38.5418238,-121.7596385,17z',
  },
};

export default function Form() {
  const pathname = usePathname();
  const teamsUrl =
    pathname.substring(0, pathname.lastIndexOf('/') + 1) + '#teams';
  FormLinks.Teams.url = teamsUrl;

  return (
    <div className="tw-flex tw-bg-transparent">
      <div className="tw-absolute tw-flex tw-w-[500px] tw-max-w-[500px] tw-flex-col tw-justify-center tw-gap-7 md:tw-relative md:tw-mt-[10%] md:tw-w-full md:tw-items-center md:tw-text-center lg:tw-w-[375px]">
        <div className="tw-flex tw-flex-col">
          <span className="tw-font-metropolis tw-flex tw-items-baseline tw-text-left tw-text-[42px] tw-font-extrabold tw-leading-[103%] tw-tracking-[0.96px] tw-text-[#173A52] sm:tw-text-[32px] md:tw-text-center md:tw-text-[36px] md:tw-leading-[115%] lg:tw-text-[31.5px]">
            <span className="tw-font-metropolis tw-opacity-75">Ready to</span>
            <span className="tw-flex tw-items-center tw-justify-center tw-pl-2.5">
              <WordCycle />
            </span>
          </span>

          <span className="tw-font-metropolis tw-text-[64px] tw-font-extrabold tw-leading-[103%] tw-tracking-[1.4px] tw-text-[#173A52] sm:tw-text-[48px] md:tw-text-[56px] md:tw-leading-[115%] lg:tw-text-[48px]">
            social good?
          </span>
        </div>

        <div className="tw-flex tw-flex-col">
          <div className="tw-flex tw-flex-col">
            <div className="tw-flex tw-w-max tw-items-center tw-gap-2.5 md:tw-w-[90vw] md:tw-flex-wrap md:tw-justify-center">
              <span className="tw-font-metropolis tw-text-[24px] tw-font-semibold tw-leading-[150%] tw-tracking-[0.64px] tw-text-[#173A52]/70 md:tw-text-[24px] lg:tw-text-[18px]">
                Apply to direct{' '}
                <span className="tw-font-metropolis tw-text-[24px] tw-font-semibold tw-leading-[150%] tw-tracking-[0.64px] tw-text-[#173A52] md:tw-text-[24px] lg:tw-text-[18px]">
                  HackDavis 2025
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="tw-flex tw-w-[60%] tw-cursor-pointer tw-flex-col tw-gap-4 md:tw-w-full md:tw-items-center md:tw-justify-center">
          <Link
            href={FormLinks.Register.url}
            className="tw-mb-2.5 tw-flex tw-h-12 tw-items-center tw-justify-center tw-gap-2.5 tw-rounded-full tw-bg-[#173A52] tw-px-[1.3vw] tw-py-[0.75vw] tw-transition-colors tw-duration-200 hover:tw-bg-[#005271] md:tw-w-[85%]"
          >
            <p className="tw-font-metropolis tw-text-center tw-text-base tw-font-bold tw-capitalize tw-tracking-[0.48px] tw-text-white md:tw-text-lg">
              {FormLinks.Register.title}
            </p>
          </Link>

          <a
            href={FormLinks.Teams.url}
            className="tw-flex tw-h-12 tw-items-center tw-justify-center tw-gap-2.5 tw-rounded-full tw-bg-white/75 tw-px-[1.3vw] tw-py-[0.75vw] tw-opacity-85 tw-backdrop-blur-[2px] tw-transition-opacity tw-duration-200 hover:tw-opacity-100 md:tw-w-[85%]"
          >
            <p className="tw-font-metropolis tw-text-center tw-text-base tw-font-bold tw-tracking-[0.48px] tw-text-[#173A52] md:tw-text-lg">
              {FormLinks.Teams.title}
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
