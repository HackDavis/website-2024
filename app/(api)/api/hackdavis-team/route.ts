import { prisma } from 'lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

interface QueryParams {
  team: string;
  year: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // You can provide more specific types for your query parameters as needed
  const { team, year } = req.query as QueryParams;

  try {
    const members = await prisma.teamMember.findMany({
      where: {
        // Ensure that 'team' and 'year' are the correct types
        teamCategory: team,
        year: year ? parseInt(year, 10) : undefined,
      },
    });
    res.status(200).json(members);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'An error occurred on the server.' });
  }
}
