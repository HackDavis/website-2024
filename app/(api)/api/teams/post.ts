import { type NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import parseAndReplace from '@utils/request/parseAndReplace';
import NoContentError from '@utils/response/NoContentError';
import { type HttpError } from '@utils/response/Errors';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }

    const parsedBody = await parseAndReplace(body);

    const db = await getDatabase();
    const creationStatus = await db.collection('teams').insertOne(parsedBody);

    const team = await db.collection('teams').findOne({
      _id: new ObjectId(creationStatus.insertedId),
    });

    return NextResponse.json({ ok: true, body: team }, { status: 201 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
