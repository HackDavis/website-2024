'use server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import FormToJSON from '../_utils/FormToJSON';
import fetchGet from '@actions/_utils/fetchGet';

export default async function Register(prevState, formData) {
  try {
    const dataJSON = FormToJSON(formData);
    const { email, password } = dataJSON;

    // Find Judge
    const res = await fetchGet('/api/judges', { email });
    if (!res.ok) {
      throw new Error('Failed to create user');
    }

    const judge = res.body[0];

    const isPasswordValid = await bcrypt.compare(password, judge.password);

    if (!isPasswordValid) {
      throw new Error('email or password do not match');
    }

    // set JWT token in cookies
    const token = jwt.sign({ judgeId: judge._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    // Set cookie with JWT token
    cookies().set({
      name: 'token',
      value: token,
      httpOnly: true,
      sameSite: true,
      secure: true,
    });

    return { ok: true, judge };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}
