import {useGetEquipment} from "@/hooks";
import {useState} from "react";
import {useEditItem} from "@/hooks/create-item/edit-item.ts";

export const useAssetData = (id: string) => {
  const {equipment: equipmentList, setEquipment} = useGetEquipment();
  const [edit, setEdit] = useState(false);
  const {item, onSubmit, onDelete} = useEditItem(id, items, setItems, equipment, setEdit);

  return {
    equipmentList,
    item, edit, setEdit, onSubmit, onDelete
  };
};
