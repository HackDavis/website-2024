import { NextResponse } from 'next/server';

import dbConnect from '@utils/db/mongoClient';
import getQueries from '@utils/request/getQueries';

export async function GET(request) {
  try {
    const queries = getQueries(request);
    const client = await dbConnect();
    const db = client.db();

    const trainer = await db
      .collection('trainers')
      .aggregate([
        {
          $match: queries,
        },
        {
          $lookup: {
            from: 'pokemon',
            localField: '_id',
            foreignField: 'trainer_id',
            as: 'pokemon',
          },
        },
      ])
      .project({ 'pokemon.trainer_id': 0 })
      .toArray();

    return NextResponse.json({ ok: true, body: trainer }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
