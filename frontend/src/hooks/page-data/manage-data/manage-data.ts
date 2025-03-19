import {useState} from "react";
import {
  useFilterItems,
  useGetEquipment,
  useGetItems,
  useGetResponsible,
  useGetStorage,
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
  const {mutateAsync: mutateStorage} = usePostStorage();
  const {equipment, setEquipment} = useGetEquipment();
  const {mutateAsync: mutateEquipment} = usePostEquipment();
  const {responsible, setResponsible} = useGetResponsible();
  const {mutateAsync: mutateResponsible} = usePostResponsible();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const [order, setOrder] = useState<string>("quantity");

  const {itemList, setSearch, setSelectedStorage, setSelectedResponsible} = useFilterItems(
    consolidateInventory(items)
  );

  const orderItems = (itemList: Item[], order: string) => {
    const sortingFunctions: Record<string, (a: Item, b: Item) => number> = {
      id: (a, b) => Number(a.equipment.id) - Number(b.equipment.id),
      equipment: (a, b) => a.equipment.name.localeCompare(b.equipment.name),
      quantity: (a, b) => Number(a.quantity) - Number(b.quantity),
      StorageArea: (a, b) => a.storageArea.localeCompare(b.storageArea),
      Responsible: (a, b) => a.responsible.localeCompare(b.responsible),
    };

    return sortingFunctions[order] ? [...itemList].sort(sortingFunctions[order]) : itemList;
  };

  const saveAssetStorage = useSaveAsset(setStorageArea, mutateStorage, storageArea)
  const saveAssetEquipment = useSaveAsset(setEquipment, mutateEquipment, equipment)
  const saveAssetResponsible = useSaveAsset(setResponsible, mutateResponsible, responsible)

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
    itemList: orderItems(itemList, order),
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
