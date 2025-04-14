import {Storage} from "@/features";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getStorage(): Promise<Storage[]> {
  return await fetch(BACKEND_URL + "/api/storages").then((res) => res.json());
}

export async function postStorage(storage: Storage): Promise<Storage> {
  return await fetch(BACKEND_URL + "/api/storages", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: storage.name}),
  }).then((res) => res.json());
}

export async function putStorage(storage: Storage): Promise<Storage> {
  return fetch(BACKEND_URL + "/api/storages", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(storage),
  }).then((res) => res.json());
}

export async function deleteStorage(id: string): Promise<boolean> {
  const response = await fetch(BACKEND_URL + "/api/storages/" + id, {
    method: "DELETE",
  });
  return response.ok;
}

export const mockDataStorage: Storage[] = [
  {id: "1", name: "Tool Shed"},
  {id: "2", name: "Warehouse A"},
  {id: "3", name: "Kitchen Storage"},
  {id: "4", name: "Garage"},
  {id: "5", name: "Emergency Room"},
];
