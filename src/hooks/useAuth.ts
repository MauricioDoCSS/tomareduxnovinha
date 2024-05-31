import { JwtToken, User } from '../@types/Auth';
import { setAuthStatus, setAuthToken, setUser } from '../redux/slices/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { authMe, signIn } from '../service/requests';
import { jwtDecode } from 'jwt-decode';

const LOCAL_STORAGE_KEY = import.meta.env.VITE_AUTH_KEY;

export const useAuth = () => {
  const dispatch = useAppDispatch();

  // Function to authenticate the user
  const authenticate = (user: User, authToken: string) => {
    dispatch(setUser(user));
    dispatch(setAuthToken(authToken));
    dispatch(setAuthStatus('authenticated'));

    localStorage.setItem(LOCAL_STORAGE_KEY, authToken);
  };

  // Get token from local storage
  const handleGetToken = () => localStorage.getItem(LOCAL_STORAGE_KEY);

  // Get the user using the authToken saved in local storage
  const handleAuthenticateUser = async () => {
    const request = await authMe();
    const authToken = handleGetToken();

    if (!request.data || !authToken) {
      dispatch(setAuthStatus('not_authenticated'));
      return;
    }

    const accessToken = handleGetToken();

    const decode = jwtDecode<JwtToken>(accessToken || '');

    const user = {
      id: decode.id,
      name: decode.name,
      email: decode.email,
      roles: decode.roles,
    };

    authenticate(user, authToken);
  };

  // Function to signIn
  const handleSignIn = async ({ email, password }: { email: string; password: string }) => {
    const request = await signIn(email, password);

    if (request.data) {
      const { data } = request;

      const decode = jwtDecode<JwtToken>(data.accessToken);

      const user = {
        id: decode.id,
        name: decode.name,
        email: decode.email,
        roles: decode.roles,
      };

      authenticate(user, data.accessToken);
      return true;
    }

    dispatch(setAuthStatus('not_authenticated'));
    return request.error;
  };

  // Function to signOut
  const handleSignOut = () => {
    dispatch(setUser(null));
    dispatch(setAuthToken(null));
    dispatch(setAuthStatus('not_authenticated'));

    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  return {
    handleGetToken,
    handleAuthenticateUser,
    handleSignIn,
    handleSignOut,
  };
};
