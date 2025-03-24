import { Item } from "@/types";
import { useMemo, useState } from "react";

export const useFilterItems = (items: Item[]) => {
  const [search, setSearch] = useState<string>("");
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedResponsible, setSelectedResponsible] = useState<string[]>([]);

  const itemList = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch = item.equipment.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStorage =
        selectedStorage.length === 0 ||
        selectedStorage
          .map((s) => s.toLowerCase())
          .includes(item.storageArea.toLowerCase());

      const matchesResponsible =
        selectedResponsible.length === 0 ||
        selectedResponsible
          .map((s) => s.toLowerCase())
          .includes(item.responsible.toLowerCase());
      return matchesSearch && matchesStorage && matchesResponsible;
    });
  }, [items, search, selectedStorage, selectedResponsible]);

  return { itemList, setSearch, setSelectedStorage, setSelectedResponsible };
};
