import { Item } from "@/types";
import { useMemo } from "react";

export const useFilterItems = (
  items: Item[],
  search: string,
  selected: string[]
) => {
  return useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.equipment
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStorage =
        selected.length === 0 ||
        selected.includes("All") ||
        selected
          .map((s) => s.toLowerCase())
          .includes(item.storageArea.toLowerCase());
      return matchesSearch && matchesStorage;
    });
  }, [items, search, selected]);
};
