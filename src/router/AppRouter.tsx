import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from '../modules/auth/components/PrivateRoute';
import LoginPage from '../modules/auth/components/LoginPage';
import ShoppingListPage from '../modules/shopping-list/components/ShoppingListPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/shopping-list" element={<ShoppingListPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/shopping-list" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;