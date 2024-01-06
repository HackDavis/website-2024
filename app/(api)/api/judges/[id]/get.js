import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient';
import NotFoundError from '@utils/response/NotFoundError';

export async function GET(_, { params }) {
  try {
    const id = new ObjectId(params.id);
    const db = await getDatabase();

    const judge = await db.collection('judges').findOne({
      _id: id,
    });

    if (judge === null) {
      throw NotFoundError(`judge with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: judge }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
