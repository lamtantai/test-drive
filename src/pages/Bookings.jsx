import BookingListDesktop from "../features/profile/components/BookingListDesktop";
import BookingListMobile from "../features/profile/components/BookingListMobile";
import FilterList from "../components/FilterList";
import useFilteredValue from "../hooks/useFilteredValue";
import useBookings from "../features/profile/hooks/useBookings";

export default function Bookings() {
  const { bookings } = useBookings();

  let filteredBookings;

  const filteredValue = useFilteredValue("status");

  function filterBookingsStatus(value) {
    return bookings.filter((booking) => booking.status === value);
  }

  if (filteredValue === "all") filteredBookings = bookings;

  if (filteredValue === "pending")
    filteredBookings = filterBookingsStatus("pending");

  if (filteredValue === "completed")
    filteredBookings = filterBookingsStatus("completed");

  return (
    <>
      <FilterList
        filterField="status"
        options={[
          { value: "all", label: "Tất cả" },
          { value: "pending", label: "Chưa hoàn thành" },
          { value: "completed", label: "Hoàn thành" },
        ]}
        filteredValue={filteredValue}
      />
      {/* Máy tính */}
      <div className="hidden lg:block">
        <BookingListDesktop bookings={filteredBookings} />
      </div>

      {/* Điện thoại */}
      <div className="lg:hidden">
        <BookingListMobile bookings={filteredBookings} />
      </div>
    </>
  );
}
