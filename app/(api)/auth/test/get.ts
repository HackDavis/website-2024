import authenticate from '@utils/authentication/authenticate';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const user = await authenticate(request);
  console.log(user);
  return NextResponse.json({ ok: true, body: user }, { status: 200 });
}
