import CarCardItem from "./CarCardItem";

export default function CarList({ cars }) {
  return (
    <ul className="grid auto-cols-auto gap-3 md:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <li key={car.id}>
          <CarCardItem car={car} />
        </li>
      ))}
    </ul>
  );
}
