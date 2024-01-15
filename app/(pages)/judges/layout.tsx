'use client';
import { AuthProvider } from '../_contexts/AuthContext';

export default function JudgesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
