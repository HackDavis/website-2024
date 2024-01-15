'use client';
import { createContext, useState, useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';

interface AuthTokenBody {
  _id: string;
  email: string;
  password: string;
  iat?: number;
  exp?: number;
}

interface AuthProviderValue {
  user: AuthTokenBody;
  loading: boolean;
  login: (user: AuthTokenBody) => void;
  logout: () => void;
}

function getAuthFromClient(): AuthTokenBody | null {
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
    return decodedToken;
  } catch (e) {
    const error = e as Error;
    console.error('Error decoding JWT token:', error.message);
    return null;
  }
}

const deleteAuthTokenCookie = () => {
  // Delete the 'auth-token' cookie
  Cookies.remove('auth_token', { path: '/' });
};

export type { AuthTokenBody, AuthProviderValue };

export const AuthContext = createContext({});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthTokenBody | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser(getAuthFromClient());
    setLoading(false);
  }, []);

  const login = useCallback((user: AuthTokenBody) => {
    setUser(user);
  }, []);

  const logout = useCallback(() => {
    deleteAuthTokenCookie();
    setUser(null);
  }, []);

  const contextValue = { user, loading, login, logout };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
