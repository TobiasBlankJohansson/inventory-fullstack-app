import {Equipment} from "@/types";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getEquipment(): Promise<Equipment[]> {
  console.log("fetchEquipment");
  return await fetch(BACKEND_URL + "/api/equipments").then((res) => res.json())
}

export async function postEquipment(equipment: Equipment): Promise<Equipment> {
  return await fetch(BACKEND_URL + "/api/equipments", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(equipment),
  }).then((res) => res.json());
}

export async function putEquipment(equipment: Equipment): Promise<Equipment> {
  return fetch(BACKEND_URL + "/api/equipments", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(equipment),
  }).then((res) => res.json());
}

export async function deleteEquipment(id: string): Promise<boolean> {
  const response = await fetch(BACKEND_URL + "/api/equipments/" + id, {
    method: "DELETE",
  });
  return response.ok;
}

/*
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
*/
