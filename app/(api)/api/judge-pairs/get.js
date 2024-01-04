import { NextResponse } from 'next/server';

import { getDatabase } from '@utils/db/mongoClient';
import getQueries from '@utils/request/getQueries';

export async function GET(request) {
  try {
    const queries = getQueries(request);
    const db = await getDatabase();

    const judge_pair = await db
      .collection('judge-pairs')
      .aggregate([
        {
          $match: queries,
        },
        {
          $lookup: {
            from: 'judges',
            localField: '_id',
            foreignField: 'judge_pair_id',
            as: 'judges',
          },
        },
        {
          $lookup: {
            from: 'teams',
            localField: '_id',
            foreignField: 'judge_pairs',
            as: 'teams',
          },
        },
      ])
      .project({
        'judges.judge_pair_id': 0,
        'teams.judge_pairs': 0,
        'teams.judge_submissions': 0,
      })
      .toArray();

    return NextResponse.json({ ok: true, body: judge_pair }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
