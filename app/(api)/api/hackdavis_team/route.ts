import { filterTeamMongo } from '@/app/(api)/_actions/teamMembers/filterTeamMongo';
import { NextResponse, NextRequest } from 'next/server';
import getQueries from '@utils/request/getQueries';

export async function GET(request: NextRequest) {
  try {
    const queries = getQueries(request);
    const teamMembers = await filterTeamMongo(
      queries.team as string,
      Number(queries.year)
    );
    return NextResponse.json(teamMembers, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch team members:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
