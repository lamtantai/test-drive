import DeleteButton from "./DeleteButton";

export default function BookingListDesktop({ bookings }) {
  return (
    <table className="w-full border border-gray-200 text-sm">
      <TableHeader />

      <tbody>
        {bookings.map((booking, index) => (
          <BookingRow booking={booking} index={index} key={index} />
        ))}
      </tbody>
    </table>
  );
}

function TableHeader() {
  const headers = ["STT", "Mẫu xe", "Tỉnh/TP", "Ngày thử xe", "Trạng thái", ""];

  return (
    <thead>
      <tr className="bg-zinc-200">
        {headers.map((header, index) => (
          <th key={index} className="px-6 py-3 text-left text-gray-600">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function BookingRow({ booking, index }) {
  return (
    <tr key={booking.id} className="border-t border-zinc-200">
      <td className="px-6 py-4 text-gray-800">
        {String(index + 1).padStart(2, 0)}
      </td>
      <td className="px-6 py-4 text-gray-800">{booking.model}</td>
      <td className="px-6 py-4 text-gray-800">{booking.city}</td>
      <td className="px-6 py-4 text-gray-800">{booking.date}</td>
      <td
        className={`px-6 py-4 font-semibold ${booking.status === "completed" ? "text-complete-700" : "text-pending-700"}`}
      >
        {booking.status === "completed" ? "Hoàn thành" : "Chưa hoàn thành"}
      </td>

      <td className="px-6 py-4">
        <DeleteButton bookingId={booking.id} />
      </td>
    </tr>
  );
}
