'use client';
import { AuthProvider } from '../_contexts/AuthContext';

export default function JudgesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div>hello</div>
      {children}
    </AuthProvider>
  );
}
