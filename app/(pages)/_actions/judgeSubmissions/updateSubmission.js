'use server';
import FormToJSON from '../_utils/FormToJSON';

export default async function updateSubmission(id, formData) {
  const dataJSON = FormToJSON(formData);
  await fetch(`${process.env.BASE_URL}/api/submissions/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      $set: dataJSON,
    }),
  });
}
