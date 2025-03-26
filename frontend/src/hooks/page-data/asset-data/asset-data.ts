import {useDeleteEquipment, useGetEquipment, usePutEquipment,} from "@/hooks";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Equipment} from "@/types";
import {FORM_FIELDS_EQUIPMENT} from "@/constants.ts";
import {toast} from "react-toastify";

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
  const {mutateAsync: mutatePut} = usePutEquipment();
  const {mutateAsync: mutateDelete} = useDeleteEquipment();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!equipment) return;

    const newEquipmentData = Object.fromEntries(
      FORM_FIELDS_EQUIPMENT.map(({key}) =>
        [key, new FormData(e.currentTarget).get(`form_field_${key}`)])
    ) as Equipment;

    if (equipment.id != newEquipmentData.id || equipment.name != newEquipmentData.name) {
      if (equipmentList.some(
        (equipment) =>
          equipment.name === newEquipmentData.name && equipment.id === newEquipmentData.id
      )) {
        toast.error("Equipment already exists with name and id");
        return;
      }
      console.log(newEquipmentData)
      const EquipmentData = await mutatePut(newEquipmentData);
      if (!EquipmentData) {
        toast.error("Error updating equipment, try again");
        return;
      }

      setEquipment((prev: Equipment[]) =>
        prev.map((listEquipment) =>
          listEquipment.id === equipment.id ? (listEquipment = EquipmentData) : listEquipment
        )
      );

      toast.success("Equipment updated successfully");
      navigate(`/asset?id=${EquipmentData.id}`);
      setEdit(false);

    }
  }

  const onDelete = async () => {
  }

  return {equipment, onSubmit, onDelete}
}