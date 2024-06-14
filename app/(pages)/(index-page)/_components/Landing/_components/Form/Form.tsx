import styles from './Form.module.scss';
// import { CiCalendar } from 'react-icons/ci';
import WordCycle from './_components/WordCycle';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import useRouter
// import Image from 'next/image';
// import intelLogoCoHost from 'public/index/Sponsors/intel.png';

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
    url: 'https://www.google.com/maps/place/University+Credit+Union+Center/@38.5418238,-121.7596385,17z/data=!3m1!4b1!4m6!3m5!1s0x808529d4ce160f1d:0x813925c4c65f6bb1!8m2!3d38.5418238!4d-121.7596385!16zL20vMDluZmh0?hl=en-US&entry=ttu',
  },
};

export default function Form() {
  /*
   * takes the current url and assigns it to the teams section of the page
   * enables the "Team Descriptions" button to scroll to teams on click, similar to navbar
   */
  const pathname = usePathname();
  const teamsUrl =
    pathname.substring(0, pathname.lastIndexOf('/') + 1) + '#teams';
  FormLinks.Teams.url = teamsUrl;

  return (
    <main className="tw-flex">
      <div className="">
        <h1>HackDavis 2025</h1>
      </div>
    </main>
  );
}
