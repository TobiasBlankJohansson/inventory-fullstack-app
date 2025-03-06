import { useEffect, useState } from "react";
import { useFilterItems } from "../filter-items";
import { useFetchItems } from "../fetch-items";
import { useFetchStorage } from "../fetch-storage";

export function useDashboardData() {
  const { items, setItems } = useFetchItems();
  const { storageArea, setStorageArea } = useFetchStorage();
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<string[]>(["All"]);

  const itemList = useFilterItems(items, search, selected);
  useEffect(() => {
    setStorageArea((prev) => ["All", ...prev]);
  }, [setStorageArea]);

  return {
    items,
    setItems,
    search,
    setSearch,
    selected,
    setSelected,
    itemList,
    storageArea,
  };
}
