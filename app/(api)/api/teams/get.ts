import { type NextRequest, NextResponse } from 'next/server';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import getQueries from '@utils/request/getQueries';
import { type HttpError } from '@utils/response/Errors';

export async function GET(request: NextRequest) {
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
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
