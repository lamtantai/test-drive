export default function CarInfo({ car }) {
  return (
    <div className="py-xs font-medium">
      <h1 className="text-3xl font-bold 2xl:text-5xl">
        {car.make} - {car.model}
      </h1>

      <p className="mt-2 text-lightBlack 2xl:text-xl">{car.description}</p>

      <ul className="mt-8 flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:justify-between">
        <li className="">
          <p className="text-lightBlack">Lên đến</p>
          <p className="mb-1 mt-2 text-3xl 2xl:text-5xl">{car.power} HP</p>
          <p className="text-sm text-lightBlack">Công suất định mức</p>
        </li>

        <li className="">
          <p className="text-lightBlack">Tăng tốc trong</p>
          <p className="mb-1 mt-2 text-3xl 2xl:text-5xl">
            {car.acceleration} giây
          </p>
          <p className="text-sm text-lightBlack">từ 0 lên đến 100 km/h</p>
        </li>

        <li className="">
          <p className="text-lightBlack">Đạt đến</p>
          <p className="mb-1 mt-2 text-3xl 2xl:text-5xl">{car.topSpeed} km/h</p>
          <p className="text-sm text-lightBlack">Vận tốc tối đa</p>
        </li>
      </ul>
    </div>
  );
}
