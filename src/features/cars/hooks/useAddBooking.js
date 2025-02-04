import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addBooking } from "../../../services/apiBooking";

export default function useAddBooking() {
  const queryClient = useQueryClient();

  const {
    mutate: createBooking,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => {
      queryClient.invalidateQueries(["bookings"]);
      toast.success("Đăng ký thành công!");
    },
    onError: () => toast.error("Đăng ký không thành công!"),
  });

  return { createBooking, isSuccess, isLoading: isPending && !isSuccess };
}
