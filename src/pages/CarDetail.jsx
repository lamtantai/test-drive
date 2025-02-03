import { useParams } from "react-router";

import AdditionalCarInfo from "../features/cars/components/AdditionalCarInfo";

import BookingForm from "../features/cars/components/BookingForm";
import CarInfo from "../features/cars/components/CarInfo";
import useCars from "../hooks/useCars";
import CarListSlider from "../components/CarListSlider";

export default function CarDetail() {
  const { carId } = useParams();

  const { cars } = useCars();

  const currentCar = cars.find((car) => car.id === Number(carId));

  if (!currentCar) {
    return <div>Car not found</div>;
  }

  const relatedCars = cars.filter(
    (car) =>
      car.id !== currentCar.id &&
      (car.make === currentCar.make ||
        car.engineType === currentCar.engineType),
  );

  return (
    <>
      <section className="relative grid md:grid-cols-2" key={carId}>
        <img
          src={currentCar.imageUrl}
          alt=""
          className="top-[calc(var(--header-height)+var(--spacing-xs))] aspect-video w-full bg-slate-50 object-contain md:sticky"
        />

        <div className="px-xs">
          <CarInfo car={currentCar} />

          <AdditionalCarInfo car={currentCar} />

          <h2 className="mb-4 mt-10 text-3xl font-semibold">
            Đăng ký lái thử xe ngay
          </h2>

          <BookingForm
            isCarReady={currentCar.availabilityStatus}
            carId={currentCar.id}
            car={currentCar}
          />
        </div>
      </section>

      <CarListSlider
        title="Xe tương tự"
        cars={relatedCars}
        scrollbarClass="relatedCars"
      />
    </>
  );
}
