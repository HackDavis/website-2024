'use server';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';

import fetchPost from '@utils/fetch/fetchPost';
import HttpError from '@utils/response/HttpError';
import { auth_expiration } from '@apidata/configs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    const hashedPassword = await bcrypt.hash(password as string, 10);

    // Create a new user
    const res = await fetchPost('/api/judges', {
      email,
      password: hashedPassword,
    });
    const data = await res.json();
    const { body: newJudge } = data;
    // set JWT token in cookies
    const token = jwt.sign(newJudge, process.env.JWT_SECRET as Secret, {
      expiresIn: `${auth_expiration}h`,
    });

    cookies().set({
      name: 'auth_token',
      value: token,
      expires: Date.now() + 1000 * 60 * 60 * auth_expiration,
      secure: true,
    });

    return NextResponse.json({ ok: true, judge: newJudge }, { status: 201 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
