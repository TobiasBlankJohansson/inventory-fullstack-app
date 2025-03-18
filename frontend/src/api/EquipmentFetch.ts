import {Equipment} from "@/types";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getEquipment(): Promise<Equipment[]> {
  return mockDataEquipment;
  return await fetch(BACKEND_URL + "/api/items").then((res) => res.json());
}

export async function postEquipment(equipment: string): Promise<Equipment> {
  return {id: "0", name: equipment};
}

const mockDataEquipment: Equipment[] = [
  {id: "1", name: "Compass"},
  {id: "2", name: "Multi-tool Knife"},
  {id: "3", name: "First Aid Kit"},
  {id: "4", name: "Flashlight"},
  {id: "5", name: "Sleeping Bag"},
  {id: "6", name: "Fire Starter"},
  {id: "7", name: "Water Bottle"},
  {id: "8", name: "Backpack"},
  {id: "9", name: "Hiking Boots"},
  {id: "10", name: "Rope"},
];