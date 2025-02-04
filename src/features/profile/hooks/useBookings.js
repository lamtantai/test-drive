import { useSuspenseQuery } from "@tanstack/react-query";
import { getBookings } from "../../../services/apiBooking";

export default function useBookings() {
  const { data: bookings } = useSuspenseQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  return { bookings };
}
