import { useQuery } from "@tanstack/react-query";
import getCars from "../services/getCars";
import CarList from "../features/cars/components/CarList";

export default function Cars() {
  const {
    data: cars,
    error,
    status,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  if (status === "pending") return <div className="pt-96">LOADING</div>;

  return (
    <section className="">
      <h1 className="p-xs pt-44 text-xl font-bold uppercase md:text-4xl">
        Danh sách mẫu xe{" "}
        <span className="text-lightGray text-sm lg:text-xl">
          ({cars.length} Mẫu)
        </span>
      </h1>

      <CarList cars={cars} />
    </section>
  );
}
