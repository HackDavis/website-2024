'use server';
import fetchPost from '@utils/fetch/fetchPost';
import FormToJSON from '../../_utils/form/FormToJSON';

export default async function createSubmission(formData: FormData) {
  const dataJSON = FormToJSON(formData);
  await fetchPost('/api/submissions', dataJSON);
}
