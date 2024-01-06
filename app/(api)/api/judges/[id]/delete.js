import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient';
import NotFoundError from '@utils/response/NotFoundError';

export async function DELETE(_, { params }) {
  try {
    const id = new ObjectId(params.id);
    const db = await getDatabase();

    const deleteStatus = await db.collection('judges').deleteOne({
      _id: id,
    });

    if (deleteStatus.deletedCount === 0) {
      throw new NotFoundError(`judge with id: ${params.id} not found.`);
    }

    return NextResponse.json(
      { ok: true, body: 'judge deleted' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status }
    );
  }
}
