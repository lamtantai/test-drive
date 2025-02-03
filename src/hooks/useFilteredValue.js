import { useSearchParams } from "react-router-dom";

export default function useFilteredValue(value) {
  const [searchParams] = useSearchParams();
  return searchParams.get(value) || "all";
}
