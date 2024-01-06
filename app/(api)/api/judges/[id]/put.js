import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient';
import NotFoundError from '@utils/response/NotFoundError';
import isBodyEmpty from '@utils/request/isBodyEmpty';
import NoContentError from '@utils/response/NoContentError';
import parseAndReplace from '@utils/request/parseAndReplace';

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    if (isBodyEmpty(body)) {
      throw new NoContentError('Empty request body');
    }

    const parsedBody = await parseAndReplace(body);

    const id = new ObjectId(params.id);
    const db = await getDatabase();

    const judge = await db.collection('judges').updateOne(
      {
        _id: id,
      },
      parsedBody
    );

    if (judge === null) {
      throw NotFoundError(`Judge with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: judge }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
