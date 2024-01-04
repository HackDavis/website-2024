'use server';

export default async function deletesubmission(id) {
  await fetch(`${process.env.BASE_URL}/api/Submissions/${id}`, {
    method: 'DELETE',
  });
}
