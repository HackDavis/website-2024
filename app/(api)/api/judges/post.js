import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/db/mongoClient';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';

export async function POST(request) {
  try {
    const body = await request.json();

    if (isBodyEmpty(body)) {
      throw new NoContentError('Empty request body.');
    }
    body.judge_pair_id = new ObjectId(body.judge_pair_id);
    const parsedBody = await parseAndReplace(body);

    const db = await getDatabase();

    const creationStatus = await db.collection('judges').insertOne(parsedBody);

    const judge = await db.collection('judges').findOne({
      _id: new ObjectId(creationStatus.insertedId),
    });

    return NextResponse.json({ ok: true, body: judge }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
