import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage, PrivateRoute } from "../modules/auth";
import { ShoppingListPage } from "../modules/shopping-list";

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
