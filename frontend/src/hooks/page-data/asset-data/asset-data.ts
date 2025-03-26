import {useGetEquipment,} from "@/hooks";
import {useState} from "react";

export const useAssetData = (id: string) => {
  const {equipment: equipmentList, setEquipment} = useGetEquipment();
  const [edit, setEdit] = useState(false);
  const {equipment, onSubmit, onDelete} = useEditEquipment(id, equipmentList, setEquipment, setEdit);

  return {
    equipmentList, equipment, edit, setEdit, onSubmit, onDelete
  };
};

