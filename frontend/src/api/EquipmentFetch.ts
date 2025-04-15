import {Equipment} from "@/features";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getEquipment(): Promise<Equipment[]> {
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
