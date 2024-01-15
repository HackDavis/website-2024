'use server';
import FormToJSON from '@utils/form/FormToJSON';

export default async function updateJudge(id: string, formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await fetch(`${process.env.BASE_URL}/api/judges/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      $set: dataJSON,
    }),
  });
}
