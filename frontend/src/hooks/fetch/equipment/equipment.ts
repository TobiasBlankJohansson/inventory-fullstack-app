import {getEquipment, postEquipment} from "@/api/EquipmentFetch";
import {useMutation} from "@tanstack/react-query";
import {useGet} from "@/hooks";

const queryKey = "equipment";

export const useGetEquipment = () => {
  const {data: equipment, set: setEquipment} = useGet(getEquipment, queryKey);
  return {equipment, setEquipment};
};
export const usePostEquipment = () => {
  return useMutation({
    mutationFn: postEquipment,
  });
}