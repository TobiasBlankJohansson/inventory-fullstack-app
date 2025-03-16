import { getResponsible } from "@/api/ResponsibleFetch";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchResponsible = () => {
  const queryClient = useQueryClient();

  const {
    data: responsible = [],
    isLoading,
    error,
    refetch,
  } = useQuery<string[], Error>({
    queryKey: ["responsible"],
    queryFn: getResponsible,
  });

  const setResponsible = (updateFn: (prevStorage: string[]) => string[]) => {
    queryClient.setQueryData<string[]>(["responsible"], (oldStorage = []) => {
      return updateFn(oldStorage);
    });
  };

  return { responsible, setResponsible, isLoading, error, refetch };
};
