import { Item } from "@/types";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getItems(): Promise<Item[]> {
  return inventory;
  return await fetch(BACKEND_URL + "/api/v1/inventory").then((res) =>
    res.json()
  );
}
export const inventory: Item[] = [
  {
    id: "1",
    equipment: "Axe",
    quantity: "2",
    storageArea: "Tool Shed",
    responsible: "John Doe",
  },
  {
    id: "1",
    equipment: "Axe",
    quantity: "3",
    storageArea: "Tool Shed",
    responsible: "Jane Smith",
  },
  {
    id: "2",
    equipment: "Tent",
    quantity: "5",
    storageArea: "Warehouse A",
    responsible: "Jane Smith",
  },
  {
    id: "3",
    equipment: "Spoon",
    quantity: "20",
    storageArea: "Kitchen Storage",
    responsible: "Emily Johnson",
  },
  {
    id: "4",
    equipment: "Saw",
    quantity: "3",
    storageArea: "Garage",
    responsible: "Michael Brown",
  },
  {
    id: "5",
    equipment: "First Aid Kit",
    quantity: "10",
    storageArea: "Emergency Room",
    responsible: "Sarah Wilson",
  },
];
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
