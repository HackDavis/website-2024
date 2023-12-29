import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import dbConnect from '@utils/db/mongoClient';

export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    const id = new ObjectId(params.id);
    const client = await dbConnect();
    const db = client.db();

    const pokemon = await db.collection('pokemon').updateOne(
      {
        _id: id,
      },
      body
    );

    if (pokemon === null) {
      throw Error(`Playlist with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: pokemon }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
