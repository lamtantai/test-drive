import { useQuery } from "@tanstack/react-query";
import { getUser } from "../services/apiAuthentication";

export default function useUser() {
  const { data: user } = useQuery({ queryKey: ["user"], queryFn: getUser });

  return user;
}
