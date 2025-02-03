import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout } from "../../../services/apiAuthentication";
import { useNavigate } from "react-router";

export default function LogoutButton() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate("/");
    },
  });

  return <button onClick={mutate}>LogoutButton</button>;
}
