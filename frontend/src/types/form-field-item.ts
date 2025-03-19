import {Item} from "@/types/item.ts";
import {Equipment} from "@/types/equipment.ts";

export type FormFieldItem = {
  equipment: string;
  quantity: string;
  storageArea: string;
  responsible: string;
}

export const toItemFrom = (formFieldItem: FormFieldItem, equipment: Equipment[], id: string): Item => {
  return {
    id: id,
    ...formFieldItem,
    equipment: equipment.find(equipment => equipment.name === formFieldItem.equipment) as Equipment
  }
};