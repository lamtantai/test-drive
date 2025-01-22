import { useQuery } from "@tanstack/react-query";
import getCarId from "../services/getCarId";
import { useParams } from "react-router";

import CTAButton from "../components/CTAButton";
import { DatePicker } from "../features/cars/components/DatePicker";

export default function CarDetail() {
  const carId = useParams().carId;

  const { data, error, status } = useQuery({
    queryKey: ["carId"],
    queryFn: () => getCarId(carId),
  });

  if (status === "pending") return <h1 className="pt-96">loading</h1>;

  const car = data[0];

  return (
    <section className="">
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-16 lg:p-xs">
        <div className="bg-slate-50 lg:self-start">
          <img
            src={car.imageUrl}
            alt=""
            className="mb-4 aspect-video w-full object-contain"
          />
        </div>

        <div className="px-6 font-semibold lg:p-0">
          <h1 className="text-3xl font-bold 2xl:text-5xl">
            {car.make} - {car.model}
          </h1>
          <p className="text-lightBlack mt-4 2xl:text-xl">{car.description}</p>

          <ul className="mt-10 flex flex-col gap-8 xl:flex-row xl:justify-between">
            <li className="font-medium">
              <p className="text-lightBlack">Lên đến</p>
              <p className="mb-1 mt-2 text-3xl 2xl:text-5xl">{car.power} HP</p>
              <p className="text-lightBlack text-sm">Công suất định mức</p>
            </li>

            <li className="font-medium">
              <p className="text-lightBlack">Tăng tốc trong</p>
              <p className="mb-1 mt-2 text-3xl 2xl:text-5xl">
                {car.acceleration} giây
              </p>
              <p className="text-lightBlack text-sm">từ 0 lên đến 100 km/h</p>
            </li>

            <li className="font-medium">
              <p className="text-lightBlack">Đạt đến</p>
              <p className="mb-1 mt-2 text-3xl 2xl:text-5xl">
                {car.topSpeed} km/h
              </p>
              <p className="text-lightBlack text-sm">Vận tốc tối đa</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full">
        <DatePicker />
      </div>
    </section>
  );
}
