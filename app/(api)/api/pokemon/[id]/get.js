import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import dbConnect from '@utils/db/mongoClient';

export async function GET(_, { params }) {
  try {
    const id = new ObjectId(params.id);
    const client = await dbConnect();
    const db = client.db();

    const pokemon = await db.collection('pokemon').findOne({
      _id: id,
    });

    if (pokemon === null) {
      throw Error(`Pokemon with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: pokemon }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
