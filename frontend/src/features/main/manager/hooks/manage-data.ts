import {useState} from "react";
import {
  Item,
  saveAsset,
  useDeleteItem,
  useFilterItems,
  useGetEquipment,
  useGetItems,
  useGetResponsible,
  useGetStorage,
  useOrderItem,
  usePostEquipment,
  usePostResponsible,
  usePostStorage,
} from "@/features";
import {consolidateInventory, openModal} from "@/util";
import {toast} from "react-toastify";

export const useManageData = () => {
  const {items, setItems} = useGetItems();
  const {mutateAsync} = useDeleteItem();
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

  const handleDelete = async () => {
    const prevItems = [...items];
    const updatedItems = items.filter(e => !checkedItems.includes(e.id));
    setItems(() => updatedItems);
    setCheckedItems([]);
    try {
      await Promise.all(checkedItems.map(id => mutateAsync(id)));
      toast.success("Deleted successfully!");
    } catch {
      setItems(() => prevItems);
      setCheckedItems(() => checkedItems);
      toast.error("Something went wrong, please try again");
    }
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
