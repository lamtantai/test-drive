import { useQuery } from "@tanstack/react-query";
import CarList from "../features/cars/components/CarList";
import Spinner from "../components/Spinner";
import { getCars } from "../services/apiCar";

export default function Cars() {
  const { data: cars, isLoading } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  if (isLoading) return <Spinner />;

  return (
    <section className="px-xs">
      <h1 className="p-xs text-xl font-bold uppercase md:text-4xl">
        Danh sách mẫu xe{" "}
        <span className="text-sm text-lightBlack lg:text-xl">
          ({cars.length} Mẫu)
        </span>
      </h1>

      <CarList cars={cars} />
    </section>
  );
}
