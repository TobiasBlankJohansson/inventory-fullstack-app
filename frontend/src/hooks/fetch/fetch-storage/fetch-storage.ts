import {getStorageArea} from "@/api/StorageFetch";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Storage} from "@/types";

export const useFetchStorage = () => {
  const queryClient = useQueryClient();

  const {
    data: storageArea = [],
    isLoading,
    error,
    refetch,
  } = useQuery<Storage[], Error>({
    queryKey: ["storageArea"],
    queryFn: getStorageArea,
  });

  const setStorageArea = (updateFn: (prevStorage: Storage[]) => Storage[]) => {
    queryClient.setQueryData<Storage[]>(["storageArea"], (oldStorage = []) => {
      return updateFn(oldStorage);
    });
  };

  return {storageArea, setStorageArea, isLoading, error, refetch};
};
