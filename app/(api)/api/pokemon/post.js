import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import dbConnect from '@utils/db/mongoClient';

export async function POST(request) {
  try {
    const body = await request.json();
    body.trainer_id = new ObjectId(body.trainer_id);

    const client = await dbConnect();
    const db = client.db();

    const playlist = await db.collection('pokemon').insertOne(body);

    return NextResponse.json({ ok: true, body: playlist }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
