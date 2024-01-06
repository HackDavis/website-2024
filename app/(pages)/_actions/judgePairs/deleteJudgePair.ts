'use server';

export default async function deleteJudgePairs(id: string) {
  await fetch(`${process.env.BASE_URL}/api/judge-pairs/${id}`, {
    method: 'DELETE',
  });
}
