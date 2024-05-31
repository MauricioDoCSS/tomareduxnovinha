import { useAppSelector } from '../redux/hooks';
import { Loader } from '../components/Loader';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = () => {
  const { authStatus } = useAppSelector((state) => state.auth);

  return authStatus == 'authenticated' ? (
    <PrivateRoutes />
  ) : authStatus == 'not_authenticated' ? (
    <PublicRoutes />
  ) : (
    <Loader />
  );
};
