import { useNavigate } from "react-router-dom";
import { useFetchItems } from "../fetch-items";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItem } from "@/api/InventoryApiService";

const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      navigate("/");
    },
    onError: (error) => {
      console.error("Error deleting item:", error);
    },
  });
};

export const useItemEditorData = (id: string) => {
  const { items } = useFetchItems();
  const item = items.find((item) => item.id === id);
  const { mutate } = useDeleteItem();

  const onDelete = () => {
    if (item) {
      mutate(item.id);
    }
  };

  return { item, useDeleteItem, onDelete };
};
