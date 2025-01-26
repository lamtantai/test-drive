import TableMobile from "../features/profile/components/TableMobile";
import TableDesktop from "../features/profile/components/TableDesktop";
import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../services/apiBooking";
import Spinner from "../components/Spinner";

export default function Bookings() {
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,
  });

  if (isLoading) return <Spinner />;

  return (
    <>
      {/* Desktop Table */}
      <div className="hidden lg:block">
        <TableDesktop bookings={bookings} />
      </div>

      {/* Mobile Table */}
      <div className="lg:hidden">
        <TableMobile bookings={bookings} />
      </div>
    </>
  );
}
