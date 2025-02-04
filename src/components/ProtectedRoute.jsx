import { useNavigate } from "react-router";
import { useEffect } from "react";
import useUser from "../features/authentication/hooks/useUser";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  if (isAuthenticated) return children;
}
