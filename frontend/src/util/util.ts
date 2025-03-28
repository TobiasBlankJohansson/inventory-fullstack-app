import { Item } from "@/types";

export const getItemKeys = <T extends object>(item: T): (keyof T)[] => {
  return Object.entries(item).map(([key]) => key as keyof T);
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getTableHeaders = <T extends object>(items: T[]): string[] => {
  const keys = items.length > 0 ? getItemKeys(items[0]) : [];
  return keys.map((key) => capitalize(String(key)));
};

export const consolidateInventory = (items: Item[]): Item[] => {
  const totals: Record<string, Item> = {};

  items.forEach((item) => {
    if (!totals[item.equipment.id]) {
      totals[item.equipment.id] = {
        ...item,
        quantity: "0",
        storageArea: "",
        responsible: "Total",
      };
    }
    totals[item.equipment.id].quantity = (
      parseInt(totals[item.equipment.id].quantity) + parseInt(item.quantity)
    ).toString();
  });
  return [...items, ...Object.values(totals)];
};

export const openModal = (modal: string) =>
  (document.getElementById(modal) as HTMLDialogElement).showModal();

type Option = {
  name: string;
};

export const option = (
  label: string,
  options: {
    storageArea: Option[];
    equipment: Option[];
    responsible: Option[];
  }
) => {
  if (label === "Storage Area") {
    return options.storageArea.map((storage) => storage.name);
  }
  if (label === "Equipment") {
    return options.equipment.map((equipment) => equipment.name);
  }
  if (label === "Responsible") {
    return options.responsible.map((equipment) => equipment.name);
  }
  return undefined;
};
