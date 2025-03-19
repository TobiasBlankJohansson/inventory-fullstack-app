import {Item} from "@/types";

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
    equipment: {id: "1", name: "Compass"},
    quantity: "2",
    storageArea: "Tool Shed",
    responsible: "John Doe",
  },
  {
    id: "2",
    equipment: {id: "2", name: "Multi-tool Knife"},
    quantity: "3",
    storageArea: "Tool Shed",
    responsible: "Jane Smith",
  },
  {
    id: "3",
    equipment: {id: "3", name: "First Aid Kit"},
    quantity: "5",
    storageArea: "Warehouse A",
    responsible: "Jane Smith",
  },
  {
    id: "4",
    equipment: {id: "4", name: "Flashlight"},
    quantity: "20",
    storageArea: "Kitchen Storage",
    responsible: "Emily Johnson",
  },
  {
    id: "5",
    equipment: {id: "5", name: "Sleeping Bag"},
    quantity: "3",
    storageArea: "Garage",
    responsible: "Michael Brown",
  },
  {
    id: "6",
    equipment: {id: "6", name: "Fire Starter"},
    quantity: "10",
    storageArea: "Emergency Room",
    responsible: "Sarah Wilson",
  },
  {
    id: "7",
    equipment: {id: "7", name: "Water Bottle"},
    quantity: "5",
    storageArea: "Tool Shed",
    responsible: "James Lee",
  },
  {
    id: "8",
    equipment: {id: "8", name: "Backpack"},
    quantity: "12",
    storageArea: "Camping Gear Storage",
    responsible: "Sarah Wilson",
  },
  {
    id: "9",
    equipment: {id: "9", name: "Hiking Boots"},
    quantity: "8",
    storageArea: "Tool Shed",
    responsible: "Michael Brown",
  },
  {
    id: "10",
    equipment: {id: "10", name: "Rope"},
    quantity: "6",
    storageArea: "Kitchen Storage",
    responsible: "Emily Johnson",
  },
];


export async function postItem(item: Item): Promise<Item> {
  return item;
  return fetch(BACKEND_URL + "/api/v1/inventory", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(item),
  }).then((res) => res.json());
}

export async function putItem(item: Item): Promise<Item> {
  return item;
  return fetch(BACKEND_URL + "/api/v1/inventory", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(item),
  }).then((res) => res.json());
}

export async function deleteItem(id: string): Promise<boolean> {
  return true;
  return fetch(BACKEND_URL + "/api/v1/inventory/" + id, {
    method: "POST",
  }).then((res) => res.json());
}
