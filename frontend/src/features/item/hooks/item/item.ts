import {useMutation} from "@tanstack/react-query";
import {deleteItem, getItems, postItem, putItem} from "@/api/InventoryFetch.ts";
import {useGet} from "@/hooks";

const queryKey = "items";

export const useGetItems = () => {
  const {data: items, set: setItems} = useGet(getItems, queryKey)
  return {items, setItems};
};


export const usePostItem = () => {
  return useMutation({
    mutationFn: postItem,
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