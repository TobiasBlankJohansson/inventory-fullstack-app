import {useState} from "react";
import {Item} from "@/features";

export const useOrderItem = () => {
  const [order, setOrder] = useState<string>("");

  const resolveOrderKey = (order: string): string => {
    if (order === "equipment") return "equipment.name";
    if (order === "id") return "equipment.id";
    return order;
  };

  const getValue = (item: Item, path: string): unknown => {
    return path.split(".").reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object" && key in acc) {
        return acc[key as keyof typeof acc];
      }
      return undefined;
    }, item);
  };

  const orderItems = (itemList: Item[], order: string): Item[] => {
    if (!order) return itemList;

    const resolvedOrder = resolveOrderKey(order);

    return [...itemList].sort((a, b) => {
      const aValue = getValue(a, resolvedOrder);
      const bValue = getValue(b, resolvedOrder);

      if (typeof aValue === "number" && typeof bValue === "number") {
        return aValue - bValue;
      }
      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue);
      }

      return 0;
    });
  };

  return {
    order,
    setOrder,
    orderItems,
  };
};