import { Routes, Route, Navigate } from 'react-router-dom';
import { Auth } from '../pages/Auth';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
