import { useEffect, useState } from "react";

export default function useProvinces() {
  const [provinces, setProvinces] = useState([]);

  useEffect(() => {
    async function getProvinces() {
      const response = await fetch("https://provinces.open-api.vn/api");

      if (!response.ok) {
        throw new Error("Could not fetch data");
      }

      const data = await response.json();

      setProvinces(data);
    }

    getProvinces();
  }, []);

  return { provinces };
}
