import {getResponsible} from "@/api/ResponsibleFetch";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Responsible} from "@/types";

export const useFetchResponsible = () => {
  const queryClient = useQueryClient();

  const {
    data: responsible = [],
    isLoading,
    error,
    refetch,
  } = useQuery<Responsible[], Error>({
    queryKey: ["responsible"],
    queryFn: getResponsible,
  });

  const setResponsible = (updateFn: (prevStorage: Responsible[]) => Responsible[]) => {
    queryClient.setQueryData<Responsible[]>(["responsible"], (oldStorage = []) => {
      return updateFn(oldStorage);
    });
  };

  return {responsible, setResponsible, isLoading, error, refetch};
};
