import { Loader } from '../components/Loader';
import { useAppSelector } from '../redux/hooks';
import { AppRoutes } from '../routes/routes';


export const AuthMiddleware = () => {
  const { authStatus } = useAppSelector((state) => state.auth);

  if (authStatus == 'not_verified') {
    return <Loader />;
  } else {
    return <AppRoutes /> ;
  }
};
