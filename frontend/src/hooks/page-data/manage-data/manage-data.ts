import {useState} from "react";
import {useFetchEquipment, useFetchItems, useFetchResponsible, useFetchStorage, useFilterItems,} from "@/hooks";
import {consolidateInventory, openModal} from "@/util";

export const useManageData = () => {
  const {items, setItems} = useFetchItems();
  const {storageArea} = useFetchStorage();
  const {equipment} = useFetchEquipment();
  const {responsible} = useFetchResponsible();

  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const {itemList, setSearch, setSelectedStorage, setSelectedResponsible} = useFilterItems(
    consolidateInventory(items)
  );

  const handleDelete = () => {
    setItems((prev) => prev.filter((item) => !checkedItems.includes(item.id)));
    setCheckedItems([]);
  };
  
  const handleCreate = () => openModal("create_item");

  return {
    options: {equipment, responsible, storageArea},
    setSelectedResponsible,
    responsible,
    itemList,
    setItems,
    storageArea,
    setSearch,
    setSelectedStorage,
    checkedItems,
    setCheckedItems,
    handleDelete,
    handleCreate,
  };
};
