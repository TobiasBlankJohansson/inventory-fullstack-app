import {Item} from "@/types/item.ts";
import {Equipment} from "@/types/equipment.ts";

export type FormField = {
  id: string;
  equipment: string;
  quantity: string;
  storageArea: string;
  responsible: string;
}

export const fromItemToFormField = (item: Item): FormField => {
  return {
    ...item,
    equipment: item.equipment.name
  }
};

export const toItemFromFormField = (formField: FormField, equipment: Equipment[], id: string): Item => {
  return {
    ...formField,
    id: id,
    equipment: equipment.find(equipment => equipment.name === formField.equipment) as Equipment
  }
};