import { useState } from "react";
import { useFilterItems } from "../filter-items";
import { useFetchItems } from "../fetch-items";

export const useManageData = () => {
  const { items, setItems } = useFetchItems();
  const [storageArea, setStorageArea] = useState<string[]>([
    "Verksdag",
    "Annex",
    "Bothuset",
  ]);

  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const itemList = useFilterItems(items, search, selected);

  const handleDelete = () => {
    setItems((prev) => prev.filter((item) => !checkedItems.includes(item.id)));
    setCheckedItems([]);
  };

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
