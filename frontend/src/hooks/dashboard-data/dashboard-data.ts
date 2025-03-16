import { useState } from "react";
import { useFilterItems } from "../filter-items";
import { useFetchItems } from "../fetch-items";
import { useFetchStorage } from "../fetch-storage";

export function useDashboardData() {
  const { items, setItems, isLoading, error, refetch } = useFetchItems();
  const { storageArea } = useFetchStorage();
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<string[]>([]);
  const itemList = useFilterItems(items, search, selected);

  return {
    items,
    setItems,
    search,
    setSearch,
    selected,
    setSelected,
    itemList,
    storageArea,
    isLoading,
    error,
    refetch,
  };
}
