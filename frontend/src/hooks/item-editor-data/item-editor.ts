import { useNavigate } from "react-router-dom";
import { useFetchItems } from "../fetch-items";
import { useMutation } from "@tanstack/react-query";
import { deleteItem } from "@/api/InventoryApiService";
import { Item } from "@/types";

const useDeleteItem = (
  setItems: (updateFn: (prevItems: Item[]) => Item[]) => void,
  id: string
) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      setItems((prev: Item[]) => prev.filter((item) => item.id != id));
      navigate("/");
    },
    onError: (error) => {
      console.error("Error deleting item:", error);
    },
  });
};

export const useItemEditorData = (id: string) => {
  const { items, setItems } = useFetchItems();
  const item = items.find((item) => item.id === id);
  const { mutate } = useDeleteItem(setItems, id);

  const onDelete = () => {
    if (item) {
      mutate(item.id);
    }
  };

  return { item, useDeleteItem, onDelete };
};
