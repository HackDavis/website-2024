'use client';
import ProfileCard from './_components/ProfileCard';
import styles from './OurTeam.module.scss';
import { useState, useEffect } from 'react';
import { getAllTeamMembers } from '@/app/(api)/_actions/teamMembers/filterTeamMongo';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';

type TeamMember = {
  id: string;
  name: string;
  position: string;
  teamCategory: string;
  profileImageUrl: string;
  linkedinURL: string;
};

export default function OurTeam() {
  const [allTeamMembers, setAllTeamMembers] = useState<TeamMember[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
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
    async function loadAllTeamMembers() {
      const members = await getAllTeamMembers();
      if (members) {
        setAllTeamMembers(members);
        filterTeam('Design', members);
      }
    }
    loadAllTeamMembers();
  }, []);

  function filterTeam(teamName: string, members: TeamMember[]) {
    const filteredMembers = members
      .filter((member) => member.teamCategory === teamName)
      .sort((a, b) => {
        // Check if 'position' contains 'Lead'
        const aIsLead = a.position.includes('Lead');
        const bIsLead = b.position.includes('Lead');

        // Prioritize leads
        if (aIsLead && !bIsLead) return -1;
        if (!aIsLead && bIsLead) return 1;

        return a.name.localeCompare(b.name);
      });
    setTeamMembers(filteredMembers);
    setActiveTeam(teamName);
  }

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
            {teamNames.map((teamName, index) => (
              <div key={index}>
                <div
                  className={`${
                    styles.ourTeam_container_embla_filterButtons_button
                  } ${activeTeam === teamName ? styles.active : ''}`}
                  onClick={async () => {
                    if (emblaApi) emblaApi.scrollTo(index, false);
                    filterTeam(teamName, allTeamMembers);
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
