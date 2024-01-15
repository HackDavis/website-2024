import ProtectedDisplay from '@components/ProtectedDisplay/ProtectedDisplay';
import LogoutButton from '../_components/LogoutButton/LogoutButton';

export default function AuthTest() {
  return (
    <ProtectedDisplay>
      Protected information
      <LogoutButton>Logout</LogoutButton>
    </ProtectedDisplay>
  );
}
