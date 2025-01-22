export default function Tag({ availabel }) {
  return (
    <span
      className={`inline-block px-2 py-1 font-semibold ${availabel ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
    >
      {availabel ? "Sẵn sàng" : "Bảo dưỡng"}
    </span>
  );
}
