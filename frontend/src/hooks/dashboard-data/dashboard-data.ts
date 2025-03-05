import { useState } from "react";
import { useFilterItems } from "../filter-items";
import { useFetchItems } from "../fetch-items";

export function useDashboardData() {
  const { items, setItems } = useFetchItems();
  const [search, setSearch] = useState<string>("");
  const [selected, setSelected] = useState<string[]>(["All"]);

  const itemList = useFilterItems(items, search, selected);

  return {
    items,
    setItems,
    search,
    setSearch,
    selected,
    setSelected,
    itemList,
  };
}
