import {useState} from "react";
import {useEquipment, useResponsible, useStorage} from "@/features/asset/hooks/fetch";
import {useEditAsset} from "@/features";

export const useAssetData = (id: string, type: string) => {
  const hooksMap = {
    Equipment: useEquipment,
    Responsible: useResponsible,
    Storage: useStorage,
  };

  const hook = hooksMap[type as keyof typeof hooksMap];
  const {asset: assetList, setAsset, usePost, useDelete} = hook();
  const [edit, setEdit] = useState(false);
  const {
    asset,
    onSubmit,
    onDelete
  } = useEditAsset(id, assetList, setAsset, setEdit, usePost(), useDelete());

  return {
    asset, edit, setEdit, onSubmit, onDelete
  };
};

