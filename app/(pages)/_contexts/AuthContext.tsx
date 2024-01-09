'use client';
import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

interface AuthTokenBody {
  judgeId: string;
  username: string;
  exp: number;
}

interface AuthContextBody {
  auth: boolean;
  user: AuthTokenBody | null;
}

function getAuthFromClient(): AuthContextBody {
  try {
    // Get the JWT token from cookies
    const authToken = Cookies.get('auth_token');

    if (!authToken) {
      throw new Error('token not found in cookies');
    }

    // Decode the JWT token
    const decodedToken = jwt.decode(authToken) as AuthTokenBody;

    // Ensure the token is not expired
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (decodedToken.exp && decodedToken.exp < currentTimestamp) {
      throw new Error('token has expired');
    }

    return { auth: true, user: decodedToken };
  } catch (e) {
    const error = e as Error;
    console.error('Error decoding JWT token:', error.message);
    return { auth: false, user: null };
  }
}

export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState<AuthContextBody>({
    auth: false,
    user: null,
  });

  useEffect(() => {
    setAuth(getAuthFromClient());
  }, []);

  function login(user: AuthTokenBody) {
    setAuth({
      auth: true,
      user,
    });
  }

  function logout() {
    setAuth({
      auth: false,
      user: null,
    });
  }

  const contextValue = { auth, login, logout };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
