import { NextResponse } from 'next/server';

import getQueries from '@utils/request/getQueries';
import { getDatabase } from '@utils/mongob/mongoClient';

export async function GET(request) {
  try {
    const queries = getQueries(request);
    const db = getDatabase.db();

    const submissions = await db
      .collection('submissions')
      .find(queries)
      .toArray();

    return NextResponse.json({ ok: true, body: submissions }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 400 }
    );
  }
}
