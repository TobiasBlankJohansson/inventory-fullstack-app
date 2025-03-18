import {getResponsible, postResponsible} from "@/api/ResponsibleFetch";
import {useMutation} from "@tanstack/react-query";
import {useGet} from "@/hooks";

const queryKey = "responsible";

export const useGetResponsible = () => {
  const {data: responsible, set: setResponsible} = useGet(getResponsible, queryKey);
  return {responsible, setResponsible};
};
export const usePostResponsible = () => {
  return useMutation({
    mutationFn: postResponsible,
  });
}
