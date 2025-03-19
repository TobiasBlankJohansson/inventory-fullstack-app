import {useMutation} from "@tanstack/react-query";
import {deleteItem, getItems, postItem, putItem} from "@/api/InventoryFetch.ts";
import {useGet} from "@/hooks";

const queryKey = "items";

export const useGetItems = () => {
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

export const useDeleteItem = () => {
  return useMutation({
    mutationFn: deleteItem,
  });
};

export const usePutItem = () => {
  return useMutation({
    mutationFn: putItem,
  });
};