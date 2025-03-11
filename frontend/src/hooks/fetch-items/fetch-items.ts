import { getItems } from "@/api/InventoryApiService";
import { Item } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchItems = () => {
  const queryClient = useQueryClient();
  const {
    data: items = [],
    isLoading,
    error,
    refetch,
  } = useQuery<Item[], Error>({
    queryKey: ["items"],
    queryFn: getItems,
    staleTime: 100 * 60 * 5,
  });

  const setItems = (updateFn: (prevItems: Item[]) => Item[]) => {
    queryClient.setQueryData<Item[]>(["items"], (oldItems = []) => {
      return updateFn(oldItems);
    });
  };
  return { items, setItems, isLoading, error, refetch };
};
