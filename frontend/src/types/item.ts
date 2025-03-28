import { Equipment } from "@/types/equipment.ts";

export type Item = {
  id: string;
  equipment: Equipment;
  quantity: string;
  storage: string;
  responsible: string;
};
