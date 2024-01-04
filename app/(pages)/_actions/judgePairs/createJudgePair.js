'use server';
import FormToJSON from '../_utils/FormToJSON';

export default async function createJudgePair(formData) {
  const dataJSON = FormToJSON(formData);
  await fetch(`${process.env.BASE_URL}/api/judge-pairs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataJSON),
  });
}
