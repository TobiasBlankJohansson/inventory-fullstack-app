import { Item } from "@/types";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getItems(): Promise<Item[]> {
  return await fetch(BACKEND_URL + "/api/v1/inventory").then((res) =>
    res.json()
  );
}

export async function postItem(item: Item): Promise<Item> {
  return fetch(BACKEND_URL + "/api/v1/inventory", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then((res) => res.json());
}

export async function putItem(item: Item): Promise<Item> {
  return fetch(BACKEND_URL + "/api/v1/inventory", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  }).then((res) => res.json());
}

export async function deleteItem(id: string): Promise<boolean> {
  return fetch(BACKEND_URL + "/api/v1/inventory/" + id, {
    method: "POST",
  }).then((res) => res.json());
}

export async function getStorageArea(): Promise<string[]> {
  return mockDataStorageArea;
  return await fetch(BACKEND_URL + "/api/items").then((res) => res.json());
}

export async function postStorageArea(storageArea: string): Promise<boolean> {
  if (storageArea) {
    return true;
  }
  return true;
}

const mockDataStorageArea: string[] = ["Annex", "Verksdag"];
