import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/db/mongoClient';
import isBodyEmpty from '@utils/request/isBodyEmpty';

export async function POST(request) {
  try {
    const body = await request.json();

    if (isBodyEmpty(body)) {
      throw new NoContentError('Empty request body.');
    }

    body.judge_id = new ObjectId(body.judge_id);
    body.team_id = new ObjectId(body.team_id);

    const db = await getDatabase();

    const submission = await db.collection('submissions').insertOne(body);

    return NextResponse.json({ ok: true, body: submission }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
