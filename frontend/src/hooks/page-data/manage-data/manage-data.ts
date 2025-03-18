import {useState} from "react";
import {useFetchEquipment, useFetchResponsible, useFilterItems, useGetItems, useGetStorage,} from "@/hooks";
import {consolidateInventory, openModal} from "@/util";

export const useManageData = () => {
  const {items, setItems} = useGetItems();
  const {storageArea} = useGetStorage();
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
    responsible: [...responsible, {
      id: "0",
      name: "Total"
    }],
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
