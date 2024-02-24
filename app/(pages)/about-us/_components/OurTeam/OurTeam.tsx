'use client';
import ProfileCard from './_components/ProfileCard';
import styles from './OurTeam.module.scss';
import { useState, useEffect } from 'react';
import { filterTeamMongo } from '@/app/(api)/_actions/teamMembers/filterTeamMongo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Suspense } from 'react';

type TeamMember = {
  id: string;
  name: string;
  position: string;
  profileImageUrl: string;
  // linkedinURL: string;
};

export default function OurTeam() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [activeYear, setActiveYear] = useState<number>(2024); // [2022, 2023, 2024
  const [activeTeam, setActiveTeam] = useState<string | null>('Design');

  useEffect(() => {
    async function loadInitialTeam() {
      const initialTeam = await filterTeamMongo('Design', 2024);
      if (initialTeam) {
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
              setTeamMembers(await filterTeamMongo('Design', 2024));
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
              setTeamMembers(await filterTeamMongo('Technical', 2024));
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
              setTeamMembers(await filterTeamMongo('Marketing', 2024));
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
              setTeamMembers(
                await filterTeamMongo('Sponsorship/Finance', 2024)
              );
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
              setTeamMembers(await filterTeamMongo('External', 2024));
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
              setTeamMembers(await filterTeamMongo('Operations', 2024));
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
                // linkedinURL={member.linkedinURL}
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
