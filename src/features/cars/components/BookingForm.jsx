import { useEffect, useState } from "react";
import Select from "./Select";
import { PiCityLight } from "react-icons/pi";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addBooking } from "../../../services/apiBooking";
import DatePicker from "./DatePicker";
import { useUser } from "../../../context/UserContext";
import { Link } from "react-router";

export default function BookingForm({ isCarReady, car }) {
  const { user } = useUser();

  const [bookingData, setBookingData] = useState({
    user_id: user ? user.id : "",
    city: "",
    date: "",
    make: car.make,
    model: car.model,
    status: "pending",
  });

  const [provinces, setProvinces] = useState([]);

  const { mutate: createBooking, isPending } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => toast.success("Đăng ký thành công!"),
    onError: () => toast.error("Đăng ký không thành công!"),
  });

  useEffect(() => {
    async function getProvinces() {
      const response = await fetch("https://provinces.open-api.vn/api");

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      setProvinces(data);
    }

    getProvinces();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (!bookingData.city || !bookingData.date) {
      toast.error("Vui lòng chọn đầy đủ thông tin.");
      return;
    }

    createBooking(bookingData);
  }

  function handleSelectDate(date) {
    setBookingData((prevData) => ({
      ...prevData,
      date,
    }));
  }

  function handleSelectCity(event) {
    setBookingData((prevData) => ({
      ...prevData,
      city: event.target.value,
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
      />

      <DatePicker onChange={handleSelectDate} />

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
        <button className="mt-4 w-full grow rounded-md border border-complete-700 bg-complete-100 px-3 py-2 text-center text-2xl text-complete-700">
          Đăng ký
        </button>
      )}
    </form>
  );
}
