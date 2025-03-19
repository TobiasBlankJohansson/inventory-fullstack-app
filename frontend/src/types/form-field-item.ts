import {Item} from "@/types/item.ts";
import {Equipment} from "@/types/equipment.ts";

export type FormField = {
  equipment: string;
  quantity: string;
  storageArea: string;
  responsible: string;
}

export const fromItemTo = (item: Item): FormField => {
  return {
    ...item,
    equipment: item.equipment.name
  }
};

export const toItemFrom = (formField: FormField, equipment: Equipment[], id: string): Item => {
  return {
    id: id,
    ...formField,
    equipment: equipment.find(equipment => equipment.name === formField.equipment) as Equipment
  }
};