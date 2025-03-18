import {Item} from "@/types";
import {useNavigate} from "react-router-dom";
import {useMutation} from "@tanstack/react-query";
import {deleteItem, getItems, postItem, putItem} from "@/api/InventoryFetch.ts";
import {useGet} from "@/hooks";

const queryKey = "items";

export const useFetchItems = () => {
  const {data: items, set: setItems} = useGet(getItems, queryKey)
  return {items, setItems};
};


export const usePostItem = (
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>
) => {
  return useMutation({
    mutationFn: postItem,
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });
};

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
      console.error("Error deleting:", error);
    },
  });
};

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