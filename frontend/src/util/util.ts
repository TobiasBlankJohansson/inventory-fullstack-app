import { Item } from "@/types";

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
