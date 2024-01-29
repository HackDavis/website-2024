'use client';
import ProfileCard from './_components/ProfileCard';
import styles from './OurTeam.module.scss';
import { useState, useEffect } from 'react';
import { filterTeam } from './_components/filterTeam';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

type TeamMember = {
  id: number;
  name: string;
  position: string;
  profileImageUrl: string;
};

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [activeYear, setActiveYear] = useState<number>(2024); // [2022, 2023, 2024
  const [activeTeam, setActiveTeam] = useState<string | null>('Design');

  useEffect(() => {
    async function loadInitialTeam() {
      // Make sure to handle any potential errors with try/catch
      const initialTeam = await filterTeam('Design', 2024);
      if (initialTeam) {
        // Ensure the response is an array before setting the state
        // console.log(initialTeam);
        setTeamMembers(initialTeam);
      }
    }
    loadInitialTeam();
  }, []);

  return (
    <div className={styles.ourTeam}>
      <div className={styles.ourTeam_container}>
        <div className={styles.ourTeam_container_title}>
          <h1>Get to know our team</h1>
          <p>HackDavis is built by students, for students.</p>
        </div>
        <div className={styles.ourTeam_container_filterButtons}>
          <div
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
          </div>
          <div
            className={`${styles.ourTeam_container_filterButtons_button} ${
              activeTeam === 'Design' ? styles.active : ''
            }`}
            onClick={async () => {
              setActiveTeam('Design');
              setTeamMembers(await filterTeam('Design', 2024));
            }}
          >
            <p>Design</p>
          </div>
          <div
            className={`${styles.ourTeam_container_filterButtons_button} ${
              activeTeam === 'Technical' ? styles.active : ''
            }`}
            onClick={async () => {
              setActiveTeam('Technical');
              setTeamMembers(await filterTeam('Technical', 2024));
            }}
          >
            <p>Technical</p>
          </div>
          <div
            className={`${styles.ourTeam_container_filterButtons_button} ${
              activeTeam === 'Marketing' ? styles.active : ''
            }`}
            onClick={async () => {
              setActiveTeam('Marketing');
              setTeamMembers(await filterTeam('Marketing', 2024));
            }}
          >
            <p>Marketing</p>
          </div>
          <div
            className={`${styles.ourTeam_container_filterButtons_button} ${
              activeTeam === 'Sponsorship/Finance' ? styles.active : ''
            }`}
            onClick={async () => {
              setActiveTeam('Sponsorship/Finance');
              setTeamMembers(await filterTeam('Sponsorship/Finance', 2024));
            }}
          >
            <p>Sponsorship/Finance</p>
          </div>
          <div
            className={`${styles.ourTeam_container_filterButtons_button} ${
              activeTeam === 'External' ? styles.active : ''
            }`}
            onClick={async () => {
              setActiveTeam('External');
              setTeamMembers(await filterTeam('External', 2024));
            }}
          >
            <p>External</p>
          </div>
          <div
            className={`${styles.ourTeam_container_filterButtons_button} ${
              activeTeam === 'Operations' ? styles.active : ''
            }`}
            onClick={async () => {
              setActiveTeam('Operations');
              setTeamMembers(await filterTeam('Operations', 2024));
            }}
          >
            <p>Operations</p>
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
                linkedInUrl="https://www.linkedin.com/in/teeranade-cheng"
              />
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
}
