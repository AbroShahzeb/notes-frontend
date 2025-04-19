import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPassword, Login, SignUp } from "../modules/public/auth";
import ROUTES from "../constants/routes";
import { ResetPassword } from "../modules/public/auth/resetPassword";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.SIGNIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
