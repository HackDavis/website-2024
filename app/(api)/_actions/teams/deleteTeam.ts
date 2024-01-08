'use server';

export default async function deleteTeam(id: string) {
  await fetch(`${process.env.BASE_URL}/api/teams/${id}`, {
    method: 'DELETE',
  });
}
