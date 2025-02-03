import CarCardItem from "../../../components/CarCardItem";

export default function CarList({ cars }) {
  return (
    <ul className="grid gap-xs md:grid-cols-2 xl:grid-cols-3">
      {cars.map((car) => (
        <CarCardItem key={car.id} car={car} />
      ))}
    </ul>
  );
}
