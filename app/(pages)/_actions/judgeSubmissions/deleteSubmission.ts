'use server';

export default async function deletesubmission(id: string) {
  await fetch(`${process.env.BASE_URL}/api/Submissions/${id}`, {
    method: 'DELETE',
  });
}
