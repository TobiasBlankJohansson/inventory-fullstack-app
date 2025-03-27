import {useState} from "react";
import {
  useFilterItems,
  useGetEquipment,
  useGetItems,
  useGetResponsible,
  useGetStorage,
  useOrderItem,
  usePostEquipment,
  usePostResponsible,
  usePostStorage,
  useSaveAsset,
} from "@/hooks";
import {consolidateInventory, openModal} from "@/util";
import {Item} from "@/types";

export const useManageData = () => {
  const {items, setItems} = useGetItems();
  const {storageArea, setStorageArea} = useGetStorage();
  const {equipment, setEquipment} = useGetEquipment();
  const {responsible, setResponsible} = useGetResponsible();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const {orderItems, order, setOrder} = useOrderItem();

  const {itemList, setSearch, setSelectedStorage, setSelectedResponsible} = useFilterItems(
    consolidateInventory(items)
  );

  const saveAssetStorage = useSaveAsset(setStorageArea, usePostStorage(), storageArea)
  const saveAssetEquipment = useSaveAsset(setEquipment, usePostEquipment(), equipment)
  const saveAssetResponsible = useSaveAsset(setResponsible, usePostResponsible(), responsible)

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
    itemList: orderItems(itemList, order) as Item[],
    setItems,
    storageArea,
    setSearch,
    setSelectedStorage,
    checkedItems,
    setCheckedItems,
    handleDelete,
    handleCreate,
    saveAsset: {
      saveAssetStorage,
      saveAssetEquipment,
      saveAssetResponsible
    }, setOrder, order
  };
};

