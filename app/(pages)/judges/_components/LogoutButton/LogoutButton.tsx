'use client';

import { useAuth } from '@hooks/useAuth';

export default function LogoutButton({
  children,
  style,
}: {
  children?: React.ReactNode;
  style?: object;
}) {
  const { logout } = useAuth();
  return (
    <button style={style} onClick={logout}>
      {children}
    </button>
  );
}
