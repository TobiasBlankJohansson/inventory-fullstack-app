import {useMutation} from "@tanstack/react-query";
import {useGet} from "@/hooks";
import {deleteDefect, getDefect, postDefect, putDefect} from "@/api/Defect.ts";

const queryKey = "defect";

export const useDefect = () => {
  const {defect, setDefect} = useGetDefect();
  return {
    asset: defect,
    setAsset: setDefect,
    useGet: useGetDefect,
    usePost: usePostDefect,
    useDelete: useDeleteDefect,
    usePut: usePutDefect
  }
}

export const useGetDefect = () => {
  const {data: defect, set: setDefect} = useGet(getDefect, queryKey);
  return {defect, setDefect};
};

export const usePostDefect = () => {
  return useMutation({
    mutationFn: postDefect,
  });
};

export const useDeleteDefect = () => {
  return useMutation({
    mutationFn: deleteDefect,
  });
};

export const usePutDefect = () => {
  return useMutation({
    mutationFn: putDefect,
  });
};