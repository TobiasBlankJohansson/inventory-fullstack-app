import {useState} from "react";
import {Item} from "@/types";

export const useOrderItem = () => {
  const [order, setOrder] = useState<string>("quantity");
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
  return {order, setOrder, orderItems}
}