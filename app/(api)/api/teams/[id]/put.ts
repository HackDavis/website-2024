import { type NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import parseAndReplace from '@utils/request/parseAndReplace';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import {
  type HttpError,
  NoContentError,
  NotFoundError,
} from '@utils/response/Errors';

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = new ObjectId(params.id);
    const body = await request.json();
    if (isBodyEmpty(body)) {
      throw new NoContentError();
    }
    const parsedBody = await parseAndReplace(body);

    const db = await getDatabase();
    const team = await db.collection('teams').updateOne(
      {
        _id: id,
      },
      parsedBody
    );

    if (team.matchedCount === 0) {
      throw new NotFoundError(`Team with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: team }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
