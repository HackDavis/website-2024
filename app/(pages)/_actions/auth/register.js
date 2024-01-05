'use server';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import FormToJSON from '../_utils/FormToJSON';

export default async function Register(prevState, formData) {
  try {
    const dataJSON = FormToJSON(formData);
    const { email, password } = dataJSON;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newJudge = await fetch(`${process.env.BASE_URL}/api/judges`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password: hashedPassword }),
    });
    const judge = await newJudge.json();

    if (!judge.ok) {
      throw new Error('Failed to create user');
    }

    const { body } = judge;

    // set JWT token in cookies
    const token = jwt.sign({ judgeId: body._id }, process.env.JWT_SECRET, {
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

    return { ok: true, body };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}
