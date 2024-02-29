'use server';
import { getDatabase } from '../../_utils/mongodb/mongoClient.mjs';
import { Db } from 'mongodb';

type TeamMember = {
  id: string;
  name: string;
  position: string;
  profileImageUrl: string;
  teamCategory: string;
  year: number;
};

export async function filterTeamMongo(
  team: string,
  year: number
): Promise<TeamMember[]> {
  const db: Db = await getDatabase();
  let team_members: TeamMember[] = [];
  try {
    team_members = (
      await db
        .collection('teamMembers')
        .find({ team_category: team, year: Number(year) })
        .toArray()
    ).map((doc) => ({
      id: doc._id.toString(),
      name: doc.name,
      position: doc.position,
      profileImageUrl: doc.profile_image_url,
      teamCategory: doc.team_category,
      year: doc.year,
    }));
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    return [];
  }

  return team_members;
}
