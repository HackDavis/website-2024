'use client';

import Register from '@actions/auth/register';
import Login from '@actions/auth/login';
import { useFormState } from 'react-dom';

const initialState = {
  message: '',
};
export default function Auth() {
  const [registerState, RegisterAction] = useFormState(Register, initialState);
  const [loginState, LoginAction] = useFormState(Login, initialState);

  return (
    <div>
      <form action={RegisterAction}>
        <p>Register</p>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="text" />
        </div>
        <p aria-live="polite" className="sr-only">
          {JSON.stringify(registerState)}
        </p>
        <button type="submit">Submit</button>
      </form>
      <form action={LoginAction}>
        <p>Login</p>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="text" />
        </div>
        <p aria-live="polite" className="sr-only">
          {JSON.stringify(loginState)}
        </p>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
