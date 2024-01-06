import { type NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import { type HttpError, NotFoundError } from '@utils/response/Errors';

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = new ObjectId(params.id);
    const db = await getDatabase();

    const team = await db.collection('teams').findOne({ _id: id });

    if (team === null) {
      throw new NotFoundError(`team with id: ${params.id} not found.`);
    }

    const submissions = await db
      .collection('submissions')
      .find({ team_id: id })
      .project({ team_id: 0 })
      .toArray();
    team.submissions = submissions;

    return NextResponse.json({ ok: true, body: team }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
