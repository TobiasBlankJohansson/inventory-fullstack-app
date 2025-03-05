import { getItems } from "@/api/InventoryApiService";
import { item } from "@/types";
import { useState, useEffect, useMemo } from "react";

export const useManageData = () => {
  const [items, setItems] = useState<item[]>([]);
  const [storageArea, setStorageArea] = useState<string[]>([
    "Verksdag",
    "Annex",
    "Bothuset",
  ]);
  const [search, setSearch] = useState<string>("");

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

  const itemList = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesSearch;
    });
  }, [search, items]);

  return {
    itemList,
    setItems,
    storageArea,
    setStorageArea,
    search,
    setSearch,
  };
};
