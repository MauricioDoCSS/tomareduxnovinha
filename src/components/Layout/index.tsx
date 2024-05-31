import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const Layout = () => {
  return (
    <>
      <div className="layout">
        <Sidebar />

        <main className="content">
          <Outlet />
        </main>
      </div>
    </>
  );
};
