import { getItems } from "@/api/InventoryApiService";
import { item } from "@/types"
;import { useState, useEffect } from "react";

export const useManageData = () => {
  const [items, setItems] = useState<item[]>([]);
  const [storageArea, setStorageArea] = useState<string[]>([
    "Verksdag",
    "Annex",
    "Bothuset",
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.error("Failed to fetch items:", error);
      }
    };
    fetchData();
  }, []);

  return {
    items,
    setItems,
    storageArea,
    setStorageArea,
  };
};
