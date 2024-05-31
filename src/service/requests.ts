import { ApiAuthMe, ApiSignIn } from '../@types/Auth';
import { api } from './api';

export const signIn = async (email: string, password: string) => {
  return await api<ApiSignIn>({
    endpoint: '/auth/login',
    method: 'POST',
    data: { email, password },
    withAuth: false,
  });
};

export const authMe = async () => {
  return await api<ApiAuthMe>({
    endpoint: 'auth/me',
    method: 'POST',
  });
};

export const getUsers = async () => {
  return await api({
    endpoint: '/user',
  });
};
