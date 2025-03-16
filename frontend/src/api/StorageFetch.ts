const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

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
