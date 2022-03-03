import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Home } from '@modules/home';
import { Register, Login, Account } from '@modules/user';
import { Tasks } from '@modules/tasks';
import { NotFound } from '@shared/components/app/NotFound';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isLogged = false;
  const location = useLocation();

  if (!isLogged)
    return <Navigate to="/login" state={{ prevPath: location.pathname }} />;

  return children;
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route
          path="/tasks"
          element={
            <RequireAuth>
              <Tasks />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
