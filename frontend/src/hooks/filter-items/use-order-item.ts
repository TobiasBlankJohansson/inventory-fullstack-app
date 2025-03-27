import {useState} from "react";

export const useOrderItem = <T extends object, K extends keyof T>() => {
  const [order, setOrder] = useState<K | "">("");

  const orderItems = (itemList: T[], order: K | ""): T[] => {
    if (!order) return itemList;

    return [...itemList].sort((a, b) => {
      const aValue = a[order];
      const bValue = b[order];

      if (typeof aValue === "number" && typeof bValue === "number") {
        return aValue - bValue;
      }
      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue);
      }
      return 0;
    });
  };

  return {order, setOrder, orderItems};
};