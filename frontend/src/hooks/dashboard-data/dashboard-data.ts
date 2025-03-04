import { getItems } from "@/api/InventoryApiService";
import { item } from "@/components";
import { useState, useEffect, useMemo } from "react";

export function useDashboardData() {
  const [items, setItems] = useState<item[]>([]);
  const [search, setSearch] = useState<string>("");
  const [storageArea, setStorageArea] = useState<string>("All");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItems();
      setItems(data);
    };
    fetchData().catch((error) =>
      console.error("Failed to fetch items:", error)
    );
  }, []);

  const itemList = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStorage =
        storageArea === "All" ||
        item.storageArea.toLowerCase().includes(storageArea.toLowerCase());
      return matchesSearch && matchesStorage;
    });
  }, [search, items, storageArea]);

  return {
    items,
    setItems,
    search,
    setSearch,
    storageArea,
    setStorageArea,
    itemList,
  };
}
