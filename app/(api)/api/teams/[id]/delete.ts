import { type NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import { getDatabase } from '@utils/mongodb/mongoClient.mjs';
import NotFoundError from '@utils/response/NotFoundError';
import type { HttpError } from '@utils/response/Errors';

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = new ObjectId(params.id);
    const db = await getDatabase();

    const deleteStatus = await db.collection('teams').deleteOne({
      _id: id,
    });

    if (deleteStatus.deletedCount === 0) {
      throw new NotFoundError(`team with id: ${params.id} not found.`);
    }

    return NextResponse.json(
      { ok: true, body: 'team deleted' },
      { status: 200 }
    );
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status }
    );
  }
}
