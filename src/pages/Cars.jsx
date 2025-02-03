import FilterList from "../components/FilterList";
import CarList from "../features/cars/components/CarList";
import useCars from "../hooks/useCars";
import useFilteredValue from "../hooks/useFilteredValue";

export default function Cars() {
  const { cars } = useCars();

  let filteredCars;

  const filteredValue = useFilteredValue("engine");

  function filterCarsType(value) {
    return cars.filter((car) => car.engineType === value);
  }

  if (filteredValue === "all") filteredCars = cars;

  if (filteredValue === "hybird") filteredCars = filterCarsType("hybird");

  if (filteredValue === "diesel") filteredCars = filterCarsType("diesel");

  if (filteredValue === "electric") filteredCars = filterCarsType("electric");

  return (
    <section className="px-xs">
      <h1 className="py-4 text-xl font-bold uppercase md:text-4xl">
        Danh sách mẫu xe{" "}
        <span className="text-sm text-lightBlack">
          [{filteredCars.length} Mẫu]
        </span>
      </h1>

      <FilterList
        filterField="engine"
        options={[
          { value: "all", label: "Tất cả" },
          { value: "hybird", label: "Xe hybird" },
          { value: "diesel", label: "Xe xăng" },
          { value: "electric", label: "Xe điện" },
        ]}
        filteredValue={filteredValue}
      />

      <CarList cars={filteredCars} />
    </section>
  );
}
