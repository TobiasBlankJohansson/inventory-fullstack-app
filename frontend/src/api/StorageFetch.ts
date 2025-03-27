import {Storage} from "@/types";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getStorageArea(): Promise<Storage[]> {
  return await fetch(BACKEND_URL + "/api/storages").then((res) => res.json());
}

export async function postStorageArea(storageArea: {
  name: string;
  id: string;
}): Promise<Storage> {
  return await fetch(BACKEND_URL + "/api/storages", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: storageArea.name}),
  }).then((res) => res.json());
}

export const mockDataStorageArea: Storage[] = [
  {id: "1", name: "Tool Shed"},
  {id: "2", name: "Warehouse A"},
  {id: "3", name: "Kitchen Storage"},
  {id: "4", name: "Garage"},
  {id: "5", name: "Emergency Room"},
];
