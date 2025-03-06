import { getStorageArea } from "@/api/InventoryApiService";
import { useEffect, useState } from "react";

export const useFetchStorage = (startValue?: string) => {
  const [storageArea, setStorageArea] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storageArrey = [];
        if (startValue) {
          storageArrey.push(startValue);
        }
        const data = await getStorageArea();
        setStorageArea(storageArrey.concat(data));
      } catch (error) {
        console.error("Failed to fetch storage:", error);
      }
    };
    fetchData();
  }, [startValue]);

  return { storageArea, setStorageArea };
};
