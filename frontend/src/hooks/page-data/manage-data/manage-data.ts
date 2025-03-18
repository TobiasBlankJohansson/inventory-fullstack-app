import {useState} from "react";
import {
  useFetchEquipment,
  useFetchResponsible,
  useFilterItems,
  useGetItems,
  useGetStorage,
  usePostStorage,
} from "@/hooks";
import {consolidateInventory, openModal} from "@/util";


export const useManageData = () => {
  const {items, setItems} = useGetItems();
  const {mutateAsync, isSuccess, data} = usePostStorage();
  const {storageArea, setStorageArea} = useGetStorage();
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

  async function saveAsset(
    formId: string,
    addAnotherOne: boolean,
    setAddAnotherOne: React.Dispatch<React.SetStateAction<boolean>>,
    event?: React.FormEvent
  ) {
    const input: HTMLInputElement = document.getElementById(
      formId
    ) as HTMLInputElement;
    const name = input.value;
    await mutateAsync(name);
    if (isSuccess)
      setStorageArea((storageArea) => [...storageArea, data]);
    input.value = "";
    if (addAnotherOne) {
      event?.preventDefault();
      setAddAnotherOne(() => false);
    }
  }

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
    saveAsset
  };
};
