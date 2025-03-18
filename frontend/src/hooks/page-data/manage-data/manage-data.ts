import {useState} from "react";
import {useFetchEquipment, useFetchResponsible, useFilterItems, useGetItems, useGetStorage,} from "@/hooks";
import {consolidateInventory, openModal} from "@/util";
import {postStorageArea} from "@/api/StorageFetch.ts";


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

  async function SaveStorage(
    setStorageArea: (updateFn: (prevStorage: string[]) => string[]) => void,
    addAnotherOne: boolean,
    setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
    event?: React.FormEvent
  ) {
    const storageAreaInput: HTMLInputElement = document.getElementById(
      "storage_area_name"
    ) as HTMLInputElement;
    const storageName = storageAreaInput.value;
    if (await postStorageArea(storageName))
      setStorageArea((storageArea) => [...storageArea, storageName]);
    storageAreaInput.value = "";
    if (addAnotherOne) {
      event?.preventDefault();
      setAddAnotherOne(() => false);
    }
  }

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
