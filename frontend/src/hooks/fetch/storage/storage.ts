import {getStorageArea, postStorageArea} from "@/api/StorageFetch";

import {useMutation} from "@tanstack/react-query";
import {deleteStorage, putStorage} from "@/api/StorageFetch.ts";
import {useGet} from "@/hooks";

const queryKey = "storageArea";

export const useStorage = () => {
  const {storageArea, setStorageArea} = useGetStorage();
  return {
    asset: storageArea,
    setAsset: setStorageArea,
    useGet: useGetStorage,
    usePost: usePostStorage,
    useDelete: useDeleteStorage,
    usePut: usePutStorage
  }
}

export const useGetStorage = () => {
  const {data: storageArea, set: setStorageArea} = useGet(getStorageArea, queryKey);
  return {storageArea, setStorageArea};
};

export const usePostStorage = () => {
  return useMutation({
    mutationFn: postStorageArea,
  });
}

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
