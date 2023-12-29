import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import dbConnect from '@utils/db/mongoClient';

export async function DELETE(_, { params }) {
  try {
    const id = new ObjectId(params.id);
    const client = await dbConnect();
    const db = client.db();

    const trainer = await db.collection('trainers').deleteOne({
      _id: id,
    });

    return NextResponse.json({ ok: true, body: trainer }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
