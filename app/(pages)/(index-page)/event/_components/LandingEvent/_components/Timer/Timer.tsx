import { FaDiscord } from 'react-icons/fa';
import Link from 'next/link';
import Countdown from '../Countdown/Countdown';
import DOECountDown from './_components/DOECountDown';
import Image from 'next/image';
import HackDavisLogo from 'public/navbar/logo.svg';

type ButtonLink = {
  title: string;
  url: string;
  icon?: JSX.Element;
  bgColor: string;
  textColor: string;
};

const buttonLinks: ButtonLink[] = [
  {
    title: 'Submit Project',
    url: 'https://hackdavis-2024.devpost.com/',
    bgColor: '#173A52',
    textColor: '#FFFFFF',
  },
  {
    title: 'Get Help',
    url: 'https://discord.gg/pjAKeaEh',
    icon: <FaDiscord size={30} />,
    bgColor: '#FFFFFF',
    textColor: '#173A52',
  },
];

export default function Form() {
  const endTime = new Date('2024-04-28T14:00:00-07:00');
  return (
    <main className="tw-absolute tw-left-1/2 tw-top-1/4 tw-border tw-border-black">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-6">
        <div className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-3 tw-text-center">
          <Image src={HackDavisLogo} alt="Logo" className="tw-w-20" />{' '}
          <span className="tw-text-4xl tw-font-semibold tw-text-dark-blue">
            HackDavis 2024
          </span>
        </div>
        <DOECountDown endTime={endTime} />

        <div className="tw-flex tw-items-center tw-justify-center tw-gap-4">
          {buttonLinks.map((button, index) => (
            <Link key={index} href={button.url}>
              <button
                className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-3xl tw-p-2 tw-px-6 tw-font-semibold"
                style={{
                  backgroundColor: button.bgColor,
                  color: button.textColor,
                }}
              >
                {button.icon}
                <span className="tw-mt-1 tw-flex ">{button.title}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
