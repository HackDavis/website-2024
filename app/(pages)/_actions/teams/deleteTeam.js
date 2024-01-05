'use server';

export default async function deleteTeam(id) {
  await fetch(`${process.env.BASE_URL}/api/teams/${id}`, {
    method: 'DELETE',
  });
}
