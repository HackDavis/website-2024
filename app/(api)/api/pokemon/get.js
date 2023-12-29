import { NextResponse } from 'next/server';

import dbConnect from '@utils/db/mongoClient';
import getQueries from '@utils/request/getQueries';

export async function GET(request) {
  try {
    const queries = getQueries(request);
    const client = await dbConnect();
    const db = client.db();

    const playlist = await db.collection('pokemon').find(queries).toArray();

    return NextResponse.json({ ok: true, body: playlist }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
