import { deleteItem } from "@/api/InventoryFetch";
import { Item } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useDeleteItem = (
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
