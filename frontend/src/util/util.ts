import {Item} from "@/types";

export const getItemKeys = (item: Item): (keyof Item)[] => {
  return Object.keys(item) as (keyof Item)[];
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getItemHeaders = (items: Item[]): string[] => {
  const keys = items.length > 0 ? getItemKeys(items[0]) : [];
  return keys.map(capitalize);
};

export const consolidateInventory = (items: Item[]): Item[] => {
  const totals: Record<string, Item> = {};

  items.forEach((item) => {
    if (!totals[item.id]) {
      totals[item.id] = {
        ...item,
        quantity: "0",
        storageArea: "",
        responsible: "Total",
      };
    }
    totals[item.id].quantity = (
      parseInt(totals[item.id].quantity) + parseInt(item.quantity)
    ).toString();
  });

  return [...items, ...Object.values(totals)];
};

export const openModal = (modal: string) =>
  (
    document.getElementById(modal) as HTMLDialogElement
  ).showModal();
