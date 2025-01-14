// src/routes/PublicRoutes.tsx
import LoginRegisterPage from "@/pages/loginRegisterPage";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginRegisterPage />} />
        <Route path="*" element={<Navigate to={"/auth"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
