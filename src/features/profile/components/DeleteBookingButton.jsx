import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FiTrash } from "react-icons/fi";
import { deleteBooking } from "../../../services/apiBooking";

export default function DeleteBookingButton({ bookingId }) {
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
      className={`rounded-md bg-error-100 p-2 text-error-700 ${isPending && "cursor-wait"}`}
      onClick={() => mutate(bookingId)}
    >
      <FiTrash size={16} />
    </button>
  );
}
