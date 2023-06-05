import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedPage";
import { DashBoard } from "../pages/DashBoard";
import { LoginPage } from "../pages/Login";
import { NotFound } from "../pages/NotFound/style";
import { RegisterPage } from "../pages/Register";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="dashboard" element={<ProtectedRoute />}>
        <Route index element={<DashBoard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
