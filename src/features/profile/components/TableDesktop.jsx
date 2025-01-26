import DeleteButton from "./DeleteButton";

export default function TableDesktop({ bookings }) {
  return (
    <table className="w-full border border-gray-200 text-sm">
      <thead>
        <tr className="bg-zinc-200">
          <th className="px-6 py-3 text-left text-gray-600">STT</th>

          <th className="px-6 py-3 text-left text-gray-600">Tên</th>

          <th className="px-6 py-3 text-left text-gray-600">Mẫu xe</th>

          <th className="px-6 py-3 text-left text-gray-600">Ngày thử xe</th>

          <th className="px-6 py-3 text-left text-gray-600">Trạng thái</th>
          <th className="px-6 py-3 text-left text-gray-600"></th>
        </tr>
      </thead>

      <tbody>
        {bookings.map((booking, index) => (
          <tr key={booking.id} className="border-t border-zinc-200">
            <td className="px-6 py-4 text-gray-800">{index + 1}</td>
            <td className="px-6 py-4 text-gray-800">{booking.name}</td>
            <td className="px-6 py-4 text-gray-800">{booking.model}</td>
            <td className="px-6 py-4 text-gray-800">{booking.date}</td>
            <td
              className={`px-6 py-4 font-semibold ${booking.status === "completed" ? "text-green-600" : "text-yellow-600"}`}
            >
              {booking.status === "completed"
                ? "Hoàn thành"
                : "Chưa hoàn thành"}
            </td>
            <td className="px-6 py-4">
              <DeleteButton bookingId={booking.id} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
