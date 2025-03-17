import { useState } from "react";
import { useFetchItems, useFetchStorage, useFilterItems } from "@/hooks";
import { consolidateInventory } from "@/util";

export const useManageData = () => {
  const { items, setItems } = useFetchItems();
  const { storageArea, setStorageArea } = useFetchStorage();

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const { itemList, setSearch, setSelectedStorage } = useFilterItems(
    consolidateInventory(items)
  );

  const handleDelete = () => {
    setItems((prev) => prev.filter((item) => !checkedItems.includes(item.id)));
    setCheckedItems([]);
  };
  const handleCreate = () => {
    (document.getElementById("create_item") as HTMLDialogElement).showModal();
  };

  return {
    itemList,
    setItems,
    storageArea,
    setStorageArea,
    setSearch,
    setSelectedStorage,
    checkedItems,
    setCheckedItems,
    handleDelete,
    handleCreate,
  };
};
