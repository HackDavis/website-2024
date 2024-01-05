import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/db/mongoClient';
import NotFoundError from '@utils/response/NotFoundError';

export async function GET(_, { params }) {
  try {
    const id = new ObjectId(params.id);
    const db = await getDatabase();

    const team = await db.collection('teams').findOne({ _id: id });

    if (team === null) {
      throw NotFoundError(`team with id: ${params.id} not found.`);
    }

    const submissions = await db
      .collection('submissions')
      .find({ team_id: id })
      .project({ team_id: 0 })
      .toArray();
    team.submissions = submissions;

    return NextResponse.json({ ok: true, body: team }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
