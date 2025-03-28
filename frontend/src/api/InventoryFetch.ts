import { Item } from "@/types";

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
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemDto),
  }).then((res) => res.json());
}

export async function putItem(itemDto: putItemDto): Promise<Item> {
  return fetch(BACKEND_URL + "/api/items", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(itemDto),
  }).then((res) => res.json());
}

export async function deleteItem(id: string): Promise<boolean> {
  const response = await fetch(BACKEND_URL + "/api/items/" + id, {
    method: "DELETE",
  });
  return response.ok;
}

export const inventory: Item[] = [
  {
    id: "1",
    equipment: { id: "1", name: "Compass" },
    quantity: "2",
    storage: "Tool Shed",
    responsible: "John Doe",
  },
  {
    id: "2",
    equipment: { id: "2", name: "Multi-tool Knife" },
    quantity: "3",
    storage: "Tool Shed",
    responsible: "Jane Smith",
  },
  {
    id: "3",
    equipment: { id: "3", name: "First Aid Kit" },
    quantity: "5",
    storage: "Warehouse A",
    responsible: "Jane Smith",
  },
  {
    id: "4",
    equipment: { id: "4", name: "Flashlight" },
    quantity: "20",
    storage: "Kitchen Storage",
    responsible: "Emily Johnson",
  },
  {
    id: "5",
    equipment: { id: "5", name: "Sleeping Bag" },
    quantity: "3",
    storage: "Garage",
    responsible: "Michael Brown",
  },
  {
    id: "6",
    equipment: { id: "6", name: "Fire Starter" },
    quantity: "10",
    storage: "Emergency Room",
    responsible: "Sarah Wilson",
  },
  {
    id: "7",
    equipment: { id: "7", name: "Water Bottle" },
    quantity: "5",
    storage: "Tool Shed",
    responsible: "James Lee",
  },
  {
    id: "8",
    equipment: { id: "8", name: "Backpack" },
    quantity: "12",
    storage: "Camping Gear Storage",
    responsible: "Sarah Wilson",
  },
  {
    id: "9",
    equipment: { id: "9", name: "Hiking Boots" },
    quantity: "8",
    storage: "Tool Shed",
    responsible: "Michael Brown",
  },
  {
    id: "10",
    equipment: { id: "10", name: "Rope" },
    quantity: "6",
    storage: "Kitchen Storage",
    responsible: "Emily Johnson",
  },
];
