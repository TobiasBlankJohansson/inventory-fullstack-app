import { item } from "@/components/tabel/Tabel";

export function getItems():item[] {
    const mockData: item[] = [
      { id: "1", name: "Screwdriver", quantity: "3", storageArea: "A1" },
      { id: "2", name: "Hammer", quantity: "2", storageArea: "B3" },
      { id: "3", name: "Wrench", quantity: "5", storageArea: "C2" },
      { id: "4", name: "Drill", quantity: "1", storageArea: "D4" },
      { id: "5", name: "Pliers", quantity: "4", storageArea: "A2" },
      { id: "6", name: "Measuring Tape", quantity: "2", storageArea: "B1" },
      { id: "7", name: "Saw", quantity: "3", storageArea: "C3" },
      { id: "8", name: "Sander", quantity: "1", storageArea: "D2" },
      { id: "9", name: "Chisel", quantity: "6", storageArea: "A3" },
      { id: "10", name: "Level", quantity: "2", storageArea: "B4" },
      { id: "11", name: "Utility Knife", quantity: "5", storageArea: "C1" },
      { id: "12", name: "Cordless Drill", quantity: "2", storageArea: "D1" },
      { id: "13", name: "Clamps", quantity: "4", storageArea: "A4" },
      { id: "14", name: "Bolt Cutter", quantity: "1", storageArea: "B2" },
      { id: "15", name: "Wire Cutter", quantity: "3", storageArea: "C4" },
      { id: "16", name: "Workbench", quantity: "1", storageArea: "D3" },
      { id: "17", name: "Heat Gun", quantity: "2", storageArea: "A5" },
      { id: "18", name: "Paintbrush", quantity: "8", storageArea: "B5" },
      { id: "19", name: "Flashlight", quantity: "5", storageArea: "C5" },
      { id: "20", name: "Extension Cord", quantity: "3", storageArea: "D5" },
    ];
    return mockData;
}