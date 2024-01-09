'use client';

import { useAuth } from '@hooks/useAuth';

export default function Judges() {
  const { auth, login, logout } = useAuth();
  return JSON.stringify(auth);
}
