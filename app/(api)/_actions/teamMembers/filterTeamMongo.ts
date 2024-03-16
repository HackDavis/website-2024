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
  linkedinURL: string;
};

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const db: Db = await getDatabase();
  let team_members: TeamMember[] = [];
  try {
    team_members = (await db.collection('teamMembers').find({}).toArray()).map(
      (doc) => ({
        id: doc._id.toString(),
        name: doc.name,
        position: doc.position,
        profileImageUrl: doc.profile_image_url,
        teamCategory: doc.team_category,
        year: doc.year,
        linkedinURL: doc.linkedinURL,
      })
    );
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    return [];
  }

  return team_members;
}

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
      linkedinURL: doc.linkedinURL,
    }));
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    return [];
  }
  team_members.sort((a, b) => {
    // Check if 'position' contains 'Lead'
    const aIsLead = a.position.includes('Lead');
    const bIsLead = b.position.includes('Lead');

    // Prioritize leads
    if (aIsLead && !bIsLead) return -1;
    if (!aIsLead && bIsLead) return 1;

    // If both are leads or neither, sort by another attribute, e.g., 'name'
    return a.name.localeCompare(b.name);
  });

  return team_members;
}
