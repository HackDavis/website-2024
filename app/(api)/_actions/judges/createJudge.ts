'use server';
import FormToJSON from '@utils/form/FormToJSON';

export default async function createJudge(formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await fetch(`${process.env.BASE_URL}/api/judges`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataJSON),
  });
}
