import { NextResponse } from 'next/server';

import { getDatabase } from '@utils/db/mongoClient';
import getQueries from '@utils/request/getQueries';

export async function GET(request) {
  try {
    const queries = getQueries(request);
    const db = await getDatabase();

    const teams = await db
      .collection('teams')
      .aggregate([
        {
          $match: queries,
        },
        {
          $lookup: {
            from: 'submissions',
            localField: '_id',
            foreignField: 'team_id',
            as: 'submissions',
          },
        },
      ])
      .project({
        'submissions.team_id': 0,
      })
      .toArray();

    return NextResponse.json({ ok: true, body: teams }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
