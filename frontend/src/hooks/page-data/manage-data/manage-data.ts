import {useState} from "react";
import {
  useFetchResponsible,
  useFilterItems,
  useGetEquipment,
  useGetItems,
  useGetStorage,
  usePostStorage,
  useSaveAsset,
} from "@/hooks";
import {consolidateInventory, openModal} from "@/util";

export const useManageData = () => {
  const {items, setItems} = useGetItems();
  const {storageArea, setStorageArea} = useGetStorage();
  const {mutateAsync} = usePostStorage();
  const {equipment} = useGetEquipment();
  const {responsible} = useFetchResponsible();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const {itemList, setSearch, setSelectedStorage, setSelectedResponsible} = useFilterItems(
    consolidateInventory(items)
  );

  const saveAssetStorage = useSaveAsset(setStorageArea, mutateAsync)

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
    saveAssetStorage
  };
};
