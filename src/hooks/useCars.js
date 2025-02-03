import { useSuspenseQuery } from "@tanstack/react-query";
import { getCars } from "../services/apiCar";

export default function useCars() {
  const { data: cars } = useSuspenseQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });

  return { cars };
}
