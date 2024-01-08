'use server';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import bcrypt from 'bcryptjs';
import jwt, { Secret } from 'jsonwebtoken';

import fetchGet from '@utils/fetch/fetchGet';
import HttpError from '@utils/response/HttpError';
import { auth_expiration } from '@apidata/configs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Find Judge
    const res = await fetchGet('/api/judges', { email });
    const data = await res.json();
    if (!data.ok || data.body.length === 0) {
      throw new Error('user does not exist');
    }

    const judge = data.body[0];

    const isPasswordValid = await bcrypt.compare(
      password as string,
      judge.password
    );

    if (!isPasswordValid) {
      throw new Error('email or password do not match');
    }

    // set JWT token in cookies
    const token = jwt.sign(
      { judgeId: judge._id },
      process.env.JWT_SECRET as Secret,
      {
        expiresIn: `${auth_expiration}h`,
      }
    );
    cookies().set({
      name: 'auth_token',
      value: token,
      expires: Date.now() + 1000 * 60 * 60 * auth_expiration,
      secure: true,
    });

    return NextResponse.json({ ok: true, judge }, { status: 200 });
  } catch (e) {
    const error = e as HttpError;
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: error.status || 400 }
    );
  }
}
