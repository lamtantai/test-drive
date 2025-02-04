import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/apiAuthentication";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);

      navigate("/", { replace: true });
    },

    onError: () => toast.error("Thông tin tài khoản không đúng.", {}),
  });

  return {
    login,
    isPending,
    isSuccess,
    isLoading: isPending && !isSuccess,
  };
}
