import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import dbConnect from '@utils/db/mongoClient';
import NotFoundError from '@utils/response/NotFoundError';

export async function DELETE(_, { params }) {
  try {
    const id = new ObjectId(params.id);
    const client = await dbConnect();
    const db = client.db();

    const deleteStatus = await db.collection('pokemon').deleteOne({
      _id: id,
    });

    if (deleteStatus.deletedCount === 0) {
      throw new NotFoundError(`pokemon with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: pokemon }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status }
    );
  }
}
