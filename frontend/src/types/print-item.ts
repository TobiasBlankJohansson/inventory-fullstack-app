import {Item} from "@/types/item.ts";

export type PrintItem = {
  id: string;
  equipment: string;
  quantity: string;
  storageArea: string;
  responsible: string;
};

export const fromItemToPrintItem = (item: Item): PrintItem => {
  return {
    ...item,
    equipment: item.equipment.name
  }
};