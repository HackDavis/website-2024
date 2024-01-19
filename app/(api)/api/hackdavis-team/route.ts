import { prisma } from 'lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const members = await prisma.teamMember.findMany();
  console.log(members);

  return NextResponse.json(members);
}
