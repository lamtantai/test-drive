import { createContext, useContext } from "react";
import { getUser } from "../services/apiAuthentication";
import { useQuery } from "@tanstack/react-query";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}
