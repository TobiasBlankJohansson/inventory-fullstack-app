import { item } from "@/components/tabel/Tabel";

export async function getItems(): Promise<item[]> {

  const response = await fetch("http://localhost:3000/api/items")
  if (!response.ok) {
    throw new Error();
  }
  const items: item[] = await response.json();
  return items;
  const mockData: item[] = [
    { id: "1", name: "Screwdriver", quantity: "3", storageArea: "Annex" },
    { id: "2", name: "Hammer", quantity: "2", storageArea: "Verksdag" },
    { id: "3", name: "Wrench", quantity: "5", storageArea: "Annex" },
    { id: "4", name: "Drill", quantity: "1", storageArea: "Verksdag" },
    { id: "5", name: "Pliers", quantity: "4", storageArea: "Annex" },
    { id: "6", name: "Measuring Tape", quantity: "2", storageArea: "Verksdag" },
    { id: "7", name: "Saw", quantity: "3", storageArea: "Annex" },
    { id: "8", name: "Sander", quantity: "1", storageArea: "Verksdag" },
    { id: "9", name: "Chisel", quantity: "6", storageArea: "Annex" },
    { id: "10", name: "Level", quantity: "2", storageArea: "Verksdag" },
    { id: "11", name: "Utility Knife", quantity: "5", storageArea: "Annex" },
    { id: "12", name: "Cordless Drill", quantity: "2", storageArea: "Verksdag",},
    { id: "13", name: "Clamps", quantity: "4", storageArea: "Annex" },
    { id: "14", name: "Bolt Cutter", quantity: "1", storageArea: "Verksdag" },
    { id: "15", name: "Wire Cutter", quantity: "3", storageArea: "Annex" },
    { id: "16", name: "Workbench", quantity: "1", storageArea: "Verksdag" },
    { id: "17", name: "Heat Gun", quantity: "2", storageArea: "Annex" },
    { id: "18", name: "Paintbrush", quantity: "8", storageArea: "Verksdag" },
    { id: "19", name: "Flashlight", quantity: "5", storageArea: "Annex" },
    { id: "20",name: "Extension Cord",quantity: "3",storageArea: "Verksdag",},
  ];
  return mockData;
}
