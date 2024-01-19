import ProfileCard from './_components/ProfileCard';
import styles from './OurTeam.module.scss';

import { prisma } from '@/lib/prisma';

export default async function OurTeam() {
  const team_members = await prisma.teamMember.findMany();

  return (
    <div className={styles.ourTeam}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Get to know our team</h1>
          <p>HackDavis is built by students, for students.</p>
        </div>
        <div className={styles.team}>
          {team_members.map((member) => {
            return (
              <ProfileCard
                key={member.id}
                name={member.name}
                title={member.position}
                imageUrl={member.profileImageUrl}
              ></ProfileCard>
            );
          })}
          ;
        </div>
        {/* <ProfileCard name="Amanda" title="Co-Director" /> */}
      </div>
    </div>
  );
}
