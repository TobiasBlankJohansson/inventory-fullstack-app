import {Responsible} from "@/features";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getResponsible(): Promise<Responsible[]> {
  return await fetch(BACKEND_URL + "/api/responsible").then((res) =>
    res.json()
  );
}

export async function postResponsible(responsible: Responsible): Promise<Responsible> {
  return await fetch(BACKEND_URL + "/api/responsible", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({name: responsible.name}),
  }).then((res) => res.json());
}

export async function putResponsible(responsible: Responsible): Promise<Responsible> {
  return fetch(BACKEND_URL + "/api/responsible", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(responsible),
  }).then((res) => res.json());
}

export async function deleteResponsible(id: string): Promise<boolean> {
  const response = await fetch(BACKEND_URL + "/api/responsible/" + id, {
    method: "DELETE",
  });
  return response.ok;
}
