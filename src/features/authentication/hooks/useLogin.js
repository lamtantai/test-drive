import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/apiAuthentication";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const TIME_OUT = 1000;

export default function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Đăng nhập thành công", { autoClose: 1000 });
      setTimeout(() => {
        navigate("/cars");
      }, TIME_OUT);
    },

    onError: () => toast.error("Đăng nhập không thành công"),
  });

  return { login, isPending };
}
