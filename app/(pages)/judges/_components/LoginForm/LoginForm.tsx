'use client';

import Login from '@actions/auth/login';
import { useAuth } from '@hooks/useAuth';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

export default function LoginForm() {
  const [loginState, LoginAction] = useFormState(Login, { ok: false });
  const { user, login } = useAuth();

  useEffect(() => {
    if (loginState.ok === true) {
      login(loginState.judge);
    }
  }, [loginState]);

  return (
    <div>
      <form action={LoginAction}>
        <p>Login</p>
        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          {/* Change type=text to type=password in the future */}
          <input name="password" type="text" />
        </div>
        <button type="submit">Login</button>
        <p aria-live="polite" className="sr-only">
          {JSON.stringify(loginState)}
        </p>
      </form>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
