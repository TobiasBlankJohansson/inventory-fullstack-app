import { Item } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { putItem } from "@/api/InventoryFetch";

export const usePutItem = (
  setItems: (updateFn: (prevItems: Item[]) => Item[]) => void,
  id: string
) => {
  return useMutation({
    mutationFn: putItem,
    onSuccess: (item) => {
      setItems((prev: Item[]) =>
        prev.map((listItem) =>
          listItem.id === id ? (listItem = item) : listItem
        )
      );
    },
    onError: (error) => {
      console.error("Error deleting item:", error);
    },
  });
};
