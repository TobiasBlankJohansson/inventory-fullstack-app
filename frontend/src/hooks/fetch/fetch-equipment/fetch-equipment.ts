import { getEquipment } from "@/api/EquipmentFetch";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchEquipment = () => {
  const queryClient = useQueryClient();

  const {
    data: equipment = [],
    isLoading,
    error,
    refetch,
  } = useQuery<string[], Error>({
    queryKey: ["equipment"],
    queryFn: getEquipment,
  });

  const setEquipment = (updateFn: (prev: string[]) => string[]) => {
    queryClient.setQueryData<string[]>(["equipment"], (old = []) => {
      return updateFn(old);
    });
  };

  return { equipment, setEquipment, isLoading, error, refetch };
};
