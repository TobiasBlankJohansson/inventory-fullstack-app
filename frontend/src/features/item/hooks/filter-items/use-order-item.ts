import {useState} from "react";

export const useOrderItem = <T extends object>() => {
  const [order, setOrder] = useState<string>("");

  const resolveOrderKey = (order: string): string => {
    return order;
  };

  const getValue = (item: T, path: string): unknown => {
    return path.split(".").reduce<unknown>((acc, key) => {
      if (acc && typeof acc === "object" && key in acc) {
        return acc[key as keyof typeof acc];
      }
      return undefined;
    }, item);
  };

  const orderItems = (itemList: T[], order: string): T[] => {
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
