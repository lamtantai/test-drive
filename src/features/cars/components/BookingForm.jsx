import { useState } from "react";
import Select from "./Select";
import { PiCityLight } from "react-icons/pi";
import { toast } from "react-toastify";
import DatePicker from "./DatePicker";
import { Link } from "react-router";
import useUser from "../../authentication/hooks/useUser";
import useBookings from "../../profile/hooks/useBookings";
import useProvinces from "../hooks/useProvinces";
import useAddBooking from "../hooks/useAddBooking";
import SpinnerMini from "../../../components/SpinnerMini";

export default function BookingForm({ isCarReady, car }) {
  const { user } = useUser();
  const { bookings } = useBookings();

  const { provinces } = useProvinces();
  const { createBooking, isLoading, isSuccess } = useAddBooking();

  const [bookingData, setBookingData] = useState({
    user_id: user ? user.id : "",
    city: "",
    date: "",
    make: car.make,
    model: car.model,
    status: "pending",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!bookingData.city || !bookingData.date) {
      toast.error("Vui lòng chọn đầy đủ thông tin.");
      return;
    }

    function isSameDay(date1, date2) {
      return (
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear()
      );
    }

    const hadSameDay = bookings.some((booking) =>
      isSameDay(new Date(booking.date), bookingData.date),
    );

    if (hadSameDay) {
      toast.error(`Bạn đã có lịch đặt xe vào ngày này.`);
      return;
    }

    createBooking(bookingData, {
      onSettled: () => {
        setBookingData((prev) => ({ ...prev, date: "", city: "" }));
      },
    });
  }

  function handleSelectDate(date) {
    setBookingData((prevData) => ({
      ...prevData,
      date,
    }));
  }

  function handleSelectCity(e) {
    setBookingData((prevData) => ({
      ...prevData,
      city: e.target.value,
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Select
        name="city"
        optionList={provinces}
        icon={<PiCityLight />}
        placeholder="Chọn Tỉnh/Thành phố"
        onChange={handleSelectCity}
        value={bookingData.city || ""}
      />

      <DatePicker onChange={handleSelectDate} selected={bookingData.date} />

      {!isCarReady && (
        <button
          disabled
          className="mt-4 w-full grow rounded-md border border-error-700 bg-error-100 px-3 py-2 text-center text-2xl text-error-700"
        >
          Bảo dưỡng
        </button>
      )}

      {!user && isCarReady && (
        <div className="mt-4 w-full grow rounded-md border border-pending-700 bg-pending-100 px-3 py-2 text-center text-2xl text-pending-700">
          <Link to="/login">Đăng nhập để đăng ký</Link>
        </div>
      )}

      {user && isCarReady && (
        <button
          disabled={isLoading}
          className={`mt-4 w-full grow rounded-md border border-complete-700 bg-complete-100 px-3 py-2 text-center text-2xl text-complete-700 ${isLoading && "cursor-not-allowed"}`}
        >
          {isLoading ? <SpinnerMini /> : "Đăng ký"}
        </button>
      )}
    </form>
  );
}
