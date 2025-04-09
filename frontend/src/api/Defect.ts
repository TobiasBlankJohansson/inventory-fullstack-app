import {Defect} from "@/features";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export async function getDefect(): Promise<Defect[]> {
  return await fetch(BACKEND_URL + "/api/defects").then((res) => res.json())
}

export async function postDefect(defect: Defect): Promise<Defect> {
  return await fetch(BACKEND_URL + "/api/defects", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(defect),
  }).then((res) => res.json());
}

export async function putDefect(defect: Defect): Promise<Defect> {
  return fetch(BACKEND_URL + "/api/defects", {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(defect),
  }).then((res) => res.json());
}

export async function deleteDefect(id: string): Promise<boolean> {
  const response = await fetch(BACKEND_URL + "/api/defects/" + id, {
    method: "DELETE",
  });
  return response.ok;
}

