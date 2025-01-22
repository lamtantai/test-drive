import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function CarCardItem({ car }) {
  return (
    <li className="bg-slate-50 transition-transform duration-300 hover:-translate-y-2">
      <Link to={`/cars/${car.id}`} className="flex flex-col gap-10 p-4">
        <div className="">
          <span
            className={`inline-block px-2 py-1 font-semibold ${car.availabilityStatus ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
          >
            {car.availabilityStatus ? "Sẵn sàng" : "Bảo dưỡng"}
          </span>
        </div>

        <img
          src={car.imageUrl}
          alt=""
          className="aspect-video object-contain"
        />
        <div className="text-xl font-bold">
          <h3 className="text-lightGray">{car.make}</h3>
          <div className="flex justify-between">
            <h3 className="text-primary">{car.model}</h3>
            <h3 className="text-primary">
              {car.power === "electric"
                ? "Xe Điện"
                : car.power === "hybird"
                  ? "Xe Hybird"
                  : "Xe Xăng"}
            </h3>
          </div>
        </div>
      </Link>
    </li>
  );
}
