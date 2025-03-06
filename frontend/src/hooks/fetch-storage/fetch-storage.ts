import { getStorageArea } from "@/api/InventoryApiService";
import { useEffect, useState } from "react";

export const useFetchStorage = () => {
  const [storageArea, setStorageArea] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStorageArea();
        setStorageArea(data);
      } catch (error) {
        console.error("Failed to fetch storage:", error);
      }
    };
    fetchData();
  }, []);

  return { storageArea, setStorageArea };
};
