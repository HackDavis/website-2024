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
  year: string
): Promise<TeamMember[]> {
  const db: Db = await getDatabase();

  // console.log('DB:', db);
  // console.log('Team:', team);
  // console.log('Year:', year);

  const result = await db.collection('teamMembers').find().toArray();

  console.log('All Result:', result);

  const team_members = (
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
  console.log('Team Members:', team_members);

  return team_members;
}
