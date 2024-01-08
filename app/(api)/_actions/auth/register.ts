'use server';

import { cookies } from 'next/headers';
import HttpError from '@utils/response/HttpError';
import FormToJSON from '../../_utils/form/FormToJSON';
import fetchPost from '@utils/fetch/fetchPost';

import { parseSetCookie } from 'next/dist/compiled/@edge-runtime/cookies';

export default async function Login(prevState: any, formData: FormData) {
  try {
    const body = FormToJSON(formData);
    const res = await fetchPost('/auth/register', body, false);
    const data = await res.json();
    const set_cookies = res.headers.getSetCookie();
    for (const c of set_cookies) {
      const parsedCookie = parseSetCookie(c);
      if (parsedCookie !== undefined) cookies().set(parsedCookie);
    }
    return data;
  } catch (e) {
    const error = e as HttpError;
    return { ok: false, error: error.message };
  }
}
