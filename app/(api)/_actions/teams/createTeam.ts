'use server';
import FormToJSON from '@utils/form/FormToJSON';

export default async function createTeam(formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await fetch(`${process.env.BASE_URL}/api/teams`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataJSON),
  });
}
