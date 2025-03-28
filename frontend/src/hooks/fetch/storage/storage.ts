import { getStorage, postStorage } from "@/api/StorageFetch";

import { useMutation } from "@tanstack/react-query";
import { deleteStorage, putStorage } from "@/api/StorageFetch.ts";
import { useGet } from "@/hooks";

const queryKey = "storage";

export const useStorage = () => {
  const { storage, setStorage } = useGetStorage();
  return {
    asset: storage,
    setAsset: setStorage,
    useGet: useGetStorage,
    usePost: usePostStorage,
    useDelete: useDeleteStorage,
    usePut: usePutStorage,
  };
};

export const useGetStorage = () => {
  const { data: storage, set: setStorage } = useGet(getStorage, queryKey);
  return { storage, setStorage };
};

export const usePostStorage = () => {
  return useMutation({
    mutationFn: postStorage,
  });
};

export const useDeleteStorage = () => {
  return useMutation({
    mutationFn: deleteStorage,
  });
};

export const usePutStorage = () => {
  return useMutation({
    mutationFn: putStorage,
  });
};
