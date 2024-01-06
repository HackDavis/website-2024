'use server';
import FormToJSON from '../_utils/FormToJSON';

export default async function updateJudgePairs(id: string, formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await fetch(`${process.env.BASE_URL}/api/judge-pairs/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      $set: dataJSON,
    }),
  });
}
