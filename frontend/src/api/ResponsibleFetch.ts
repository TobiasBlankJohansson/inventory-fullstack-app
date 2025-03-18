import {Responsible} from "@/types";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getResponsible(): Promise<Responsible[]> {
  return mockDataResponsible;
  return await fetch(BACKEND_URL + "/api/items").then((res) => res.json());
}

export async function postResponsible(responsible: string): Promise<Responsible> {
  return {id: "0", name: responsible};
}

const mockDataResponsible: Responsible[] = [
  {id: "1", name: "John Doe"},
  {id: "2", name: "Jane Smith"},
  {id: "3", name: "Emily Johnson"},
  {id: "4", name: "Michael Brown"},
  {id: "5", name: "Sarah Wilson"},
  {id: "6", name: "David Miller"},
  {id: "7", name: "Jessica Davis"},
  {id: "8", name: "Daniel Martinez"},
  {id: "9", name: "Olivia Taylor"},
  {id: "10", name: "James Anderson"},
];
