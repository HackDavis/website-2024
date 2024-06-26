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
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.title_ready}>
            <span style={{ opacity: 0.75, fontFamily: 'Metropolis' }}>
              Ready to
            </span>
            <span className={styles.title_ready_wordCycle}>
              <WordCycle />
            </span>
          </span>

          <span className={styles.title_social}>social good?</span>
        </div>
        <div className={styles.calendar}>
          <div className={styles.calendar_inner}>
            <div className={styles.calendar_inner_intel}>
              <span className={styles.calendar_inner_upper}>
                Apply to direct{' '}
                <span className={styles.calendar_inner_upper_hackdavis}>
                  HackDavis 2025
                </span>
              </span>
              {/* <span className={styles.intelCoHostText}>co-hosted by </span>
              <Image
                src={intelLogoCoHost}
                alt="Intel Logo"
                className={styles.intelCoHostImage}
              /> */}
            </div>

            {/* <div className={styles.calendar_inner_lower}>
              <CiCalendar className={styles.calendar_inner_lower_icon} />
              <span className={styles.calendar_inner_lower_text}>
                April 27 - 28 @
                <Link href={FormLinks.Location.url}>
                  <span>{FormLinks.Location.title}</span>
                </Link>
              </span>
            </div> */}
          </div>
        </div>

        <div className={styles.buttons}>
          <Link
            href={FormLinks.Register.url}
            className={styles.buttons_register}
          >
            <p>{FormLinks.Register.title}</p>
          </Link>
          <a href={FormLinks.Teams.url} className={styles.buttons_sponsor}>
            <p>{FormLinks.Teams.title}</p>
          </a>
        </div>
        {/* <div className={styles.links}>
          <div className={styles.links_calendar}>
            Apply to be a
            <Link href={FormLinks.Volunteer.url}>
              <span className={styles.link}>{FormLinks.Volunteer.title}</span>
            </Link>
            or
            <Link href={FormLinks.Mentor.url}>
              <span>{FormLinks.Mentor.title}</span>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}
