import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FiTrash } from "react-icons/fi";
import { deleteBooking } from "../../../services/apiBooking";

export default function DeleteButton({ bookingId }) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });

  return (
    <button
      disabled={isPending}
      className={`rounded-md bg-red-100 p-2 text-red-600 ${isPending && "cursor-wait"}`}
      onClick={() => mutate(bookingId)}
    >
      <FiTrash size={16} />
    </button>
  );
}
