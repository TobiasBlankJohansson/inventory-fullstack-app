import {Item} from "@/types";
import {useMutation} from "@tanstack/react-query";
import {postItem} from "@/api/InventoryApiService.ts";

export const useSaveItem = (
  setItems: (updateFn: (prevItems: Item[]) => Item[]) => void,
  id: string
) => {

  return useMutation({
    mutationFn: postItem,
    onSuccess: (item) => {
      setItems((prev: Item[]) => prev.map((listItem) => listItem.id === id ? listItem = item : listItem));
    },
    onError: (error) => {
      console.error("Error deleting item:", error);
    },
  });
};