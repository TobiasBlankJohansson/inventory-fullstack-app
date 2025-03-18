import {useQuery, useQueryClient} from "@tanstack/react-query";

export const useGet = <T>(
  queryFn: () => Promise<T[]>,
  queryKey: string) => {

  const queryClient = useQueryClient();

  const {
    data: data = [],
    isLoading,
    error,
    refetch,
  } = useQuery<T[], Error>({
    queryKey: [queryKey],
    queryFn: queryFn,
  });

  const set = (updateFn: (prevData: T[]) => T[]) => {
    queryClient.setQueryData<T[]>([queryKey], (old = []) => {
      return updateFn(old);
    });
  };

  return {data, set, isLoading, error, refetch};
};
