const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getResponsible(): Promise<string[]> {
  return mockDataResponsible;
  return await fetch(BACKEND_URL + "/api/items").then((res) => res.json());
}

export async function postResponsible(responsible: string): Promise<boolean> {
  if (responsible) {
    return true;
  }
  return true;
}

const mockDataResponsible: string[] = [
  "John Doe",
  "Jane Smith",
  "Emily Johnson",
  "Michael Brown",
  "Sarah Wilson",
  "David Miller",
  "Jessica Davis",
  "Daniel Martinez",
  "Olivia Taylor",
  "James Anderson",
];
