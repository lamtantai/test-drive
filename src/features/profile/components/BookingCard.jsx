// BookingCard.js
import DeleteButton from "./DeleteButton";

export default function BookingCard({ booking, index }) {
  return (
    <div
      key={booking.id}
      className="flex flex-col gap-xs rounded-md bg-white p-xs shadow-card"
    >
      {/* STT */}
      <div className="flex items-center justify-between">
        <p className="text-xl">
          STT: <strong>{String(index + 1).padStart(2, "0")}</strong>
        </p>

        {/* Nút Xóa */}
        <DeleteButton bookingId={booking.id} />
      </div>

      {/* Thông tin đặt xe */}
      <div className="text-lg">
        <p>
          Mẫu xe: <strong>{booking.model}</strong>
        </p>

        <p>
          Tỉnh/TP: <strong>{booking.city}</strong>
        </p>

        <p>
          Ngày thử xe: <strong>{booking.date}</strong>
        </p>
      </div>

      {/* Trạng thái */}
      <div
        className={`rounded-md py-2 text-center ${
          booking.status === "completed"
            ? "border border-green-300 bg-green-100 text-green-800"
            : "border border-yellow-300 bg-yellow-100 text-yellow-800"
        }`}
      >
        <p className="font-medium">
          {booking.status === "completed" ? "Hoàn thành" : "Chưa hoàn thành"}
        </p>
      </div>
    </div>
  );
}
