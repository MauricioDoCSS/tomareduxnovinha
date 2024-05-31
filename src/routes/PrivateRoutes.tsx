import { Routes, Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
