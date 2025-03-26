import {useDeleteItem, useGetEquipment, usePutItem} from "@/hooks";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Equipment} from "@/types";

export const useAssetData = (id: string) => {
  const {equipment: equipmentList, setEquipment} = useGetEquipment();
  const [edit, setEdit] = useState(false);
  const {equipment, onSubmit, onDelete} = useEditEquipment(id, equipmentList, setEquipment, setEdit);

  return {
    equipmentList, equipment, edit, setEdit, onSubmit, onDelete
  };
};

export const useEditEquipment = (
  id: string,
  equipmentList: Equipment[],
  setEquipment: (updateFn: (prevData: Equipment[]) => Equipment[]) => void,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>) => {
  const equipment = equipmentList.find((equipment) => equipment.id === id);
  const navigate = useNavigate();
  const {mutateAsync: mutatePut} = usePutItem();
  const {mutateAsync: mutateDelete} = useDeleteItem();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  };

  const onDelete = async () => {
  }

  return {equipment, onSubmit, onDelete}
}