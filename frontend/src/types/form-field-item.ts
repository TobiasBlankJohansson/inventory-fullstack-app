import {Item} from "@/types/item.ts";
import {Equipment} from "@/types/equipment.ts";

export type FormFieldItem = {
  id: string;
  equipment: string;
  quantity: string;
  storageArea: string;
  responsible: string;
}

export const fromItemToFormField = (item: Item): FormFieldItem => {
  return {
    ...item,
    equipment: item.equipment.name
  }
};

export const toItemFromFormField = (formField: FormFieldItem, equipment: Equipment[], id: string): Item => {
  return {
    ...formField,
    id: id,
    equipment: equipment.find(equipment => equipment.name === formField.equipment) as Equipment
  }
};