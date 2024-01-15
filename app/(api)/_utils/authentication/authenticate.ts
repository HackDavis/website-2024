import jwt, { Secret } from 'jsonwebtoken';
import { NextRequest } from 'next/server';

import NotAuthenticatedError from '@utils/response/NotAuthenticatedError';

interface DecodedToken {
  userId: string;
  exp: number;
}

export default async function authenticate(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;

  if (!token) {
    throw new NotAuthenticatedError('User not authenticated');
  }

  // Verify the token
  const decoded = jwt.verify(
    token,
    process.env.JWT_SECRET as Secret
  ) as DecodedToken;

  // Check if the token is expired
  if (decoded.exp * 1000 < Date.now()) {
    throw new NotAuthenticatedError('Authentication expired');
  }

  return decoded;
}
