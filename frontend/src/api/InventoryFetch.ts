import {Item} from "@/features";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getItems(): Promise<Item[]> {
  return await fetch(BACKEND_URL + "/api/items").then((res) => res.json());
}

export type postItemDto = {
  storageId: string;
  equipmentId: string;
  responsibleId: string;
  amount: string;
};

export type putItemDto = {
  id: string;
  storageId: string;
  equipmentId: string;
  responsibleId: string;
  amount: string;
};

export async function postItem(itemDto: postItemDto): Promise<Item> {
  return fetch(BACKEND_URL + "/api/items", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(itemDto),
  }).then((res) => res.json());
}

export async function putItem(itemDto: putItemDto): Promise<Item> {
  return fetch(BACKEND_URL + "/api/items", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(itemDto),
  }).then((res) => res.json());
}

export async function deleteItem(id: string): Promise<boolean> {
  const response = await fetch(BACKEND_URL + "/api/items/" + id, {
    method: "DELETE",
  });
  return response.ok;
}
