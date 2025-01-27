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

  console.log("booking");

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
    console.log(bookingData);
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
    <form onSubmit={handleSubmit} className="space-y-3" key={car.id}>
      <Select
        name="city"
        optionList={provinces}
        icon={<PiCityLight />}
        placeholder="Chọn Tỉnh/Thành phố"
        onChange={handleSelectCity}
      />

      <DatePicker onChange={handleSelectDate} />

      {!user && (
        <div className="mt-4 w-full grow rounded-md border border-green-700 bg-green-100 px-3 py-2 text-center text-2xl text-green-700">
          <Link to="/login">Đăng nhập để đăng ký</Link>
        </div>
      )}

      {user && (
        <button
          disabled={!isCarReady}
          className={`mt-4 h-12 w-full grow rounded-md border text-2xl ${isCarReady ? "border-green-700 bg-green-100 text-green-700" : "border-red-700 bg-red-100 text-red-700"} `}
        >
          {isCarReady ? "Đăng ký" : "Bảo dưỡng"}
        </button>
      )}
    </form>
  );
}
