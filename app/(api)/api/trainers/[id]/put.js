import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import dbConnect from '@utils/db/mongoClient';

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    const id = new ObjectId(params.id);
    const client = await dbConnect();
    const db = client.db();

    const trainer = await db.collection('trainers').updateOne(
      {
        _id: id,
      },
      body
    );

    if (trainer === null) {
      throw Error(`Playlist with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: trainer }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
