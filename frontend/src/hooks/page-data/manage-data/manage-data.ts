import {useState} from "react";
import {
  saveAsset,
  useFilterItems,
  useGetEquipment,
  useGetItems,
  useGetResponsible,
  useGetStorage,
  useOrderItem,
  usePostEquipment,
  usePostResponsible,
  usePostStorage,
} from "@/hooks";
import {consolidateInventory, openModal} from "@/util";
import {Item} from "@/types";

export const useManageData = () => {
  const {items, setItems} = useGetItems();
  const {storage, setStorage} = useGetStorage();
  const {equipment, setEquipment} = useGetEquipment();
  const {responsible, setResponsible} = useGetResponsible();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const {orderItems, order, setOrder} = useOrderItem();

  const {itemList, setSearch, setSelectedStorage, setSelectedResponsible} =
    useFilterItems(consolidateInventory(items));
  const saveAssetStorage = saveAsset(setStorage, usePostStorage(), storage);
  const saveAssetEquipment = saveAsset(
    setEquipment,
    usePostEquipment(),
    equipment
  );
  const saveAssetResponsible = saveAsset(
    setResponsible,
    usePostResponsible(),
    responsible
  );

  const handleDelete = () => {
    setItems((prev) => prev.filter((item) => !checkedItems.includes(item.id)));
    setCheckedItems([]);
  };

  const handleCreate = () => openModal("create_item");
  return {
    options: {equipment, responsible, storage},
    setSelectedResponsible,
    responsible: [
      ...responsible,
      {
        id: "0",
        name: "Total",
      },
    ],
    itemList: orderItems(itemList, order) as Item[],
    setItems,
    storage,
    setSearch,
    setSelectedStorage,
    checkedItems,
    setCheckedItems,
    handleDelete,
    handleCreate,
    saveAsset: {
      saveAssetStorage,
      saveAssetEquipment,
      saveAssetResponsible,
    },
    setOrder,
    order,
  };
};
