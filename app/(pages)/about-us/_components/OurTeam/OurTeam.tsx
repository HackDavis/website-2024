'use client';
import ProfileCard from './_components/ProfileCard';
import styles from './OurTeam.module.scss';
import { useState, useEffect } from 'react';
import { filterTeamMongo } from '@/app/(api)/_actions/teamMembers/filterTeamMongo';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

type TeamMember = {
  id: string;
  name: string;
  position: string;
  profileImageUrl: string;
  linkedinURL: string;
};

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  // const [activeYear, _] = useState<number>(2024); // [2022, 2023, 2024
  const [activeTeam, setActiveTeam] = useState<string | null>('Design');

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: 'start',
      dragFree: true,
      skipSnaps: true,
      watchDrag: true,
    },
    [WheelGesturesPlugin()]
  );

  useEffect(() => {
    async function loadInitialTeam() {
      const initialTeam = await filterTeamMongo('Design', 2024);
      if (initialTeam) {
        setTeamMembers(initialTeam);
      }
    }
    loadInitialTeam();
  }, []);

  const teamNames = [
    'Design',
    'Technical',
    'Marketing',
    'Sponsorship/Finance',
    'External',
    'Operations',
  ];

  return (
    <div className={styles.ourTeam}>
      <div className={styles.ourTeam_container}>
        <div className={styles.ourTeam_container_title}>
          <h1>Get to know our team</h1>
          <p>HackDavis is built by students, for students.</p>
        </div>
        <div className={styles.ourTeam_container_embla} ref={emblaRef}>
          <div className={styles.ourTeam_container_embla_filterButtons}>
            {/* <div
            className={`${styles.ourTeam_container_filterButtons_button} ${
              activeYear === 2024 ? styles.active : ''
            }`}
            onClick={async () => {
              // setActiveTeam('Design');
              // setTeamMembers(await filterTeam('Design', 2024));
            }}
          >
            <p>2024</p>
            <FontAwesomeIcon icon={faAngleDown} size="1x" />
          </div> */}
            {teamNames.map((teamName, index) => (
              <div key={index}>
                <div
                  className={`${
                    styles.ourTeam_container_embla_filterButtons_button
                  } ${activeTeam === teamName ? styles.active : ''}`}
                  onClick={async () => {
                    if (emblaApi) emblaApi.scrollTo(index, false);
                    setActiveTeam(teamName);
                    setTeamMembers(await filterTeamMongo(teamName, 2024));
                  }}
                >
                  <p>{teamName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ourTeam_container_team}>
          {teamMembers.map((member) => {
            return (
              <ProfileCard
                key={member.id}
                name={member.name}
                title={member.position}
                imageUrl={member.profileImageUrl}
                linkedinURL={member.linkedinURL}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
