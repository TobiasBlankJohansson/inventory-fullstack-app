import { getStorageArea } from "@/api/InventoryApiService";
import { useEffect, useState } from "react";

export const useFetchStorage = () => {
  const [storage, setStorage] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStorageArea();
        setStorage(data);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };
    fetchData();
  }, []);

  return { storage, setStorage };
};
