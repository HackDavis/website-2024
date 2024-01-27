'use server';
import { prisma } from '@/lib/prisma';

export async function filterTeam(team: string, year: number) {
  const team_members = await prisma.teamMember.findMany({
    where: {
      teamCategory: team,
      year: year,
    },
  });
  // console.log(team_members);
  return team_members;
}

export async function getTeamMembers() {
  const team_members = await prisma.teamMember.findMany();
  return team_members;
}
