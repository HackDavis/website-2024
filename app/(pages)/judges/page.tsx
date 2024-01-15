'use client';

import { useAuth } from '@hooks/useAuth';

export default function Judges() {
  const { auth, loading } = useAuth();
  if (loading) {
    return 'LOADING...';
  }
  return JSON.stringify(auth);
}
