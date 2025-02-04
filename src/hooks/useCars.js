import { useSuspenseQuery } from "@tanstack/react-query";
import { getCars } from "../services/apiCar";

export default function useCars() {
  const { data: cars } = useSuspenseQuery({
    queryKey: ["cars"],
    queryFn: getCars,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });

  return { cars };
}
