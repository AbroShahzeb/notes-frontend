import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import ROUTES from "../constants/routes";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (!isAuthenticated && !isLoading) {
    // Redirect to login page but save the attempted url
    return <Navigate to={ROUTES.SIGNIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
