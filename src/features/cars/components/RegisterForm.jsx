import { useEffect, useRef, useState } from "react";
import { DatePicker } from "./DatePicker";
import Select from "./Select";
import { PiCityLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { addBooking } from "../../../services/apiBooking";

export default function RegisterForm({ isCarReady, carId, car }) {
  const formRef = useRef(null);
  const [isFormInvalid, setIsFormInvalid] = useState(true);

  const [provinces, setProvinces] = useState();
  const [pickedProvince, setPickedProvince] = useState("Thành phố Hà Nội");

  const { mutate, isPending } = useMutation({
    mutationFn: addBooking,
    onSuccess: () => toast.success("Đăng ký thành công!"),
    onError: () => toast.error("Đăng ký không thành công!"),
  });

  useEffect(() => {
    async function getProvinces() {
      const response = await fetch(
        "https://provinces.open-api.vn/api/?depth=2",
      );

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      const validData = data.filter((province) =>
        province.codename.includes("thanh_pho"),
      );

      setProvinces(validData);
    }

    getProvinces();
  }, []);

  const districts = provinces?.find(
    (province) => province.name === pickedProvince,
  )?.districts;

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    for (let [key, value] of formData.entries()) {
    }
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="space-y-2">
        <Select
          id="provinces"
          optionList={provinces}
          onChange={(e) => setPickedProvince(e.target.value)}
          icon={<PiCityLight />}
        />

        <Select id="districts" optionList={districts} icon={<CiLocationOn />} />

        <DatePicker />
      </div>

      <button
        disabled={isPending}
        onClick={() =>
          mutate({
            name: "Tai",
            model: car.model,
            status: "pending",
            date: new Date(),
          })
        }
        className={`mt-4 h-12 w-full grow rounded-md border text-center text-2xl/none ${isCarReady && !isFormInvalid ? "border-green-700 bg-green-100 text-green-700" : "cursor-not-allowed border-green-700 bg-green-100 text-green-700 opacity-50"}`}
      >
        <span>{isCarReady ? "Đăng ký" : "Bảo dưỡng"}</span>
      </button>
    </form>
  );
}
