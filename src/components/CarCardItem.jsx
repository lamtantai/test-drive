import { Link } from "react-router-dom";

import {
  PiSeatLight,
  PiGasPumpLight,
  PiCalendarBlankLight,
  PiChargingStationLight,
  PiClockLight,
} from "react-icons/pi";
import { IoLogoElectron } from "react-icons/io5";
import formattedDate from "../utils/formattedDate";

export default function CarCardItem({ car }) {
  const today = new Date();
  today.setDate(today.getDate() + 5);
  const maintenanceEndDate = formattedDate(today);

  return (
    <div className="group rounded-md shadow-card">
      <Link to={`/cars/${car.id}`} className="flex flex-col gap-6 p-4">
        <div className="flex gap-2">
          <CarStatus availabilityStatus={car.availabilityStatus} />

          {!car.availabilityStatus && (
            <MaintenanceStatus endDate={maintenanceEndDate} />
          )}
        </div>

        <img
          src={car.imageUrl}
          loading="lazy"
          alt=""
          className="aspect-video object-contain transition-transform duration-300 group-hover:-translate-y-2"
        />

        <CarDetails
          make={car.make}
          model={car.model}
          year={car.year}
          seat={car.seat}
          engineType={car.engineType}
        />
      </Link>
    </div>
  );
}

function CarStatus({ availabilityStatus }) {
  return (
    <span
      className={`self-start rounded-md px-4 py-2 text-lg font-semibold ${
        availabilityStatus
          ? "bg-complete-100 text-complete-700"
          : "bg-error-100 text-error-700"
      }`}
    >
      {availabilityStatus ? "Sẵn sàng" : "Bảo dưỡng"}
    </span>
  );
}

function MaintenanceStatus({ endDate }) {
  return (
    <span className="flex items-center self-start rounded-md bg-pending-100 px-4 py-2 text-lg font-semibold text-pending-700">
      <PiClockLight className="mr-2 text-xl" />
      {endDate}
    </span>
  );
}

const carTypes = {
  hybird: { label: "Xe hybird", icon: <IoLogoElectron /> },
  diesel: { label: "Xe xăng", icon: <PiGasPumpLight /> },
  electric: {
    label: "Xe điện",
    icon: <PiChargingStationLight />,
  },
};

function CarDetails({ make, model, year, seat, engineType }) {
  return (
    <div>
      <p className="text-center text-2xl font-bold">
        {make} - {model}
      </p>

      <ul className="mt-4 flex justify-center gap-x-6 font-semibold text-lightBlack">
        <li className="flex items-center gap-x-2">
          <PiCalendarBlankLight />
          {year}
        </li>

        <li className="flex items-center gap-x-2">
          <PiSeatLight /> {seat} chỗ
        </li>

        <li className="flex items-center gap-x-2">
          {carTypes[engineType].icon}
          {carTypes[engineType].label}
        </li>
      </ul>
    </div>
  );
}
