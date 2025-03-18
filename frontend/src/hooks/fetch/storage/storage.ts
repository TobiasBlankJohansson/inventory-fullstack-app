import {getStorageArea, postStorageArea} from "@/api/StorageFetch";
import {useGet} from "@/hooks";
import {useMutation} from "@tanstack/react-query";

const queryKey = "storageArea";

export const useGetStorage = () => {
  return useGet(getStorageArea, queryKey);
};

export const usePostStorage = (
  setErrorMessage: React.Dispatch<React.SetStateAction<string | null>>) => {
  return useMutation({
    mutationFn: postStorageArea,
    onError: (error) => {
      setErrorMessage(error.message);
    },
  });
}