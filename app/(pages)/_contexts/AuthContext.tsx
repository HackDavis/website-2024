'use client';
import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

interface AuthTokenBody {
  _id: string;
  email: string;
  password: string;
  iat?: number;
  exp?: number;
}

interface AuthUserBody {
  _id: string;
  email: string;
  password: string;
}

interface AuthProviderValue {
  user: AuthUserBody;
  loading: boolean;
  login: (user: AuthTokenBody) => void;
  logout: () => void;
}

function getAuthFromClient(): AuthUserBody | null {
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
    delete decodedToken.exp;
    delete decodedToken.iat;
    return decodedToken;
  } catch (e) {
    const error = e as Error;
    console.error('Error decoding JWT token:', error.message);
    return null;
  }
}

export type { AuthTokenBody, AuthUserBody, AuthProviderValue };

export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUserBody | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(getAuthFromClient());
    setLoading(false);
  }, []);

  function login(user: AuthUserBody) {
    setUser(user);
  }

  function logout() {
    setUser(null);
  }

  const contextValue = { user, loading, login, logout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
