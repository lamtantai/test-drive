import { Link } from "react-router-dom";

import {
  PiSeatLight,
  PiGasPumpLight,
  PiCalendarBlankLight,
  PiChargingStationLight,
} from "react-icons/pi";
import { IoLogoElectron } from "react-icons/io5";

export default function CarCardItem({ car }) {
  return (
    <div className="shadow-card group rounded-md">
      <Link to={`/cars/${car.id}`} className="flex flex-col gap-6 p-4">
        <span
          className={`self-start rounded-md px-4 py-2 text-lg font-semibold ${car.availabilityStatus ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
        >
          {car.availabilityStatus ? "Sẵn sàng" : "Bảo dưỡng"}
        </span>

        <img
          src={car.imageUrl}
          alt=""
          className="aspect-video object-contain transition-transform duration-300 group-hover:-translate-y-2"
        />

        <p className="text-center text-2xl font-bold">
          {car.make} - {car.model}
        </p>

        <ul className="flex justify-center gap-x-4 font-semibold text-lightBlack">
          <li className="flex items-center gap-x-2">
            <PiCalendarBlankLight />
            {car.year}
          </li>

          <li className="flex items-center gap-x-2">
            <PiSeatLight /> {car.seat} chỗ
          </li>

          <li className="flex items-center gap-x-2">
            {car.engineType === "Xe điện" ? (
              <PiChargingStationLight />
            ) : car.engineType === "Xe hybird" ? (
              <IoLogoElectron />
            ) : (
              <PiGasPumpLight />
            )}
            {car.engineType}
          </li>
        </ul>
      </Link>
    </div>
  );
}
