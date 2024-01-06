import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient';

export async function GET(_, { params }) {
  try {
    // Search by judge_id and team_id together rather than creating a new id field
    const judge_id = new ObjectId(params.judge_id);
    const team_id = new ObjectId(params.team_id);
    const db = await getDatabase();

    const submission = await db.collection('submissions').findOne({
      judge_id: judge_id,
      team_id: team_id,
    });

    if (submission === null) {
      throw Error(
        `submission with judge id: ${params.judge_id} and team id: ${params.team_id} not found.`
      );
    }

    return NextResponse.json({ ok: true, body: submission }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
