import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { AppRoutes } from './routes/routes';

const App = () => {
  const { handleAuthenticateUser } = useAuth();

  useEffect(() => {
    handleAuthenticateUser();
  }, []);

  return <AppRoutes />;
};

export default App;
