import { item } from "@/types";

export const getItemKeys = (item: item): (keyof item)[] => {
  return Object.keys(item) as (keyof item)[];
};

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
