import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/db/mongoClient';
import parseAndReplace from '@utils/request/parseAndReplace';
import NotFoundError from '@utils/response/NotFoundError';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import NoContentError from '@utils/response/NoContentError';

export async function PUT(request, { params }) {
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
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
