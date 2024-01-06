import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';
import NoContentError from '@utils/response/NoContentError;';

export async function POST(request) {
  try {
    const body = await request.json();

    if (isBodyEmpty(body)) {
      throw new NoContentError('Empty request body.');
    }
    const parsedBody = await parseAndReplace(body);

    const db = await getDatabase();

    const creationStatus = await db
      .collection('judge-pairs')
      .insertOne(parsedBody);

    const judge_pair = await db.collection('judge-pairs').findOne({
      _id: new ObjectId(creationStatus.insertedId),
    });

    return NextResponse.json({ ok: true, body: judge_pair }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
