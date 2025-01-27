import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../../services/apiAuthentication";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function useLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success("Đăng nhập thành công");
      setTimeout(() => {
        navigate("/cars");
      }, 2000);
    },
    onError: (err) => console.log(err),
  });

  return { login, isPending };
}
