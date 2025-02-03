import BookingCard from "./BookingCard";

export default function BookingListMobile({ bookings }) {
  return (
    <div className="grid gap-xs sm:grid-cols-2">
      {bookings.map((booking, index) => (
        <BookingCard key={booking.id} booking={booking} index={index} />
      ))}
    </div>
  );
}
