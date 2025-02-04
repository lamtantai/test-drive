import formattedDate from "../../../utils/formattedDate";
import DeleteBookingButton from "./DeleteBookingButton";

export default function BookingCard({ booking, index }) {
  const date = new Date();

  const bookingDate = new Date(booking.date);

  const yesterday = new Date(date);
  yesterday.setDate(date.getDate() - 1); // Trừ đi 1 ngày từ ngày hiện tại

  // So sánh nếu ngày hiện tại lớn hơn bookingDate 1 ngày
  const isCompleted = yesterday > bookingDate;

  return (
    <div className="flex flex-col gap-xs rounded-md bg-white p-xs shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-xl">
          STT: <strong>{String(index + 1).padStart(2, "0")}</strong>
        </p>

        <DeleteBookingButton bookingId={booking.id} />
      </div>

      <div className="text-lg">
        <p>
          Mẫu xe: <strong>{booking.model}</strong>
        </p>

        <p>
          Tỉnh/TP: <strong>{booking.city}</strong>
        </p>

        <p>
          Ngày thử xe: <strong>{formattedDate(bookingDate)}</strong>
        </p>
      </div>

      <div
        className={`rounded-md py-2 text-center ${
          isCompleted
            ? "bg-complete-100 text-complete-700"
            : "bg-pending-100 text-pending-700"
        }`}
      >
        <p className="font-medium">
          {isCompleted ? "Hoàn thành" : "Chưa hoàn thành"}
        </p>
      </div>
    </div>
  );
}
