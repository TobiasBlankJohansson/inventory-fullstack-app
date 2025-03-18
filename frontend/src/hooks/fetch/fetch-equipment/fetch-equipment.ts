import {getEquipment} from "@/api/EquipmentFetch";
import {useQuery, useQueryClient} from "@tanstack/react-query";
import {Equipment} from "@/types";

export const useFetchEquipment = () => {
  const queryClient = useQueryClient();

  const {
    data: equipment = [],
    isLoading,
    error,
    refetch,
  } = useQuery<Equipment[], Error>({
    queryKey: ["equipment"],
    queryFn: getEquipment,
  });

  const setEquipment = (updateFn: (prev: Equipment[]) => Equipment[]) => {
    queryClient.setQueryData<Equipment[]>(["equipment"], (old = []) => {
      return updateFn(old);
    });
  };

  return {equipment, setEquipment, isLoading, error, refetch};
};
