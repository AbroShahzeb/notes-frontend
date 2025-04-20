import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ForgotPassword, Login, SignUp } from "../modules/public/auth";
import ROUTES from "../constants/routes";
import { ResetPassword } from "../modules/public/auth/resetPassword";
import {
  Archive,
  CreateNote,
  Notes,
  Search,
  Settings,
  Tags,
} from "../modules/private";
import { DashborardLayout } from "../layout/dashboardLayout";
import {
  FontSettings,
  PasswordSettings,
  ThemeSettings,
} from "../modules/private/settings/components";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<DashborardLayout />}>
          <Route index path="" element={<Notes />} />
          <Route path={ROUTES.ARCHIVE} element={<Archive />} />
          <Route path={ROUTES.SETTINGS} element={<Settings />} />
          <Route path={ROUTES.COLOR_SETTINGS} element={<ThemeSettings />} />
          <Route path={ROUTES.FONT_SETTINGS} element={<FontSettings />} />
          <Route
            path={ROUTES.PASSWORD_SETTINGS}
            element={<PasswordSettings />}
          />
          <Route path={ROUTES.SEARCH} element={<Search />} />
          <Route path={ROUTES.TAGS} element={<Tags />} />
          <Route path={ROUTES.CREATE_NOTE} element={<CreateNote />} />
        </Route>

        <Route path={ROUTES.HOME} element={<Notes />} />
        <Route path={ROUTES.SIGNIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
