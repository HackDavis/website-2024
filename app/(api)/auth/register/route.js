import { getDatabase } from '@utils/db/mongoClient';
import DuplicationError from '@utils/response/DuplicationError';

export async function POST(req) {
  try {
    const db = await getDatabase();
    const { email, password } = await req.json();

    const existingJudge = await db.collection('judges').findOne({ email });

    if (existingJudge) {
      throw new DuplicationError(`Judge with email: ${email} already exists.`);
    }

    // Create a new user
    const newUser = await db
      .collection('judges')
      .insertOne({ email, password });

    return NextResponse.json({ ok: true, body: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
