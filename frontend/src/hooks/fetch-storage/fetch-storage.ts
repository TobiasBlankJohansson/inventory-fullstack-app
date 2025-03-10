import { getStorageArea } from "@/api/InventoryApiService";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchStorage = () => {
  const queryClient = useQueryClient();

  const {
    data: storageArea = [],
    isLoading,
    error,
    refetch,
  } = useQuery<string[], Error>({
    queryKey: ["storageArea"],
    queryFn: getStorageArea,
  });

  const setStorageArea = (updateFn: (prevStorage: string[]) => string[]) => {
    queryClient.setQueryData<string[]>(
      ["storageArea"],
      (oldStorage = []) => {
        return updateFn(oldStorage);
      }
    );
  };

  return { storageArea, setStorageArea, isLoading, error, refetch };
};
