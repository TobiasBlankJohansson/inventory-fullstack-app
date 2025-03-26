import {useDeleteEquipment, useGetEquipment, usePutEquipment,} from "@/hooks";
import {useState} from "react";
import {useEditAsset} from "@/hooks/formfield/edit-asset-generic.ts";

export const useAssetData = (id: string) => {
  const {equipment: equipmentList, setEquipment} = useGetEquipment();
  const [edit, setEdit] = useState(false);
  const {
    asset,
    onSubmit,
    onDelete
  } = useEditAsset(id, equipmentList, setEquipment, setEdit, usePutEquipment(), useDeleteEquipment());

  return {
    equipmentList, equipment: asset, edit, setEdit, onSubmit, onDelete
  };
};

