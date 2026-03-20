import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import OtpPage from "../../services/auth/OtpPage";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../../services/auth/Comfirm_rest_pw";
const authRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/otpage", element: <OtpPage /> },
  { path: "/reset-password", element: <ResetPassword /> }
];

export default authRoutes;