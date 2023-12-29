import { NextResponse } from 'next/server';

import dbConnect from '@utils/db/mongoClient';

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await dbConnect();
    const db = client.db();

    const trainer = await db.collection('trainers').insertOne(body);

    return NextResponse.json({ ok: true, body: trainer }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
