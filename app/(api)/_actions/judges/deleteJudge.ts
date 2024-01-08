'use server';

export default async function deleteJudge(id: string) {
  await fetch(`${process.env.BASE_URL}/api/judges/${id}`, {
    method: 'DELETE',
  });
}
