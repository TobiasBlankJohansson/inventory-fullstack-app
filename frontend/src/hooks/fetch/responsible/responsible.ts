import {deleteResponsible, getResponsible, postResponsible, putResponsible} from "@/api/ResponsibleFetch";
import {useMutation} from "@tanstack/react-query";
import {useGet} from "@/hooks";

const queryKey = "responsible";

export const useResponsible = () => {
  const {responsible, setResponsible} = useGetResponsible();
  return {
    asset: responsible,
    setAsset: setResponsible,
    useGet: useGetResponsible,
    usePost: usePostResponsible,
    useDelete: useDeleteResponsible,
    usePut: usePutResponsible
  }
}

export const useGetResponsible = () => {
  const {data: responsible, set: setResponsible} = useGet(getResponsible, queryKey);
  return {responsible, setResponsible};
};

export const usePostResponsible = () => {
  return useMutation({
    mutationFn: postResponsible,
  });
}

export const useDeleteResponsible = () => {
  return useMutation({
    mutationFn: deleteResponsible,
  });
};

export const usePutResponsible = () => {
  return useMutation({
    mutationFn: putResponsible,
  });
};
