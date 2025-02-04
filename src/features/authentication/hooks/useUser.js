import { useSuspenseQuery } from "@tanstack/react-query";
import { getUser } from "../../../services/apiAuthentication";

export default function useUser() {
  const { data: user, isLoading } = useSuspenseQuery({
    queryKey: ["user"],
    queryFn: getUser,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  return { user, isLoading, isAuthenticated: user?.role === "authenticated" };
}
