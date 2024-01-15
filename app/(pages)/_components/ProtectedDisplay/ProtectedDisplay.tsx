'use client';
import { useAuth } from '@hooks/useAuth';
import LoginForm from 'app/(pages)/judges/_components/LoginForm/LoginForm';

export default function ProtectedDisplay({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  if (loading) {
    return 'loading...';
  }
  if (user === null) {
    return (
      <div>
        This page requires authentication to view
        <LoginForm />
      </div>
    );
  } else {
    return children;
  }
}
