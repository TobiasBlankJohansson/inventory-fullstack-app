import {saveAsset, useDeleteAsset, useEquipment, useOrderItem, useResponsible, useStorage} from "@/features";
import {useState} from "react";

export const useAssetTable = (type: string) => {
  const hooksMap = {
    Equipment: useEquipment,
    Responsible: useResponsible,
    Storage: useStorage,
  };

  const hook = hooksMap[type as keyof typeof hooksMap];

  const {asset, setAsset, usePost, useDelete} = hook();
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const saveAssetEquipment = saveAsset(setAsset, usePost(), asset);
  const deleteAssetEquipment = useDeleteAsset(
    setAsset,
    useDelete(),
    asset,
    checkedItems,
    setCheckedItems
  );
  const orderObject = useOrderItem();
  const useId = type == "Equipment";

  return {
    asset,
    orderObject,
    saveAsset: saveAssetEquipment,
    deleteAsset: deleteAssetEquipment,
    checkedItems,
    setCheckedItems,
    useId
  };
};
