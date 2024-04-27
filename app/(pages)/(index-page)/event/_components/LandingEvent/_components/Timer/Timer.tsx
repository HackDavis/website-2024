import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import DOECountDown from './_components/DOECountDown';
import Image from 'next/image';
import HackDavisLogo from 'public/navbar/logo.svg';
import { TiLocation } from 'react-icons/ti';
import { usePathname } from 'next/navigation'; // Import useRouter

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
    // icon: <faDiscord />,
    icon: <FontAwesomeIcon icon={faDiscord} className="tw-w-6 md:tw-w-8 " />,
    bgColor: '#FFFFFF',
    textColor: '#173A52',
  },
];

export default function Timer() {
  const startTime = new Date('2024-04-27T14:00:00-07:00');
  const endTime = new Date('2024-04-28T14:00:00-07:00');
  const pathname = usePathname();
  const isDayTimer = pathname.includes('dayTimer');
  return (
    <main className="">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-6">
        <div className="tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-3 tw-text-center">
          <Image
            src={HackDavisLogo}
            alt="Logo"
            className="md:tw-w-18 tw-w-14 xl:tw-w-20"
          />{' '}
          <span className="tw-text-3xl tw-font-semibold tw-text-dark-blue md:tw-text-4xl xl:tw-text-5xl">
            HackDavis 2024
          </span>
        </div>
        <DOECountDown startTime={startTime} endTime={endTime} />

        {!isDayTimer && (
          <div className="tw-flex tw-items-center tw-justify-center tw-gap-4">
            {buttonLinks.map((button, index) => (
              <Link key={index} href={button.url}>
                <button
                  className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-rounded-3xl tw-p-2 tw-px-6 tw-text-sm tw-font-semibold md:tw-text-base"
                  style={{
                    backgroundColor: button.bgColor,
                    color: button.textColor,
                  }}
                >
                  {button.icon ? <span>{button.icon}</span> : <></>}
                  <span className="tw-mt-1">{button.title}</span>
                </button>
              </Link>
            ))}
          </div>
        )}
        <div
          className="tw-flex tw-gap-1 tw-font-medium tw-text-dark-blue"
          style={{
            fontSize: '14px',
          }}
        >
          <TiLocation size={20} />
          <span>University Credit Union Center @ UC Davis</span>
        </div>
        <div className="tw-z-40 tw-flex tw-gap-8 tw-text-xl tw-font-semibold tw-text-dark-blue">
          <span>WIFI: hackdavis2024</span>
          <span>Password: intel@HD2024</span>
        </div>
      </div>
    </main>
  );
}
