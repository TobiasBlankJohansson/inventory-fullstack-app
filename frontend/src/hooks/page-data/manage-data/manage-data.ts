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

export const useManageData = () => {
  const {items, setItems} = useGetItems();
  const {storageArea, setStorageArea} = useGetStorage();
  const {mutateAsync: mutateStorage} = usePostStorage();
  const {equipment, setEquipment} = useGetEquipment();
  const {mutateAsync: mutateEquipment} = usePostEquipment();
  const {responsible, setResponsible} = useGetResponsible();
  const {mutateAsync: mutateResponsible} = usePostResponsible();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const {itemList, setSearch, setSelectedStorage, setSelectedResponsible} = useFilterItems(
    consolidateInventory(items)
  );

  const saveAssetStorage = useSaveAsset(setStorageArea, mutateStorage)
  const saveAssetEquipment = useSaveAsset(setEquipment, mutateEquipment)
  const saveAssetResponsible = useSaveAsset(setResponsible, mutateResponsible)

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
    saveAsset: {
      saveAssetStorage,
      saveAssetEquipment,
      saveAssetResponsible
    }
  };
};
