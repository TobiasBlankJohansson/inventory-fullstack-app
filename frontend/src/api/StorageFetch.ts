import {Storage} from "@/types";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getStorageArea(): Promise<Storage[]> {
  return mockDataStorageArea;
  return await fetch(BACKEND_URL + "/api/items").then((res) => res.json());
}

export async function postStorageArea(storageArea: { name: string }): Promise<Storage> {
  return {id: "0", name: storageArea.name};
}

const mockDataStorageArea: Storage[] = [
  {id: "1", name: "Tool Shed"},
  {id: "2", name: "Warehouse A"},
  {id: "3", name: "Kitchen Storage"},
  {id: "4", name: "Garage"},
  {id: "5", name: "Emergency Room"},
];
