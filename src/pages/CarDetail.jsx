import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";

import Spinner from "../components/Spinner";
import AdditionalCarInfo from "../features/cars/components/AdditionalCarInfo";
import OtherCars from "../features/cars/components/OtherCars";

import { getCars } from "../services/apiCar";
import BookingForm from "../features/cars/components/BookingForm";

export default function CarDetail() {
  const carId = useParams().carId;

  const { data: cars, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  console.log("render");

  if (isLoading) return <Spinner />;

  const car = cars.find((car) => car.id === Number(carId));

  const ortherCars = cars
    .filter((car) => car.id !== Number(carId))
    .filter((car) => car.availabilityStatus);

  return (
    <section className="" key={carId}>
      <div className="mx-auto mb-20 grid md:mb-60 md:grid-cols-2">
        <div className="bg-slate-50 md:self-start">
          <img
            src={car.imageUrl}
            alt=""
            className="mb-4 aspect-video w-full object-contain"
          />
        </div>

        <div className="w-full p-xs">
          <h1 className="text-3xl font-bold 2xl:text-5xl">
            {car.make} - {car.model}
          </h1>

          <p className="mt-2 text-lightBlack 2xl:text-xl">{car.description}</p>

          <ul className="mb-6 mt-8 flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:justify-between">
            <li className="font-medium">
              <p className="text-lightBlack">Lên đến</p>
              <p className="mb-1 mt-2 text-3xl 2xl:text-5xl">{car.power} HP</p>
              <p className="text-sm text-lightBlack">Công suất định mức</p>
            </li>

            <li className="font-medium">
              <p className="text-lightBlack">Tăng tốc trong</p>
              <p className="mb-1 mt-2 text-3xl 2xl:text-5xl">
                {car.acceleration} giây
              </p>
              <p className="text-sm text-lightBlack">từ 0 lên đến 100 km/h</p>
            </li>

            <li className="font-medium">
              <p className="text-lightBlack">Đạt đến</p>
              <p className="mb-1 mt-2 text-3xl 2xl:text-5xl">
                {car.topSpeed} km/h
              </p>
              <p className="text-sm text-lightBlack">Vận tốc tối đa</p>
            </li>
          </ul>

          <AdditionalCarInfo car={car} />

          <h2 className="mb-4 mt-10 text-3xl font-semibold">
            Đăng ký lái thử xe ngay
          </h2>

          <BookingForm
            isCarReady={car.availabilityStatus}
            carId={car.id}
            car={car}
          />
        </div>
      </div>

      <h2 className="mb-2 px-xs text-5xl font-semibold">Mẫu xe khác</h2>
      <OtherCars cars={ortherCars} />
    </section>
  );
}
