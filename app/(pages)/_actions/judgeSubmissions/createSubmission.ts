'use server';
import FormToJSON from '../_utils/FormToJSON';

export default async function createSubmission(formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await fetch(`${process.env.BASE_URL}/api/submissions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataJSON),
  });
}
