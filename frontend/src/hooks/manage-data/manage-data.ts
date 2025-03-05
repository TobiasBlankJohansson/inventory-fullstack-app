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
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

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

  const handleDelete = () => {
    setItems((prev) => prev.filter((item) => !checkedItems.includes(item.id)));
    setCheckedItems([]);
  };

  const itemList = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesStorage =
        selected.length === 0 ||
        selected
          .map((s) => s.toLowerCase())
          .includes(item.storageArea.toLowerCase());
      return matchesSearch && matchesStorage;
    });
  }, [search, items, selected]);

  return {
    itemList,
    setItems,
    storageArea,
    setStorageArea,
    search,
    setSearch,
    selected,
    setSelected,
    checkedItems,
    setCheckedItems,
    handleDelete,
  };
};
