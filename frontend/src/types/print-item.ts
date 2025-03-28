import {Item} from "@/types/item.ts";

export type PrintItem = {
  id: string;
  equipment: string;
  quantity: string;
  storage: string;
  responsible: string;
};

export const fromItemToPrintItem = (item: Item): PrintItem => {
  return {
    ...item,
    id: item.equipment.id,
    equipment: item.equipment.name,
  };
};
