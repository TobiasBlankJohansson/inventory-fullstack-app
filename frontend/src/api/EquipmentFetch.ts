const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getEquipment(): Promise<string[]> {
  return mockDataEquipment;
  return await fetch(BACKEND_URL + "/api/items").then((res) => res.json());
}

export async function postEquipment(equipment: string): Promise<boolean> {
  if (equipment) {
    return true;
  }
  return true;
}

const mockDataEquipment: string[] = [
  "Compass",
  "Multi-tool Knife",
  "First Aid Kit",
  "Flashlight",
  "Sleeping Bag",
  "Fire Starter",
  "Water Bottle",
  "Backpack",
  "Hiking Boots",
  "Rope",
];
