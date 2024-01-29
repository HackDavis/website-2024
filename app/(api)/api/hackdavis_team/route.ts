import { filterTeamMongo } from '@/app/(api)/_actions/teamMembers/filterTeamMongo';
import { NextResponse, NextRequest } from 'next/server';
import getQueries from '@utils/request/getQueries';

export async function GET(request: NextRequest) {
  try {
    const queries = getQueries(request);
    console.log('Queries:', queries);
    const teamMembers = await filterTeamMongo(
      queries.team as string,
      queries.year as string
    );
    console.log('Team Members:', teamMembers);
    return NextResponse.json(teamMembers, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
