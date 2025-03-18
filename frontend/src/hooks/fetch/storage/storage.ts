import {getStorageArea, postStorageArea} from "@/api/StorageFetch";

import {useMutation} from "@tanstack/react-query";
import {useGet} from "@/hooks";

const queryKey = "storageArea";

export const useGetStorage = () => {
  const {data: storageArea, set: setStorageArea} = useGet(getStorageArea, queryKey);
  return {storageArea, setStorageArea};
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