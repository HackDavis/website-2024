import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest) {
  return NextResponse.json({ ok: true, data: process.env.TEST_SECRET });
}
