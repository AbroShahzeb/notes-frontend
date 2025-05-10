import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../api/auth";

export const useAuth = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  const user = data?.data.user;

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
};
