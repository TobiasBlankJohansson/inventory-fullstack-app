import {deleteEquipment, getEquipment, postEquipment, putEquipment} from "@/api/EquipmentFetch";
import {useMutation} from "@tanstack/react-query";
import {useGet} from "@/hooks";

const queryKey = "equipment";

export const useEquipment = () => {
  const {equipment, setEquipment} = useGetEquipment();
  return {
    asset: equipment,
    setAsset: setEquipment,
    useGet: useGetEquipment,
    usePost: usePostEquipment,
    useDelete: useDeleteEquipment,
    usePut: usePutEquipment
  }
}

export const useGetEquipment = () => {
  const {data: equipment, set: setEquipment} = useGet(getEquipment, queryKey);
  return {equipment, setEquipment};
};

export const usePostEquipment = () => {
  return useMutation({
    mutationFn: postEquipment,
  });
};

export const useDeleteEquipment = () => {
  return useMutation({
    mutationFn: deleteEquipment,
  });
};

export const usePutEquipment = () => {
  return useMutation({
    mutationFn: putEquipment,
  });
};