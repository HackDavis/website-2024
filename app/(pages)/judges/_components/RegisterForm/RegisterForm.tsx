'use client';

import Register from '@actions/auth/register';
import { useFormState } from 'react-dom';
import { useAuth } from '@hooks/useAuth';
import { useEffect } from 'react';

export default function RegisterForm() {
  const [registerState, RegisterAction] = useFormState(Register, { ok: false });
  const { user, login } = useAuth();

  useEffect(() => {
    if (registerState.ok === true) {
      login(registerState.judge);
    }
  }, [registerState]);
  return (
    <div>
      <form action={RegisterAction}>
        <p>Register</p>
        <div>
          <label>Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label>Password</label>
          {/* Change type=text to type=password in the future */}
          <input name="password" type="text" />
        </div>
        <button type="submit">Create an account</button>
        <p aria-live="polite" className="sr-only">
          {JSON.stringify(registerState)}
        </p>
      </form>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}
