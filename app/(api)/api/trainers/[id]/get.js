import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

import dbConnect from '@utils/db/mongoClient';

export async function GET(_, { params }) {
  try {
    const id = new ObjectId(params.id);
    const client = await dbConnect();
    const db = client.db();

    const trainer = await db.collection('trainers').findOne({ _id: id });
    const pokemon = await db
      .collection('pokemon')
      .find({ trainer_id: id })
      .project({ trainer_id: 0 })
      .toArray();
    trainer.pokemon = pokemon;

    if (trainer === null) {
      throw Error(`Pokemon with id: ${params.id} not found.`);
    }

    return NextResponse.json({ ok: true, body: trainer }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
